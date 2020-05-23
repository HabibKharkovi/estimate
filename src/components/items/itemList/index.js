import React from 'react';
import Button from '@material-ui/core/Button';
import {useSelector} from 'react-redux';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './itemList.style';

export default function ItemList({onEdit, onShowItem, selectItem}) {
    const classes = useStyles();
    const items = useSelector(state => state.item.itemList)
    return (
      <MaterialTable
        title="MY Items"
        columns={[
          { title: 'Item Name', field: 'name' },
          { title: 'Rate', field: 'rate' },
        ]}
        data={items}
        options = {{
          selection: selectItem,
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
                onClick={() => onShowItem()}
                className={classes.button}
                startIcon={<VisibilityIcon />}
              >
                Open
              </Button>
              <Button
                variant="contained"
                color=""
                size="small"
                onClick={() => onEdit()}
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