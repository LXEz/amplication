import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ToDoTaskListRelationFilter } from "../toDoTask/ToDoTaskListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  toDoTasks?: ToDoTaskListRelationFilter;
  username?: StringFilter;
};
