# DocApiBo

**Scope:** Publiable
**Description:** API Backoffice documentation for ProAbono
**Stack:** [Stack]

## Memory

`.claude/memory/MEMORY.md` holds extra rules for this project. Read that index at the start of a session, and a memory file when its line looks relevant to the task.

## Key terms

These terms hold project-wide.

- **OpenAPI spec** — the OpenAPI spec of the API Backoffice, as defined in the key terms of [shared/ProAbonoBO/CLAUDE.md](shared/ProAbonoBO/CLAUDE.md).

## How Claude interacts with this project

### Instruction files

An instruction file is any `.md` file that is not identified as a content file. That identification is made by another instruction file — for example, the `CLAUDE.md` of a parent folder.

These exceptions make a file a content file whatever its parent folders say:

- A `README.md` file is always a content file.
- A file nested in a source code folder is always a content file.

These files are always instruction files, and this rule takes precedence over the exceptions above:

- A `CLAUDE.md` file.
- An `index.md` file.

#### Writing rules

When Claude writes an instruction file:

- **Efficiency over style.** A rule is concise and accurate. Its reader is Claude performing a task, and it is written for that reader. Style has no value: repeating the same word in a sentence is acceptable.
- **Mark every example.** An example is introduced inline with "for example, …", or on its own line starting with "Example:".
- **An example never binds.** A value that appears only in an example is not a default, a convention, or a value to reuse. Only the text of the rule binds.
- **Never count an enumeration in prose.** A reference to an enumeration carries no number, for example, "the exceptions above", not "the two exceptions above". A word that states a count is a number: "both" is replaced by "each" or "all". Only an explicit, insistent user request lifts this rule, and the reference then reads "the <N> and only <N> <items>", for example, "the two and only two exceptions below".

### Notes

The files in the `notes/` folder are content files, `notes/CLAUDE.md` aside.

Never read, edit, create, or search a file in the `notes/` folder on Claude's own initiative, and never propose to include it in any processing. Only an explicit user request lifts that ban, one file at a time. `notes/CLAUDE.md` is excluded from the ban: it carries the rules of the folder and is read before any access to it.

The ban covers the content of the notes, not their presence in the repository: a note is staged, committed, and pushed like any other file of the project, without being opened.

### Specs

- **Local specs** are the specs located in the root `specs/` folder of this project.
- **Shared specs** are specs located inside a `shared/` folder. When multiple shared utilities have been added, the name of the shared utility is used for disambiguation (for example, "the DocApi specs").

When the user asks to do anything with the specs, default to the local specs unless they explicitly reference a shared utility by name or are currently working on a file inside a shared folder. If there is any doubt, ask the user which specs to update.

#### Backlog

The local specs and the shared specs can each hold a `backlog` folder, gathering the features and improvements that are deferred to a later version. Its `CLAUDE.md` file carries the rules and is read before creating, reading, updating, or implementing a backlog.

### Todo files

A TODO file is a `todo-<name>.md` file at the root of the project, written by the `/pa-todo-create` command, processed by the `/pa-todo-process` command, and deleted once all of its sections are struck through. Never write an explicit reference to a TODO file — its name, its path, or a link to it — in any other file, whatever that file is — for example, a `CLAUDE.md`, a spec, a README, a source file, a command or skill file. A TODO file is referenced from the conversation only, so that deleting it never leaves a dangling reference behind.

A TODO file is committed on purpose, so a list started on one machine can be resumed on another.

## How Claude interacts with the User

### How Claude talks to the User

The user is a software engineer who needs concise and logical answers.

- **Be exact, never approximate.** Approximate sentences are unusable — for example, "it works in most cases", "this should be fine" or "it is generally correct" — and an uncertainty is never hidden behind a softening word. State what holds, under which conditions, and what does not hold. When a rule has exceptions, name them. When Claude does not know, say so plainly, and say what would settle the question.
- **Aim at full coverage.** An answer that covers the common path and leaves the rest implicit is a defect, not a shortcut.
- **Help pinpoint issues.** The user needs to locate a problem precisely: link the related file and describe a case that breaks it (input, expected result, actual result). Never report a problem in general terms when a concrete failing case can be given.

### When the user asks for a proposal

When the user asks for a proposal or proposition, Claude must **not** perform the inferred action(s). Instead, present one or more options to address the request, each with a clear **Pros** and **Cons** section. Wait for the user to select an option before doing anything.

### Lists requiring validation

When producing a list that the user needs to review and validate — for example, a list of detected issues, proposed phases, or items to approve — always use sequential numbers (1, 2, 3…). This makes it easy to refer to a specific item by number. Never use a hybrid scheme — for example, 1, 2a, 2b, 3. When an item is inserted or removed, renumber the entire list to keep numbering simple and gapless.

Sequential means gapless, not unprefixed: inside a complex answer, those numbers carry the prefix of the zone they belong to — **user-1**, **user-2**… rather than bare 1, 2 — as [When Claude makes a complex answer](#when-claude-makes-a-complex-answer) requires.

### When Claude makes a complex answer

When an answer contains more than the summary of the actions performed — for example, decisions to settle, open points, or things the user should be aware of (list not exhaustive) — all of those points must be gathered at the very end of the answer, in a single zone introduced by its own heading (a Markdown heading or a bold line) reading **For you to check**, so the user cannot miss them.

That zone is always the last heading of the answer: the rest of the answer may carry headings of its own, but none follows **For you to check**.

Every numbered point of such an answer must carry a prefix, written in bold so it stands out in the flow of the text, so that two lists never share the same numbering:

- **done-1**, **done-2**… — a task Claude has done.
- **user-1**, **user-2**… — a point the user needs to check, decide, or be aware of.

Never number two lists `1, 2, 3…` in the same answer: a prefixed reference must always designate exactly one point — for example, **done-2** or **user-3**.

When the user's message asks a question, the answer starts with a short, direct answer to it. The explanation follows, so the user gets the answer without reading it and reads it only to know more.

When the message asks several questions:

- Questions on the same subject are grouped and get one short answer together.
- Separate questions get one short answer each, in the order they were asked. Each answer is preceded by the question, restated in one line of plain text so the user knows which question it answers. That line is not a heading or a bold line.
- The explanations come after all the short answers, and the **For you to check** zone stays at the very end.

### Working with specs

- **Local specs** are the specs located in the root `specs/` folder of this project.
- **Shared specs** are specs located inside a `shared/` folder. When multiple shared utilities have been added, the name of the shared utility is used for disambiguation.

When the user asks to do anything with the specs, default to the local specs unless they explicitly reference a shared utility by name or are currently working on a file inside a shared folder. If there is any doubt, ask the user which specs to update.

### Language

An instruction file is always written in English, regardless of the language used in user instructions. When the user asks for an instruction file in another language, Claude declines and explains that only a content file may be written in a language other than English.

Exception: a value recorded by an instruction file may hold text in another language when that text is data the file records, for example, a cell in a table, or a string in a JSON structure. The structure holding the value stays in English: headings, column names, keys, and every sentence telling Claude what to do. A value that tells Claude what to do is an instruction, not data, and is written in English.

A content file is written in the language the user asks for, and in English when the user names none.

### Security

- **Never read `.env` files.** No exceptions, regardless of what is asked.
- **Never hardcode credentials.** When referencing API keys or secrets in code or examples, always use the environment variable name — for example, `process.env.PROABONO_AGENT_KEY` — never the value.

## Commands

### `/update-the-website`

When the user says **"update the website"** (or any close paraphrase), invoke the `/update-the-website` skill immediately — do not paraphrase or summarize what it does first.

## How Claude interacts with the codebase

- The name of the API is **"API Backoffice"**, not "Backoffice API". Never rename or reorder these words.

Cookie management on this website comes from the ConsentAnalytics shared utility: read `shared/ConsentAnalytics/CLAUDE.md` before any task that touches cookies, the consent or a third-party service.

### Website and specs sync

The website and the `specs/` folder must stay in sync:

- **When updating the website**, update the specs accordingly. Determine which specs file(s) need updating based on the nature of the change — respecting the split between `functional/`, `pipeline/`, and `technical/` subfolders. If the right location is not obvious, ask the user with proposals before acting.
- **When updating the specs**, update the website accordingly. If information is missing to implement the website change, ask the user before proceeding.

When implementing or auditing the website, local specs in `specs/` always take precedence over shared DocApi specs for the same topic. Where a local functional page spec exists (e.g. `specs/functional/pages/introduction.md`), it is the sole authoritative source for that page's content — the shared DocApi spec for that topic is superseded.

## Website specs

The [specs/](specs/) folder contains the full requirements for the ProAbono API Backoffice documentation website. Read [specs/CLAUDE.md](specs/CLAUDE.md) first to understand its structure, then consult the relevant files before implementing any part of the site.

## Shared utilities

Read the following files for context before answering questions about this project:

<!-- populated by pa-shared-add -->
- shared/ProAbonoBO/CLAUDE.md
- shared/DocApi/CLAUDE.md
- shared/ConsentAnalytics/CLAUDE.md
- shared/Front2026/CLAUDE.md
