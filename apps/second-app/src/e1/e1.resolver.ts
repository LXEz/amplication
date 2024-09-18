import * as graphql from "@nestjs/graphql";
import { E1ResolverBase } from "./base/e1.resolver.base";
import { E1 } from "./base/E1";
import { E1Service } from "./e1.service";

@graphql.Resolver(() => E1)
export class E1Resolver extends E1ResolverBase {
  constructor(protected readonly service: E1Service) {
    super(service);
  }
}
