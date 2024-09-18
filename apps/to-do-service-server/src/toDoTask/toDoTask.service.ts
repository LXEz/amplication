import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToDoTaskServiceBase } from "./base/toDoTask.service.base";

@Injectable()
export class ToDoTaskService extends ToDoTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
