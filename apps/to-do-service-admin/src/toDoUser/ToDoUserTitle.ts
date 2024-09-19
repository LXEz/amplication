import { ToDoUser as TToDoUser } from "../api/toDoUser/ToDoUser";

export const TODOUSER_TITLE_FIELD = "name";

export const ToDoUserTitle = (record: TToDoUser): string => {
  return record.name?.toString() || String(record.id);
};
