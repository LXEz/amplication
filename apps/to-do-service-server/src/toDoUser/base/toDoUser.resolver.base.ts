/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ToDoUser } from "./ToDoUser";
import { ToDoUserCountArgs } from "./ToDoUserCountArgs";
import { ToDoUserFindManyArgs } from "./ToDoUserFindManyArgs";
import { ToDoUserFindUniqueArgs } from "./ToDoUserFindUniqueArgs";
import { CreateToDoUserArgs } from "./CreateToDoUserArgs";
import { UpdateToDoUserArgs } from "./UpdateToDoUserArgs";
import { DeleteToDoUserArgs } from "./DeleteToDoUserArgs";
import { ToDoTaskFindManyArgs } from "../../toDoTask/base/ToDoTaskFindManyArgs";
import { ToDoTask } from "../../toDoTask/base/ToDoTask";
import { ToDoUserService } from "../toDoUser.service";
@graphql.Resolver(() => ToDoUser)
export class ToDoUserResolverBase {
  constructor(protected readonly service: ToDoUserService) {}

  async _toDoUsersMeta(
    @graphql.Args() args: ToDoUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ToDoUser])
  async toDoUsers(
    @graphql.Args() args: ToDoUserFindManyArgs
  ): Promise<ToDoUser[]> {
    return this.service.toDoUsers(args);
  }

  @graphql.Query(() => ToDoUser, { nullable: true })
  async toDoUser(
    @graphql.Args() args: ToDoUserFindUniqueArgs
  ): Promise<ToDoUser | null> {
    const result = await this.service.toDoUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ToDoUser)
  async createToDoUser(
    @graphql.Args() args: CreateToDoUserArgs
  ): Promise<ToDoUser> {
    return await this.service.createToDoUser({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ToDoUser)
  async updateToDoUser(
    @graphql.Args() args: UpdateToDoUserArgs
  ): Promise<ToDoUser | null> {
    try {
      return await this.service.updateToDoUser({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ToDoUser)
  async deleteToDoUser(
    @graphql.Args() args: DeleteToDoUserArgs
  ): Promise<ToDoUser | null> {
    try {
      return await this.service.deleteToDoUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ToDoTask], { name: "toDoTasks" })
  async findToDoTasks(
    @graphql.Parent() parent: ToDoUser,
    @graphql.Args() args: ToDoTaskFindManyArgs
  ): Promise<ToDoTask[]> {
    const results = await this.service.findToDoTasks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
