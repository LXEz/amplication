import { ToDoTask as TToDoTask } from "../api/toDoTask/ToDoTask";

export const TODOTASK_TITLE_FIELD = "title";

export const ToDoTaskTitle = (record: TToDoTask): string => {
  return record.title?.toString() || String(record.id);
};
