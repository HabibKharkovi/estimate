import React from 'react';
import clsx from 'clsx';
import useStyles from './openItemContent.style';

export default function OpenItemContent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3 className="form-sub-heading">Item</h3>
            <div className={classes.clientinfo}>
                <div className={classes.row}>
                    <label className={classes.label}>Item Name</label>
                    <span className={classes.value}>item name</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Rate</label>
                    <span className={classes.value}>15%</span>
                </div>
                <h3 className="form-sub-heading">Text List</h3>
                <div className={classes.row}>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>
                            <span className={classes.itemName}>item 1</span>
                            <span className={classes.itemValue}>15%</span>
                        </li>
                        <li className={classes.listItem}>
                            <span className={classes.itemName}>item 2</span>
                            <span className={classes.itemValue}>14%</span>
                        </li>
                        <li className={classes.listItem}>
                            <span className={classes.itemName}>item 3</span>
                            <span className={classes.itemValue}>12%</span>
                        </li>
                    </ul>
                </div>
                
                <div className={classes.row}>
                    <label className={classes.label}>Discription</label>
                    <span className={classes.value}>discription</span>
                </div>
            </div>
        </div>
    )
}