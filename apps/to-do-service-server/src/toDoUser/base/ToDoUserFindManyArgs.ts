/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ToDoUserWhereInput } from "./ToDoUserWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ToDoUserOrderByInput } from "./ToDoUserOrderByInput";

@ArgsType()
class ToDoUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ToDoUserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ToDoUserWhereInput, { nullable: true })
  @Type(() => ToDoUserWhereInput)
  where?: ToDoUserWhereInput;

  @ApiProperty({
    required: false,
    type: [ToDoUserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ToDoUserOrderByInput], { nullable: true })
  @Type(() => ToDoUserOrderByInput)
  orderBy?: Array<ToDoUserOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ToDoUserFindManyArgs as ToDoUserFindManyArgs };
