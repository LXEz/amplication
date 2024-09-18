import * as graphql from "@nestjs/graphql";
import { ToDoUserResolverBase } from "./base/toDoUser.resolver.base";
import { ToDoUser } from "./base/ToDoUser";
import { ToDoUserService } from "./toDoUser.service";

@graphql.Resolver(() => ToDoUser)
export class ToDoUserResolver extends ToDoUserResolverBase {
  constructor(protected readonly service: ToDoUserService) {
    super(service);
  }
}
