import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { TrainerTitle } from "../trainer/TrainerTitle";

export const ClassModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="trainer.id" reference="Trainer" label="Trainer">
          <SelectInput optionText={TrainerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
