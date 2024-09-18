import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ToDoTaskUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
