import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import StyleSidebar from './sidebar.style';
import EstimateIcon from '../../estimate.svg';
import ClientIcon from '../../client.svg';
import ItemIcon from '../../item.svg';
import InvoiceIcon from '../../invoice.svg';
import SettingIcon from '../../settings.svg';

export default function Sidebar({ open, setOpen}) {
  const classes = StyleSidebar();

  const sidebarLinks = [
      {
        text: "Estimates",
        path: "/estimates",
        imageUrl : EstimateIcon,
        cls : null
      },
      {
        text: "Invoices",
        path: "/invoices",
        imageUrl : InvoiceIcon,
        cls : null
      },
      {
        text: "Clients",
        path: "/clients",
        imageUrl : ClientIcon,
        cls : 'client',
      },
      {
        text: "Items",
        path: "/items",
        imageUrl : ItemIcon,
        cls : null
      },
      {
        text: "Settings",
        path: "/settings/account",
        imageUrl : SettingIcon,
        cls : null
      },
]

  const theme = createMuiTheme({
    palette: {
      grey: {
        main: '#212121',
      },
    },
  });

  return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.paper,{
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Divider />
        <List component="nav" aria-label="secondary">
          {sidebarLinks.map((link, index) => (
            <Link to={link.path} className={classes.link} key={index}>
                <ThemeProvider theme={theme}>
                    <ListItem className={classes.manuItem} button >
                        <ListItemIcon><img src={link.imageUrl} className={`${classes.icon} ${link.cls}`} alt='icon'/></ListItemIcon>
                        <ListItemText className={classes.manuLink}>{link.text}</ListItemText>`
                    </ListItem>
                </ThemeProvider>
            </Link>
          ))}
        </List>
      </Drawer>
  );
}