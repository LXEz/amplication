import { InputJsonValue } from "../../types";
import { ToDoTaskCreateNestedManyWithoutUsersInput } from "./ToDoTaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  toDoTasks?: ToDoTaskCreateNestedManyWithoutUsersInput;
  username: string;
};
