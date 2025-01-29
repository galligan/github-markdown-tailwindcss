---
created: 2025-01-24T00:00:00Z
modified: 2025-01-24T00:00:00Z
audience: [agent, user]
tags: [task, example, template]
slug: T000-progressive-disclosure
state: open
status: in-progress
type: feature
priority: medium
---

# T000: Task Example

> **Remember**: This is just a **template**.
> Feel free to customize it to match your workflow, project type, or capabilities.
> The key is to keep it **flexible**—start with the **Minimal** sections for simple tasks,
> then add **Extended** sections only when a task's complexity warrants deeper detail.
>
> **Note**: As this is just a template, do not replicate the XML tags in the task document.

## Minimal Template (Required Sections)

1. **Title**  
   A concise, descriptive title for the task.

2. **Description**  
   Briefly outline what needs to be done and why.

3. **Requirements**  
   - Present tasks in a **checklist** format, possibly with a hierarchical structure.

4. **Definition of Done**  
   - Detail how to confirm the task is complete (e.g., all tests passing, code merged).

---

## Extended Template (Optional Sections)

> **Note:** Use these sections for **larger** or **more complex** tasks that need additional detail.

### 1. Agent-specific Instructions

- Any `.agent` or scratchpad files to be used in the task
- Tools or processes the AI should follow

### 2. Goals 🎯

- High-level success criteria

### 3. Important Considerations 🤔

- Constraints like security, performance, or licensing
- Dependencies or potential conflicts

### 4. Technical Design 📓

- Architectural/implementation notes
- Code snippets or directory structures

### 5. Implementation Plan 📝

- Phased or step-by-step approach
- Detailed checklists for each phase

### 6. (Optional) Testing Plan

- What tests to run (unit, integration, etc.)
- How to confirm coverage

### 7. (Optional) Documentation Updates

- Which docs to update (README, `.agent` files, etc.)

---

## Full Example Task Document

Here's how you might merge the **minimal** and **extended** templates into a single, **fully expanded** task document when complexity or priority demands it. Notice the **hierarchical checklists** in both Requirements and Implementation Plan.

```md

# T000: Implement New Authentication Flow 🏗️ (50% Complete)

## Description

We need to introduce a new, secure OAuth 2.0 flow. This involves updating backend routes, adding token refresh logic, and integrating with our existing user system.

## Requirements

- [x] **Review Current Auth**  
  - [x] Identify existing endpoints in `auth.controller.js`  
  - [x] Outline changes needed for OAuth 2.0  
- [x] **Implement OAuth Logic**  
  - [x] Create or update `auth.service.js` for token retrieval  
  - [ ] Add refresh token handling  
  - [ ] (Optional) Add middleware to validate tokens  
- [ ] **Write/Update Tests**  
  - [ ] Unit tests in `auth.test.js`  
  - [ ] Integration tests for new routes  
- [ ] **Documentation**  
  - [ ] Document new endpoints in `README.md`  
  - [ ] If needed, update `.agent/instructions/behavior.agent.md`  

## Definition of Done

- All new endpoints functional and verified via tests
- No security warnings or credential leaks in logs
- Documentation updated (README, `.agent` if relevant)
- Code merged into main or a designated branch with approval

---

## Agent-specific Instructions (Optional)

- Use `.agent/context/memory.agent.md` for partial solutions or notes
- Update `.agent/context/changelog.agent.md` once major steps are completed

## Goals 🎯 (Optional)

- Provide a seamless user login via OAuth
- Avoid storing sensitive tokens on the frontend
- Maintain response times under 200ms

## Important Considerations 🤔 (Optional)

- Must respect existing code style and linting rules
- Must not hardcode secrets or store them in logs

## Technical Design 📓 (Optional)

- **Flow**  
  - User obtains OAuth token from Provider → Provider returns valid token → Backend verifies token on each request
- **Suggested Libraries**  
  - `passport`, `oauth2orize`, or a custom approach

## Implementation Plan 📝 (Optional)

- **Phase 1: Analysis** ✅  
  - [x] Gather all current auth endpoints  
  - [x] Identify function calls in `auth.service.js`  
- **Phase 2: Core Implementation** 🏗️  
  - [x] Update or replace `auth.service.js` with OAuth logic  
  - [ ] Add a new route in `routes/auth.routes.js` for token refresh  
    - [ ] Incorporate any necessary environment variables (secret keys)  
- **Phase 3: Testing & Verification** ⏳  
  - [ ] Write unit tests in `auth.test.js`  
    - [ ] Test success & failure cases for token refresh  
  - [ ] Perform manual test of logging in, refreshing token  
- **Phase 4: Documentation** 📝  
  - [ ] Update `README.md` with new login instructions  
  - [ ] Record major changes in `.agent/context/changelog.agent.md`

---

## (Optional) Testing Plan

- [ ] **Unit Tests**  
  - Auth controller and service
- [ ] **Integration Tests**  
  - Full login flow with external provider  
- [ ] **Manual Verification**  
  - QA or developer tests in staging environment

## (Optional) Documentation Updates

- [ ] **README.md**  
  - Add quick start for OAuth setup  
- [ ] **Agent Docs**  
  - Summarize changes in `.agent/instructions/behavior.agent.md`

---

```

### Why Use Hierarchical Checklists?

1. **Clarity**: Nested checklists let you break down each main task into smaller, trackable sub-tasks.  
2. **Structure**: Agents (and humans) can tackle sub-tasks in order without losing context.  
3. **Transparency**: Everyone can see at a glance which parts of a large task are complete or pending.
