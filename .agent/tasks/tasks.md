# Tasks

## Task Management

Tasks are managed according to the rules in [.cursorrules](../../.cursorrules).

### Statuses

- **Open**
  - `Backlog`: Not started
  - `In Progress`: Active work
- **Closed**
  - `Done`: Completed
  - `Not Doing`: Canceled
  - `Archived`: Moved to `.archive`

### Task States and Statuses

- **Backlog**: Tasks that are not started yet.
- **In Progress**: Tasks that are currently being worked on.
- **Done**: Tasks that are completed.
- **Not Doing**: Tasks that are canceled and will not be completed.
- **Archived**: Tasks that are moved to the archive for historical reference.

---

## Open Tasks

| ID    | Description | Status  | Created   | Modified  |
|-------|------------|---------|-----------|-----------|
| ...   | ...        | ...     | ...       | ...       |

> **Note**: New tasks go in `./tasks/open/` with table updates.

---

## Closed Tasks

| ID    | Description | Status  | Created   | Modified  |
|-------|------------|---------|-----------|-----------|
| T000  | [Task Example](./closed/T000-task-example.md) | Done    | 2025-01-24 | 2025-01-24 |

> **Note**: Closed tasks move to `./tasks/closed/` with status update.

---

## Inbox -> Tasks

> Tracks the conversion of inbox files into formal tasks. Format example:

```md
- `[YYYY-MM-DD]`: `inbox-template.md` → [T001: Inbox Template Feature](./tasks/open/T001-inbox-template.md)
```

- …

## Archived Tasks

Older closed tasks are in `.archive/` for historical reference.
