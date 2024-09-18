import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ToDoUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
