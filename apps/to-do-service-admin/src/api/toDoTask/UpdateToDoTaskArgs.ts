import { ToDoTaskWhereUniqueInput } from "./ToDoTaskWhereUniqueInput";
import { ToDoTaskUpdateInput } from "./ToDoTaskUpdateInput";

export type UpdateToDoTaskArgs = {
  where: ToDoTaskWhereUniqueInput;
  data: ToDoTaskUpdateInput;
};
