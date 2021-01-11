import * as React from "react";

import { Create, SimpleForm, TextInput } from "react-admin";

const ImageCreate = (props) => (
  <Create title="Create a Image" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="name" />
      <TextInput source="owner" />
    </SimpleForm>
  </Create>
);

export default ImageCreate;
