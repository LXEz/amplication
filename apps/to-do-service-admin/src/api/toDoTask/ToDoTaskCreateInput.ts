import { ToDoUserCreateNestedManyWithoutToDoTasksInput } from "./ToDoUserCreateNestedManyWithoutToDoTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ToDoTaskCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
  todouser?: ToDoUserCreateNestedManyWithoutToDoTasksInput;
  user?: UserWhereUniqueInput | null;
};
