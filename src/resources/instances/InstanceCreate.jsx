import * as React from "react";

import { Create, SimpleForm, TextInput } from "react-admin";

const InstanceCreate = (props) => (
  <Create title="Create a Instance" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="owner" />
    </SimpleForm>
  </Create>
);

export default InstanceCreate;