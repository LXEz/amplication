import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ToDoUserService } from "./toDoUser.service";
import { ToDoUserControllerBase } from "./base/toDoUser.controller.base";

@swagger.ApiTags("toDoUsers")
@common.Controller("toDoUsers")
export class ToDoUserController extends ToDoUserControllerBase {
  constructor(protected readonly service: ToDoUserService) {
    super(service);
  }
}
