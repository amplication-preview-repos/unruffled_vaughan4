import { Attendance } from "../attendance/Attendance";
import { Subscription } from "../subscription/Subscription";

export type Member = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  subscription?: Subscription | null;
  updatedAt: Date;
};
