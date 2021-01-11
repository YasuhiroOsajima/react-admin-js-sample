import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const ImageTitle = ({ record }) => {
  return <span>Image {record ? `"${record.name}"` : ""}</span>;
};

const ImageEdit = (props) => (
  <Edit title={<ImageTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="uuid" />
      <TextInput source="name" />
      <TextInput source="owner" />
    </SimpleForm>
  </Edit>
);

export default ImageEdit;
