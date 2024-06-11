import { AttendanceCreateNestedManyWithoutClassModelsInput } from "./AttendanceCreateNestedManyWithoutClassModelsInput";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type ClassModelCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutClassModelsInput;
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  trainer?: TrainerWhereUniqueInput | null;
};
