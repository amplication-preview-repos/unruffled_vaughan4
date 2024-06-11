import { AttendanceUpdateManyWithoutClassModelsInput } from "./AttendanceUpdateManyWithoutClassModelsInput";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type ClassModelUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutClassModelsInput;
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  trainer?: TrainerWhereUniqueInput | null;
};
