---
title: Add guides
stake: Developers get a step-by-step walkthrough of each business operation that spans several resources, instead of piecing the calls together from the API reference.
description: The Guides section of the website holds one page per cross-resource action of the API Backoffice that is marked for documentation. Each guide walks a developer through a multi-step API flow, one step per section, with code examples and links to the API reference pages of the resources it touches. The section exists but is empty, because no cross-resource action is marked for documentation yet.
---

## Context

- The cross-resource actions of the API Backoffice are defined in the ProAbonoBO shared utility, in its cross-resource actions specification. Each action lists its steps in order, and each step references a per-resource action. Each action carries a `Documented` field: only an action marked `Documented: yes` may appear in the public documentation.
- At the time this backlog was written, that specification held no action at all.
- The Guides section already exists in the website: it is the last section of the sidebar and a section of the search, as the shared DocApi navigation specification sets out. While it holds no page, it shows neither in the sidebar nor in the search. Its first page makes it appear, with no other change.

## Instructions

**When to act.** Create a guide when the user asks for it after an action is marked `Documented: yes`. When an action goes back to `Documented: no`, remove its guide. When the steps of a documented action change (added, removed or reordered), update its guide to match.

**One guide per documented action.** Its page is named after the action identifier, with the dot turned into a hyphen: the action `customer.onboard` gives the page `customer-onboard`. The order of the guides within the section is set explicitly on each page.

**The sections of a guide, in order:**

1. **Purpose** — one sentence stating the business outcome of the flow and when a developer would use it.
2. **Prerequisites** — what the developer needs before starting, for example an existing customer or an offer reference.
3. **Steps** — one numbered section per step of the action, in the order of the action. Each holds a short explanation of what the call does and why it comes at that point, a code example with curl as the first tab and Node.js `fetch` as the second, and the expected response.
4. **Full flow at a glance** — optional: a single code block or table showing every step, for a quick copy-paste reference.
5. **Next steps** — links to the API reference pages of each resource the flow touches.

**Conventions.** The code examples follow the API conventions of the ProAbonoBO shared utility: PascalCase JSON fields, camelCase query and path parameters, amounts in the smallest currency unit, ISO 8601 dates, and credentials read from environment variables, never written as values.

**Specs to update with each guide.** List the guide in the page specifications of the website, and list its source action in the authoring pipeline specification. Once the first guide exists, remove the statement that the Guides section is empty.

**Out of scope.** An action marked `Documented: no` never gets a guide, and no guide is written for a flow that is not defined as a cross-resource action.
