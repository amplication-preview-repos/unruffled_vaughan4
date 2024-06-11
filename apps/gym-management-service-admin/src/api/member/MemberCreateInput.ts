import { AttendanceCreateNestedManyWithoutMembersInput } from "./AttendanceCreateNestedManyWithoutMembersInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type MemberCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutMembersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
