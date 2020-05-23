import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import useStyles from './openClientInfo.style';

export default function OpenClientInfo() {
    const classes = useStyles();
    const selectedClient = useSelector(state => state.client.selectedClient)
    const { name, email, phone_1, phone_2, address_1, address_2, state, city, postal_code } = selectedClient;
    return (
        <div className={classes.root}>
            <h3 className="form-sub-heading">Client Information</h3>
            <div className={classes.clientinfo}>
                <div className={classes.row}>
                    <div className={clsx(classes.name, classes.colHalf)}>
                        <label className={classes.label}>Name</label>
                        <span className={classes.value}>{name}</span>
                    </div>
                    <div className={clsx(classes.email, classes.colHalf)}>
                        <label className={classes.label}>Email</label>
                        <span className={classes.value}>{email}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Phone (mobile)</label>
                        <span className={classes.value}>{phone_1}</span>
                    </div>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Phone (other)</label>
                        <span className={classes.value}>{phone_2}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>City</label>
                        <span className={classes.value}>{city}</span>
                    </div>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Zip / Postal Code</label>
                        <span className={classes.value}>{postal_code}</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>State</label
                    ><span className={classes.value}>{state}</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Address</label>
                    <span className={classes.value}>{address_1}</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Address 2</label>
                    <span className={classes.value}>{address_2}</span>
                </div>
            </div>
        </div>
    )
}