import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E1ServiceBase } from "./base/e1.service.base";

@Injectable()
export class E1Service extends E1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
