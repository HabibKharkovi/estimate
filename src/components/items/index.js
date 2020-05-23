import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import ItemList from './itemList';
import AddItems from './addItems';
import EditItem from './editItems';
import Button from '@material-ui/core/Button';
import OpenItemContent from './openItemContent';
import Tax from '../tax';
import styleItems from './items.style';

export default function Items(){
    const classes = styleItems();

    const [ edit, setEdit] = useState(false);
    const [ showItemContent, setshowItemContent] = useState(false);
    const [ selectItem ] = useState(false)
    
    const handleAdd = () => {
        setEdit(false)
        setshowItemContent(false)
    }

    const handleEdit = () => {
        setEdit(true)
        setshowItemContent(false)
    }

    const handleshowItemContent = () => {
        setshowItemContent(true)
        setEdit(false)
    }

    return (
        <div className={classes.itemsWrapper}>
            <Paper elevation={3} className={`item-list ${classes.left}`} >
                {
                    edit || showItemContent ? 
                    <Button onClick={() => handleAdd()} className={classes.newItem} variant="contained" color="primary">New Item</Button> 
                    : null
                }
                <ItemList onEdit={handleEdit} onShowItem={handleshowItemContent} selectItem={selectItem}/>
            </Paper>
            <div className={classes.right}>
                <Paper elevation={3} className={classes.primaryPadding}>
                    { showItemContent ? 
                    <OpenItemContent/> : 
                    edit ? 
                        <EditItem/> 
                    : 
                        <AddItems/> 
                    }
                </Paper>
                {
                    !showItemContent ?
                    <Paper elevation={3} className={clsx(classes.primaryPadding, classes.texWrapper)}>
                        <Tax/>
                    </Paper> : null
                }
            </div>
        </div>
    )
}