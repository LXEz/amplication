import { ToDoUser } from "../toDoUser/ToDoUser";
import { User } from "../user/User";

export type ToDoTask = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  todouser?: Array<ToDoUser>;
  updatedAt: Date;
  user?: User | null;
};
