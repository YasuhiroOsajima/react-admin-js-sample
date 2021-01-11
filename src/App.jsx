import * as React from "react";
import { Admin, Resource, Login } from "react-admin";

import authProvider from "./authProvider";

import {
  InstanceList,
  InstanceEdit,
  InstanceCreate,
  InstanceIcon,
} from "./resources/instances";

import {
  ImageList,
  ImageEdit,
  ImageCreate,
  ImageIcon,
} from "./resources/images";

import dakeDataProvider from "./dataprovider/LocalDataProvider";

import Dashboard from "./Dashboard";

const CustomLogin = (props) => (
  <Login {...props} backgroundImage="/fujisan.jpg" />
);

const Component = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dakeDataProvider}
    loginPage={CustomLogin}
    authProvider={authProvider}
  >
    <Resource
      name="instances"
      list={InstanceList}
      edit={InstanceEdit}
      create={InstanceCreate}
      icon={InstanceIcon}
    />
    <Resource
      name="images"
      list={ImageList}
      edit={ImageEdit}
      create={ImageCreate}
      icon={ImageIcon}
    />
  </Admin>
);

export default Component;
