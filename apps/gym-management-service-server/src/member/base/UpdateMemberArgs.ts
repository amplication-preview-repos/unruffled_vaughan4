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
import { MemberWhereUniqueInput } from "./MemberWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MemberUpdateInput } from "./MemberUpdateInput";

@ArgsType()
class UpdateMemberArgs {
  @ApiProperty({
    required: true,
    type: () => MemberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MemberWhereUniqueInput)
  @Field(() => MemberWhereUniqueInput, { nullable: false })
  where!: MemberWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MemberUpdateInput,
  })
  @ValidateNested()
  @Type(() => MemberUpdateInput)
  @Field(() => MemberUpdateInput, { nullable: false })
  data!: MemberUpdateInput;
}

export { UpdateMemberArgs as UpdateMemberArgs };
