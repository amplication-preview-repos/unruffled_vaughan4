import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AttendanceWhereInput = {
  classField?: ClassModelWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
};
