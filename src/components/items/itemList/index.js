import React from 'react';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function ItemList() {
    return (
      <MaterialTable
        title="MY Items"
        columns={[
          { title: 'Item Name', field: 'name' },
        ]}
        data={[
          { name: 'Item 1' },
          { name: 'Item 2'},
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
          actionsColumnIndex: -1,
        }}
        
      />
    )
  }