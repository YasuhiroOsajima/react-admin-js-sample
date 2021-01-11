import * as React from "react";
import { Admin, Resource } from "react-admin";

import authProvider from "./authProvider";
import MyLoginPage from "./MyLoginPage";

import instances from "./resources/instances";
import images from "./resources/images";
import dakeDataProvider from "./dataprovider/LocalDataProvider";

import Dashboard from "./Dashboard";

const Component = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dakeDataProvider}
    loginPage={MyLoginPage}
    authProvider={authProvider}
  >
    <Resource name="instances" {...instances} />
    <Resource name="images" {...images} />
  </Admin>
);

export default Component;
