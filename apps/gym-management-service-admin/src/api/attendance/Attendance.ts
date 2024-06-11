import { ClassModel } from "../classModel/ClassModel";
import { Member } from "../member/Member";

export type Attendance = {
  classField?: ClassModel | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  member?: Member | null;
  updatedAt: Date;
};
