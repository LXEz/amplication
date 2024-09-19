import { ToDoTask } from "../toDoTask/ToDoTask";

export type ToDoUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  lookup: string | null;
  name: string | null;
  toDoTasks?: Array<ToDoTask>;
  updatedAt: Date;
};
