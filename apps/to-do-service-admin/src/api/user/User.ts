import { JsonValue } from "type-fest";
import { ToDoTask } from "../toDoTask/ToDoTask";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  toDoTasks?: Array<ToDoTask>;
  updatedAt: Date;
  username: string;
};
