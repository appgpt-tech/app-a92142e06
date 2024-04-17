//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const PlantDiseasesTitle = () => {
  const record = useRecordContext();
  return <span>PlantDiseases {record ? `"${record.Name}"` : ''}</span>;
};

export const PlantDiseasesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="Name" />
      <TextField source="Type" />
      <TextField source="Symptoms" />
      <TextField source="ToxinType" />
      <TextField source="Effect" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const PlantDiseasesEdit = () => (
  <Edit title={<PlantDiseasesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Type" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Symptoms" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ToxinType" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Effect" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const PlantDiseasesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Type" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Symptoms" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ToxinType" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Effect" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
];
