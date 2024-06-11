import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type ClassModelWhereInput = {
  attendances?: AttendanceListRelationFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  trainer?: TrainerWhereUniqueInput;
};
