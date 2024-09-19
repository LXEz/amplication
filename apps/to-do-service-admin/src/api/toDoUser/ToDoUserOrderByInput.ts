import { SortOrder } from "../../util/SortOrder";

export type ToDoUserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  lookup?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
