import { ToDoTaskCreateNestedManyWithoutToDoUsersInput } from "./ToDoTaskCreateNestedManyWithoutToDoUsersInput";

export type ToDoUserCreateInput = {
  email?: string | null;
  lookup?: string | null;
  name?: string | null;
  toDoTasks?: ToDoTaskCreateNestedManyWithoutToDoUsersInput;
};
