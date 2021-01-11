import * as React from "react";

import { List, Datagrid, TextField, EditButton } from "react-admin";

const InstanceList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="uuid" />
      <TextField source="name" />
      <TextField source="owner" />
      <EditButton basePath="/instances" />
    </Datagrid>
  </List>
);

export default InstanceList;
