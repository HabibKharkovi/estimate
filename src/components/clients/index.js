import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import ClientList from './clientList';
import AddClient from './addClientForm';
import Button from '@material-ui/core/Button';
import EditClient from './editClientForm';
import OpenClientInfo from './openClientInfo';
import styleClients from './clients.style';

export default function Clients(){
    const classes = styleClients();

    const [ edit, setEdit] = useState(false);
    const [ showClientInfo, setshowClientInfo] = useState(false);
    const [ selectClient ] = useState(false);
    
    const handleAdd = () => {
        setEdit(false)
        setshowClientInfo(false)
    }

    const handleEdit = (client) => {
        setEdit(true)
        setshowClientInfo(false)
    }

    const handleshowClientInfo = () => {
        setshowClientInfo(true)
        setEdit(false)
    }

    return (
        <div className={classes.clientsWrapper}>
            <Paper elevation={3} className={`client-list ${classes.left}`} >
                {
                    edit || showClientInfo ?  
                    <Button onClick={() => handleAdd()} className={classes.newClient} variant="contained" color="primary">New Client</Button> 
                    : null
                }
                <ClientList onClientInfoShow={handleshowClientInfo} onEdit={handleEdit} edit={edit}/>
            </Paper>
            <Paper elevation={3} className={classes.right} >
                {
                  showClientInfo ? <OpenClientInfo/> : edit ? <EditClient edit={edit} /> : <AddClient edit={edit} />
                }
            </Paper>
        </div>
    )
}