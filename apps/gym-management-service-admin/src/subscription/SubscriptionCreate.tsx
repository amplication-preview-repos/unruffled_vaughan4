import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
