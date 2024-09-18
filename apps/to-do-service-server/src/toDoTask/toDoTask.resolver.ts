import * as graphql from "@nestjs/graphql";
import { ToDoTaskResolverBase } from "./base/toDoTask.resolver.base";
import { ToDoTask } from "./base/ToDoTask";
import { ToDoTaskService } from "./toDoTask.service";

@graphql.Resolver(() => ToDoTask)
export class ToDoTaskResolver extends ToDoTaskResolverBase {
  constructor(protected readonly service: ToDoTaskService) {
    super(service);
  }
}
