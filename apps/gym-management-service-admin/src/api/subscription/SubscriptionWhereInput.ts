import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberListRelationFilter } from "../member/MemberListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubscriptionWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  members?: MemberListRelationFilter;
  membershipType?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
