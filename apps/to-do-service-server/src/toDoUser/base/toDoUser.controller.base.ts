/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ToDoUserService } from "../toDoUser.service";
import { ToDoUserCreateInput } from "./ToDoUserCreateInput";
import { ToDoUser } from "./ToDoUser";
import { ToDoUserFindManyArgs } from "./ToDoUserFindManyArgs";
import { ToDoUserWhereUniqueInput } from "./ToDoUserWhereUniqueInput";
import { ToDoUserUpdateInput } from "./ToDoUserUpdateInput";
import { ToDoTaskFindManyArgs } from "../../toDoTask/base/ToDoTaskFindManyArgs";
import { ToDoTask } from "../../toDoTask/base/ToDoTask";
import { ToDoTaskWhereUniqueInput } from "../../toDoTask/base/ToDoTaskWhereUniqueInput";

export class ToDoUserControllerBase {
  constructor(protected readonly service: ToDoUserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ToDoUser })
  async createToDoUser(
    @common.Body() data: ToDoUserCreateInput
  ): Promise<ToDoUser> {
    return await this.service.createToDoUser({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        lookup: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ToDoUser] })
  @ApiNestedQuery(ToDoUserFindManyArgs)
  async toDoUsers(@common.Req() request: Request): Promise<ToDoUser[]> {
    const args = plainToClass(ToDoUserFindManyArgs, request.query);
    return this.service.toDoUsers({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        lookup: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ToDoUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async toDoUser(
    @common.Param() params: ToDoUserWhereUniqueInput
  ): Promise<ToDoUser | null> {
    const result = await this.service.toDoUser({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        lookup: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ToDoUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateToDoUser(
    @common.Param() params: ToDoUserWhereUniqueInput,
    @common.Body() data: ToDoUserUpdateInput
  ): Promise<ToDoUser | null> {
    try {
      return await this.service.updateToDoUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          lookup: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ToDoUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteToDoUser(
    @common.Param() params: ToDoUserWhereUniqueInput
  ): Promise<ToDoUser | null> {
    try {
      return await this.service.deleteToDoUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          lookup: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/toDoTasks")
  @ApiNestedQuery(ToDoTaskFindManyArgs)
  async findToDoTasks(
    @common.Req() request: Request,
    @common.Param() params: ToDoUserWhereUniqueInput
  ): Promise<ToDoTask[]> {
    const query = plainToClass(ToDoTaskFindManyArgs, request.query);
    const results = await this.service.findToDoTasks(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        dueDate: true,
        id: true,
        status: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/toDoTasks")
  async connectToDoTasks(
    @common.Param() params: ToDoUserWhereUniqueInput,
    @common.Body() body: ToDoTaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      toDoTasks: {
        connect: body,
      },
    };
    await this.service.updateToDoUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/toDoTasks")
  async updateToDoTasks(
    @common.Param() params: ToDoUserWhereUniqueInput,
    @common.Body() body: ToDoTaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      toDoTasks: {
        set: body,
      },
    };
    await this.service.updateToDoUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/toDoTasks")
  async disconnectToDoTasks(
    @common.Param() params: ToDoUserWhereUniqueInput,
    @common.Body() body: ToDoTaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      toDoTasks: {
        disconnect: body,
      },
    };
    await this.service.updateToDoUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
