import React from 'react';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { select_client } from '../../../redux/client/clientAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styleClientList from './clientList.style';

export default function ClientList({ onEdit, onClientInfoShow, selectClient }) {
    const classes = styleClientList();
    const dispatch = useDispatch();

    const clients = useSelector(state => state.client.clientList )

    const EditClient = value => {
      dispatch(select_client(value));
      onEdit();
    }

    const ShowClientInfo = value => {
      dispatch(select_client(value));
      onClientInfoShow();
    }

    return (
      <MaterialTable
        className={classes.clientListWrapper}
        title="MY Clients"
        columns={[
          { title: 'Client Name', field: 'name' },
          { title: 'Phone Number', field: 'phone_1' },
          { title: 'City', field: 'city' },
        ]}
        data={clients}
        options = {{
          selection: selectClient,
          search: true
        }}
        onRowClick={(event, rowData, togglePanel) =>  togglePanel()}
        onSelectionChange={(event, rowData) => console.log(rowData)}
        detailPanel={client => {
          return (
            <div className={classes.btnGroup}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick = {() => ShowClientInfo(client)}
                className={classes.button}
                startIcon={<VisibilityIcon />}
              >
                Open
              </Button>
              <Button
                variant="contained"
                color=""
                size="small"
                onClick = {() => EditClient(client)}
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

