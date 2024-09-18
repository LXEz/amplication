import { InputJsonValue } from "../../types";
import { ToDoTaskUpdateManyWithoutUsersInput } from "./ToDoTaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  toDoTasks?: ToDoTaskUpdateManyWithoutUsersInput;
  username?: string;
};
