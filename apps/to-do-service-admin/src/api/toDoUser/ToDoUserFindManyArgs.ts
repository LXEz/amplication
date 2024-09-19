import { ToDoUserWhereInput } from "./ToDoUserWhereInput";
import { ToDoUserOrderByInput } from "./ToDoUserOrderByInput";

export type ToDoUserFindManyArgs = {
  where?: ToDoUserWhereInput;
  orderBy?: Array<ToDoUserOrderByInput>;
  skip?: number;
  take?: number;
};
