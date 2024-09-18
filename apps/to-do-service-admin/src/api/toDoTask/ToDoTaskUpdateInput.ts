import { ToDoUserUpdateManyWithoutToDoTasksInput } from "./ToDoUserUpdateManyWithoutToDoTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ToDoTaskUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
  todouser?: ToDoUserUpdateManyWithoutToDoTasksInput;
  user?: UserWhereUniqueInput | null;
};
