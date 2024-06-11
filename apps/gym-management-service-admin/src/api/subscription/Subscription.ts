import { Member } from "../member/Member";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  members?: Array<Member>;
  membershipType: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
