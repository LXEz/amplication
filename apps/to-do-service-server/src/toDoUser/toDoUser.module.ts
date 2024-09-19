import { Module } from "@nestjs/common";
import { ToDoUserModuleBase } from "./base/toDoUser.module.base";
import { ToDoUserService } from "./toDoUser.service";
import { ToDoUserController } from "./toDoUser.controller";
import { ToDoUserResolver } from "./toDoUser.resolver";

@Module({
  imports: [ToDoUserModuleBase],
  controllers: [ToDoUserController],
  providers: [ToDoUserService, ToDoUserResolver],
  exports: [ToDoUserService],
})
export class ToDoUserModule {}
