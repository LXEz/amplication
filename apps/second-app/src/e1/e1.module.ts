import { Module } from "@nestjs/common";
import { E1ModuleBase } from "./base/e1.module.base";
import { E1Service } from "./e1.service";
import { E1Controller } from "./e1.controller";
import { E1Resolver } from "./e1.resolver";

@Module({
  imports: [E1ModuleBase],
  controllers: [E1Controller],
  providers: [E1Service, E1Resolver],
  exports: [E1Service],
})
export class E1Module {}
