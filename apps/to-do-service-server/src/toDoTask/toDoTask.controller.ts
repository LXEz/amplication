import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ToDoTaskService } from "./toDoTask.service";
import { ToDoTaskControllerBase } from "./base/toDoTask.controller.base";

@swagger.ApiTags("toDoTasks")
@common.Controller("toDoTasks")
export class ToDoTaskController extends ToDoTaskControllerBase {
  constructor(protected readonly service: ToDoTaskService) {
    super(service);
  }
}
