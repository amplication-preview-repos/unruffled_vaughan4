import { Attendance } from "../attendance/Attendance";
import { Trainer } from "../trainer/Trainer";

export type ClassModel = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  trainer?: Trainer | null;
  updatedAt: Date;
};
