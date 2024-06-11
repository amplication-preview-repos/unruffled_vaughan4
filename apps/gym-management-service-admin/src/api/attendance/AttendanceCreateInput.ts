import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AttendanceCreateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
};
