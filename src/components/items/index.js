import React from 'react';
import Paper from '@material-ui/core/Paper';
import ItemList from './itemList';
import AddItems from './addItems';
import styleItems from './items.style';

export default function Items(){
    const classes = styleItems();
    return (
        <div className={classes.itemsWrapper}>
            <Paper elevation={3} className={`client-list ${classes.left}`} >
                <ItemList/>
            </Paper>
            <Paper elevation={3} className={classes.right} >
                <AddItems/>
            </Paper>
        </div>
    )
}