import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToDoUserServiceBase } from "./base/toDoUser.service.base";

@Injectable()
export class ToDoUserService extends ToDoUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
