import { ClassModelUpdateManyWithoutTrainersInput } from "./ClassModelUpdateManyWithoutTrainersInput";

export type TrainerUpdateInput = {
  classes?: ClassModelUpdateManyWithoutTrainersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
