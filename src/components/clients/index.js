import React from 'react';
import Paper from '@material-ui/core/Paper';
import ClientList from './clientList';
import AddClient from './addClientForm';
import styleClients from './clients.style';

export default function Clients(){
    const classes = styleClients();
    return (
        <div className={classes.clientsWrapper}>
            <Paper elevation={3} className={`client-list ${classes.left}`} >
                <ClientList/>
            </Paper>
            <Paper elevation={3} className={classes.right} >
                <AddClient/>
            </Paper>
        </div>
    )
}