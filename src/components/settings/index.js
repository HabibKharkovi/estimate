import React from 'react';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Paper from '@material-ui/core/Paper';
import Account from './account';
import Company from './company';
import Preferences from './preferences';
import Document from './document';
import Taxes from './taxes';
import Contracts from './contracts';
import QuickBooks from './quick-books';
import { Link, Switch, Route } from 'react-router-dom';
import styleSettings from './settings.style';

export default function Settings(props){
    console.log(props)
    const classes = styleSettings();
    return (
        <div className={classes.settingsWrapper}>
            <Paper elevation={3} className={classes.left} >
            <List component="nav" aria-label="main mailbox folders">
                <Link to="/settings/account" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Account" />
                    </ListItem>
                </Link>
                <Divider/>
                <Link to="/settings/company" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Company" />
                    </ListItem>
                </Link>
                <Divider/>
                <Link to="/settings/document" className={classes.link}> 
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Document" />
                    </ListItem>
                </Link>
                <Divider/>
                <Link to="/settings/preferences" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Preferences" />
                    </ListItem>
                </Link>
                <Divider/>
                <Link to="/settings/taxes" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Taxes" />
                    </ListItem>
                </Link>
                <Divider/>
                <Link to="/settings/contracts" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contracts" />
                    </ListItem>
                </Link>
                
            </List>
            </Paper>
            <Paper elevation={3}  className={classes.right} >
                <Switch>
                    <Route exact path="/settings/account" component={Account}/>
                    <Route exact path="/settings/company" component={Company} />
                    <Route exact path="/settings/document" component={Document} />
                    <Route exact path="/settings/preferences" component={Preferences} />
                    <Route exact path="/settings/taxes" component={Taxes} />
                    <Route exact path="/settings/contracts" component={Contracts} />
                </Switch>
            </Paper>
        </div>
    )
}

