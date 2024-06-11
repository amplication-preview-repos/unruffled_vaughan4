import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AttendanceUpdateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
};
