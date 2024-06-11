import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  membershipType?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
