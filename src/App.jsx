import * as React from "react";
import { Admin, Resource } from 'react-admin';

import { InstanceList, InstanceEdit, InstanceCreate, InstanceIcon } from './resources/instances';
import { ImageList, ImageEdit, ImageCreate, ImageIcon } from './resources/images';
import dakeDataProvider from './dataprovider/LocalDataProvider';

import Dashboard from './Dashboard';

const Component = () => (
  <Admin dashboard={Dashboard} dataProvider={dakeDataProvider}>
    <Resource name="instances" list={InstanceList} edit={InstanceEdit} create={InstanceCreate} icon={InstanceIcon} />
    <Resource name="images" list={ImageList} edit={ImageEdit} create={ImageCreate} icon={ImageIcon} />
  </Admin>
);

export default Component;