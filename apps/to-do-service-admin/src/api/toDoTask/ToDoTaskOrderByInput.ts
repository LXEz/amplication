import { SortOrder } from "../../util/SortOrder";

export type ToDoTaskOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
