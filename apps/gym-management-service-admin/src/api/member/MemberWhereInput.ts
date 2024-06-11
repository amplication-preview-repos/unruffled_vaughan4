import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type MemberWhereInput = {
  attendances?: AttendanceListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  subscription?: SubscriptionWhereUniqueInput;
};
