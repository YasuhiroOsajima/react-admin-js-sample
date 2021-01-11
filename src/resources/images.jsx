import * as React from "react";

import { List, Datagrid } from 'react-admin';
import { Edit } from 'react-admin';
import { Create } from 'react-admin';

// for Edit and Create
import { SimpleForm, TextInput } from 'react-admin';

// for List culms
import { TextField, EditButton } from 'react-admin';

// Menu Icon
import UnarchiveIcon from '@material-ui/icons/Unarchive';
export const ImageIcon = UnarchiveIcon;

// Components
// List table
export const ImageList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="uuid" />
            <TextField source="name" />
            <TextField source="owner" />
            <EditButton basePath="/images" />
        </Datagrid>
    </List>
);

// Edit
const ImageTitle = ({ record }) => {
    return <span>Image {record ? `"${record.name}"` : ''}</span>;
};

export const ImageEdit = (props) => (
    <Edit title={<ImageTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="uuid" />
            <TextInput source="name" />
            <TextInput source="owner" />
        </SimpleForm>
    </Edit>
);

// Create
export const ImageCreate = (props) => (
    <Create title="Create a Image" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="name" />
            <TextInput source="owner" />
        </SimpleForm>
    </Create>
);