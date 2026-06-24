# Create the Update-Website Command

You are running the `/create-update-website-cmd` command. It generates the project-specific `.claude/commands/update-the-website.md` command for this API documentation project.

Follow the steps below exactly.

---

## Step 1 — Detect the API-specific submodule

List the immediate subfolders of `shared/` and exclude `DocApi`.

- If exactly one subfolder remains, that is the API-specific submodule. Confirm the detected name with the user before continuing.
- If multiple subfolders remain, use `AskUserQuestion` to ask: "Which submodule contains the API-specific specs?" — list each subfolder as an option.
- If no subfolder remains, ask the user: "What is the folder name of the API-specific submodule under `shared/`? (e.g. `ProAbonoLive`)"

Record this as **`API_SUBMODULE`** (folder name only, e.g. `ProAbonoLive`).

---

## Step 2 — Derive the human-readable label

Read `shared/{API_SUBMODULE}/CLAUDE.md`. Use the first `#` heading as the API name (e.g. `ProAbonoLive`).

Form the checklist label as `"{API_NAME} specs"` — but if the CLAUDE.md description or title makes a more human-readable variant obvious (e.g. `API Live specs` for `ProAbonoLive`), use that instead.

If `CLAUDE.md` does not exist, ask the user: "What label should appear in the checklist for the `shared/{API_SUBMODULE}` submodule? (e.g. `API Live specs`)"

Record this as **`API_SUBMODULE_LABEL`**.

---

## Step 3 — Get the source-to-page mapping

Check whether `specs/pipeline/authoring.md` exists in this project.

**If it exists:** read it. Locate the table under the **Source files** section — the table that maps spec files in `shared/{API_SUBMODULE}` to website pages. Record this table verbatim as **`SOURCE_FILE_TABLE`**.

**If it does not exist:** ask the user:

> I need a Markdown table mapping source spec files in `shared/{API_SUBMODULE}` to the website pages they influence. For example:
>
> | Source file | Used to author |
> |---|---|
> | `shared/{API_SUBMODULE}/resources/` (all `.md` files) | Source reference for all resource pages |
> | `shared/{API_SUBMODULE}/specs/convention.md` | Authentication page |
>
> Please provide the table. At minimum, `specs/convention.md` is always present.

Record the result as **`SOURCE_FILE_TABLE`**.

---

## Step 4 — Generate the command file

Write `.claude/commands/update-the-website.md`. The file must exactly follow the structure below; replace every `{API_SUBMODULE}`, `{API_SUBMODULE_LABEL}`, and `{SOURCE_FILE_TABLE}` with the values gathered above.

Note: code fences inside the generated file use triple backticks; write them as-is in the output file.

---

### Generated file structure

**Preamble:**

```
# Update the Website

You are running the `/update-the-website` command. Follow the steps below exactly.

---

## Step 1 — Present the checklist

Use `AskUserQuestion` with `multiSelect: true` to ask the user which actions to perform. The question is: "Which update steps do you want to run?"

Options (in this order):
1. **Pull the latest version of the {API_SUBMODULE_LABEL}** — Update the `shared/{API_SUBMODULE}` submodule to the latest remote commit.
2. **Pull the latest version of the API Documentation specs** — Update the `shared/DocApi` submodule to the latest remote commit.
3. **Re-generate the API reference** — Run `npm run gen-api-docs` in the `website/` folder.
4. **Adjust authored pages** — Compare the spec source files against the authored website pages and resolve discrepancies.
5. **Full audit of the website** — Audit the specs folder against the website source (long, costs many tokens).
6. **Commit** — Stage, commit, and push all changes in the root repository.

Wait for the user's selections before doing anything.

---

## Step 2 — Execute selected actions in order

Run only the checked actions, in the order listed above (1 → 6). Stop if an error or unexpected result occurs — do not proceed to the next action. If a decision is needed, prompt the user before continuing.
```

**Action 1:**

```
---

### Action 1 — Pull the latest version of the {API_SUBMODULE_LABEL}

Run the following command from the repository root:

​```
git submodule update --remote shared/{API_SUBMODULE}
​```

Report whether the submodule was updated (include the new commit hash if it changed) or was already up to date.

**Do nothing else after this.** Do not sync the specs or update the website as part of this action — that is handled by the other actions.
```

**Action 2:**

```
---

### Action 2 — Pull the latest version of the API Documentation specs

Run the following command from the repository root:

​```
git submodule update --remote shared/DocApi
​```

Report whether the submodule was updated (include the new commit hash if it changed) or was already up to date.

**Do nothing else after this.** Do not sync the specs or update the website as part of this action — that is handled by the other actions.
```

**Action 3:**

```
---

### Action 3 — Re-generate the API reference

Run the following command from the `website/` folder:

​```
npm run gen-api-docs
​```

Report the output. If an error occurs, report it clearly and **stop the entire process** — do not proceed to the next action.
```

**Action 4** — insert `{SOURCE_FILE_TABLE}` where indicated:

```
---

### Action 4 — Adjust authored pages

The following source files in `shared/{API_SUBMODULE}` are used when authoring the non-API-reference website pages:

{SOURCE_FILE_TABLE}

Follow these steps:

**4a. Identify what changed in the submodule.**
Run `git -C shared/{API_SUBMODULE} log --oneline -20` to see recent commits. Then check for changes since the previous submodule commit using `git -C shared/{API_SUBMODULE} diff HEAD~1 HEAD -- specs/` (adjust the path range to match the source files above if needed).

If the submodule was just updated (Action 1 was also checked), you can instead diff between the old and new commit:
- Before Action 1, the old commit was recorded in `git show HEAD:shared/{API_SUBMODULE}` — use it here.
- After Action 1, the new commit is at `git rev-parse HEAD:shared/{API_SUBMODULE}`.

**4b. Read the source spec files** that have changed (or all of them if you cannot determine what changed).

**4c. Read the corresponding authored pages** in the website source (under `website/docs/` or `website/src/pages/`). Consult `specs/pipeline/authoring.md` and `specs/functional/` for the page locations.

**4d. For each discrepancy** — a case where the source spec says X but the authored website page says Y, or something present in the spec is missing from the page — present it to the user using a numbered list. For each item, offer at least 2 options, for example:
- **Option A — Update the website page** to reflect the spec change (describe what would change).
- **Option B — Leave the website page as-is** (explain why this might be acceptable).

Present **one discrepancy at a time**. Wait for the user's decision, apply it if needed, then move to the next.

If no discrepancies are found, report that and move on.
```

**Action 5:**

```
---

### Action 5 — Full audit of the website

Apply this prompt verbatim:

> Audit the specs folder against the actual website, then walk me through each discrepancy.
>
> Steps:
> 1. Read `specs/index.md` to understand the specs structure, then read all relevant specs files.
> 2. Read the website source (`website/src/`, `website/static/`, and any config files) to understand what is actually built.
> 3. Produce a complete numbered list of discrepancies — things where the specs say X but the website does Y (or vice versa).
> 4. Present discrepancy #1 only: describe what the specs say, what the website actually does, and propose two options — fix the specs to match the website, or fix the website to match the specs. Ask me which to apply.
> 5. Wait for my decision, apply it if needed, then move to #2, and so on until the list is exhausted.
>
> Do not batch or pre-apply fixes. One discrepancy at a time, wait for my go-ahead each time.
```

**Action 6:**

```
---

### Action 6 — Commit

**Always ask the user to confirm before committing.** Present a summary of what will be staged, propose a commit message, and wait for explicit approval.

Once the user approves:
1. Stage all relevant changes (prefer staging specific files over `git add -A` to avoid accidentally including `.env` or large binaries).
2. Commit with the approved message.
3. Push to the remote.

Report the result (commit hash, push confirmation, or any error).
```
