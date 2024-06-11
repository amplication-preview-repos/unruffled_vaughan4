import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const MemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceInput
          source="subscription.id"
          reference="Subscription"
          label="Subscription"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
