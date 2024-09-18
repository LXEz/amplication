import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ToDoTaskCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
