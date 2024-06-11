import { MemberUpdateManyWithoutSubscriptionsInput } from "./MemberUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  members?: MemberUpdateManyWithoutSubscriptionsInput;
  membershipType?: string | null;
  startDate?: Date | null;
};
