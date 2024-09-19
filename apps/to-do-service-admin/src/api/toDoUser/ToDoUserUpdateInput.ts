import { ToDoTaskUpdateManyWithoutToDoUsersInput } from "./ToDoTaskUpdateManyWithoutToDoUsersInput";

export type ToDoUserUpdateInput = {
  email?: string | null;
  lookup?: string | null;
  name?: string | null;
  toDoTasks?: ToDoTaskUpdateManyWithoutToDoUsersInput;
};
