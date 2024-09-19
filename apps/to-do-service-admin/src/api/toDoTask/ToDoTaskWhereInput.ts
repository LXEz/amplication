import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ToDoUserListRelationFilter } from "../toDoUser/ToDoUserListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ToDoTaskWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  todouser?: ToDoUserListRelationFilter;
  user?: UserWhereUniqueInput;
};
