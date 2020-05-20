import React from 'react';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styleClientList from './clientList.style';

export default function ClientList() {
    const classes = styleClientList();
    return (
      <MaterialTable
        className={classes.clientListWrapper}
        title="MY Clients"
        columns={[
          { title: 'Client Name', field: 'name' },
          { title: 'Phone Number', field: 'phone' },
          { title: 'City', field: 'city' },
        ]}
        data={[
          { name: 'Mehmet', phone: '234 234 234', city: 'new york' },
          { name: 'Zerya Betü', phone: '234 234 234', city: 'new york'},
        ]}
        options = {{
          selection: true,
        }}
        onRowClick={(event, rowData, togglePanel) =>  togglePanel()}
        onSelectionChange={(event, rowData) => console.log(rowData)}
        detailPanel={rowData => {
          return (
            <div className={classes.btnGroup}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<VisibilityIcon />}
              >
                Open
              </Button>
              <Button
                variant="contained"
                color=""
                size="small"
                className={classes.button}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </div>
          )
        }}
      />
    )
  }