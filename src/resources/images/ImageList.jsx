import * as React from "react";

import { List, Datagrid, TextField, EditButton } from "react-admin";

const ImageList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="uuid" />
      <TextField source="name" />
      <TextField source="owner" />
      <EditButton basePath="/images" />
    </Datagrid>
  </List>
);

export default ImageList;
