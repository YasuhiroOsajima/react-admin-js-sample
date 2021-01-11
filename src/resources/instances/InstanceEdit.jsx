import * as React from "react";

import { Edit, SimpleForm, TextInput } from "react-admin";

const InstanceTitle = ({ record }) => {
  return <span>Instance {record ? `"${record.name}"` : ""}</span>;
};

const InstanceEdit = (props) => (
  <Edit title={<InstanceTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="uuid" />
      <TextInput source="name" />
      <TextInput source="owner" />
    </SimpleForm>
  </Edit>
);

export default InstanceEdit;