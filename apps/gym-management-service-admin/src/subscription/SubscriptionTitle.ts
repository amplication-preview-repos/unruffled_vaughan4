import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "membershipType";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.membershipType?.toString() || String(record.id);
};
