import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ClassModelTitle } from "../classModel/ClassModelTitle";
import { MemberTitle } from "../member/MemberTitle";

export const AttendanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="classField.id"
          reference="ClassModel"
          label="Class"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput source="member.id" reference="Member" label="Member">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
