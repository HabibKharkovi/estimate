import React from 'react';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import styleClientList from './clientList.style';

export default function ClientList() {
    const classes = styleClientList();
    return (
      <MaterialTable
        className={classes.clientListWrapper}
        title="MY Clients"
        columns={[
          { title: 'Client Name', field: 'name' },
        ]}
        data={[
          { name: 'Mehmet' },
          { name: 'Zerya Betül'},
        ]}
        actions={[
            {
              icon: () => <VisibilityIcon/>,
            },
            {
              icon: "edit",
            },
            {
              icon: "delete",
            }
          ]}
          options={{
            actionsColumnIndex: -1
          }}
        
      />
    )
  }