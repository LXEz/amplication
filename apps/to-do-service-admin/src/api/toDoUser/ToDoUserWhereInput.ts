import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ToDoTaskListRelationFilter } from "../toDoTask/ToDoTaskListRelationFilter";

export type ToDoUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  lookup?: StringNullableFilter;
  name?: StringNullableFilter;
  toDoTasks?: ToDoTaskListRelationFilter;
};
