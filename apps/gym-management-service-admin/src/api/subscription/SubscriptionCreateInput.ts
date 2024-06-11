import { MemberCreateNestedManyWithoutSubscriptionsInput } from "./MemberCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  members?: MemberCreateNestedManyWithoutSubscriptionsInput;
  membershipType?: string | null;
  startDate?: Date | null;
};
