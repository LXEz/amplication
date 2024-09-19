import { ToDoTaskWhereInput } from "./ToDoTaskWhereInput";
import { ToDoTaskOrderByInput } from "./ToDoTaskOrderByInput";

export type ToDoTaskFindManyArgs = {
  where?: ToDoTaskWhereInput;
  orderBy?: Array<ToDoTaskOrderByInput>;
  skip?: number;
  take?: number;
};
