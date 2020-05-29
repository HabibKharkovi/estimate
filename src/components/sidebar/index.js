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
import EstimateIcon from '../../assets/svgs/estimate.svg';
import ClientIcon from '../../assets/svgs/client.svg';
import ItemIcon from '../../assets/svgs/item.svg';
import InvoiceIcon from '../../assets/svgs/invoice.svg';
import SettingIcon from '../../assets/svgs/settings.svg';

export default function Sidebar({ open, setOpen}) {
  const classes = StyleSidebar();

  const sidebarLinks = [
      {
        text: "Estimates",
        path: "/",
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
        cls : 'client--icon',
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
        <List component="nav" aria-label="primary">
          {sidebarLinks.map((link, index) => (
            <Link to={link.path} className={classes.link} key={index}>
                <ListItem className={classes.manuItem} button primary>
                    <ListItemIcon><img src={link.imageUrl} className={`${classes.icon} ${link.cls}`} alt='icon'/></ListItemIcon>
                    <ListItemText className={classes.manuLink}>{link.text}</ListItemText>
                </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
  );
}