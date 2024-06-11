import { ClassModel } from "../classModel/ClassModel";

export type Trainer = {
  classes?: Array<ClassModel>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
