import { AttendanceUpdateManyWithoutMembersInput } from "./AttendanceUpdateManyWithoutMembersInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type MemberUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutMembersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
