import React from 'react';
import clsx from 'clsx';
import useStyles from './openClientInfo.style';

export default function OpenClientInfo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3 className="form-sub-heading">Client Information</h3>
            <div className={classes.clientinfo}>
                <div className={classes.row}>
                    <div className={clsx(classes.name, classes.colHalf)}>
                        <label className={classes.label}>Name</label>
                        <span className={classes.value}>client name</span>
                    </div>
                    <div className={clsx(classes.email, classes.colHalf)}>
                        <label className={classes.label}>Email</label>
                        <span className={classes.value}>email@gmail.com</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Phone (mobile)</label>
                        <span className={classes.value}>3323233444</span>
                    </div>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Phone (other)</label>
                        <span className={classes.value}>4223233444</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>City</label>
                        <span className={classes.value}>new york</span>
                    </div>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Zip / Postal Code</label>
                        <span className={classes.value}>4433</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>State</label
                    ><span className={classes.value}>state</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Address</label>
                    <span className={classes.value}>asdf asdf asdf</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Address 2</label>
                    <span className={classes.value}>asdf asdf asdf</span>
                </div>
            </div>
        </div>
    )
}