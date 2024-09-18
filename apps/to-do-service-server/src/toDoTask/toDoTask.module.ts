import { Module } from "@nestjs/common";
import { ToDoTaskModuleBase } from "./base/toDoTask.module.base";
import { ToDoTaskService } from "./toDoTask.service";
import { ToDoTaskController } from "./toDoTask.controller";
import { ToDoTaskResolver } from "./toDoTask.resolver";

@Module({
  imports: [ToDoTaskModuleBase],
  controllers: [ToDoTaskController],
  providers: [ToDoTaskService, ToDoTaskResolver],
  exports: [ToDoTaskService],
})
export class ToDoTaskModule {}
