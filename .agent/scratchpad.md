# Agent Scratchpad

> This scratchpad serves as my working memory - tracking current context, plans, and learnings.

## Usage Guide

- Sessions:
  - Are created after `## Session History`
  - Must have a timestamp header
    - Reverse chronological order
    - Newest first
    - Format: `### YYYY-MM-DDThh:mm:ss`
    - Use terminal to get timestamp (e.g. `date +%Y-%m-%dT%H:%M:%S`)
  - Line items after the header are in chronological order
  - Use the following format under each session header:
  
    ```md
    ### YYYY-MM-DDThh:mm:ss
    
    - Use action tags to track changes:
      - `[Checkpoint]` hh:mm:ss: <description>
      - `[Plan]` <description>
      - `[Thought]` <description>
      - `[Update]` <description>
      - `[Learning]` <description>
    - Use checkboxes for tasks:
      - [ ] <task description>
          - [ ] <pending subtask>
          - [x] <completed subtask>
    ```

  - Checkpoints:
    - Are line items within sessions
    - New checkpoints are created:
      - At the user's request
      - If the last checkpoint is older than 1 day
      - Look for the last `[Checkpoint]` line in the current session and compare its timestamp
    - Format: `[Checkpoint] HH:MM:SS: <description>`
    - Use `date +%H:%M:%S` command to generate timestamp
  - Session End:
    - Sessions are ended:
      - At the user's request
      - If the last checkpoint is older than 4 hours
    - Move completed items to `./logs/YYYY-MM-DD.md` and update changelog
    - Once older sessions have been summarized and migrated, they should be removed from the session history

- Tasks:
  - Active work happens in scratchpad during sessions
  - For larger tasks spanning multiple sessions:
    - Create task document from [`TXXX-task-template.md`](./.agent/tasks/TXXX-task-template.md)
    - Update [`tasks.md`](./.agent/tasks/tasks.md) to track progress
    - Focus on scratchpad for active work
    - Update task documents only for major progress
  - Use nested checklists for granular tracking
  - Move completed tasks to `closed/` directory

- Learnings:
  - Have timestamps (YYYY-MM-DD) included in the line item
    - Use terminal to get timestamp (e.g. `date +%Y-%m-%d`)
    - Format: `YYYY-MM-DD: <type> <description>`
  - Are added to track important discoveries and patterns
  - Types of learnings:
    - `[Convention]`: Rules about formatting, style, and standardization
      - Example: "Timestamps must use ISO 8601 format"
    - `[Tool]`: Commands, utilities, and their proper usage
      - Example: "Use `git rebase -i` for squashing commits"
    - `[Concept]`: Core ideas that guide decision making
      - Example: "Sessions maintain chronological order for clarity"
    - `[Pattern]`: Recurring workflows and best practices
      - Example: "Create checkpoints before major changes"
    - `[Solution]`: Problem encountered and how it was solved
      - Example: "When timestamps mismatch: Use `date` command instead of manual entry"
  - Use the following format:
  
    ```md
    ## Learnings
    
    - YYYY-MM-DD [Convention] Rule or standard that should be followed
    - YYYY-MM-DD [Tool] Command or utility and how to use it
    - YYYY-MM-DD [Concept] Core idea or principle to remember
    - YYYY-MM-DD [Pattern] Recurring workflow or best practice
    - YYYY-MM-DD [Solution] Problem: description | Solution: resolution
    ```
  
  - Keep the list concise and relevant
  - Consolidate similar learnings
  - Update descriptions if understanding improves
  - Remove only if clearly obsolete

## Learnings

- …

---

## Session History

- …
