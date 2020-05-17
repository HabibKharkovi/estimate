import React from 'react';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Paper from '@material-ui/core/Paper';
import styleSettings from './settings.style';
import Account from './account';

export default function Settings(){
    const classes = styleSettings();
    return (
        <div className={classes.settingsWrapper}>
            <Paper elevation={3} className={classes.left} >
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            </Paper>
            <Paper elevation={3}  className={classes.right} >
                <Account/>
            </Paper>
        </div>
    )
}