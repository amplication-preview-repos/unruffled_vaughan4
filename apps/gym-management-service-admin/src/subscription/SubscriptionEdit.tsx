import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="End Date" source="endDate" />
        <ReferenceArrayInput
          source="members"
          reference="Member"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MemberTitle} />
        </ReferenceArrayInput>
        <TextInput label="Membership Type" source="membershipType" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
