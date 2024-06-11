import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  subscriptionId?: SortOrder;
  updatedAt?: SortOrder;
};
