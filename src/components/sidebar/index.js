import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import StyleSidebar from './sidebar.style';


export default function Sidebar({ open, setOpen}) {
  const classes = StyleSidebar();

  const sidebarLinks = [
      {
        text: "Estimates",
        path: "/estimates"
      },
      {
        text: "Invoices",
        path: "/invoices"
      },
      {
        text: "Clients",
        path: "/clients"
      },
      {
        text: "Items",
        path: "/items"
      },
      {
        text: "Settings",
        path: "/settings"
      },
]

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.arrow}/> : <ChevronLeftIcon className={classes.arrow}/>}
          </IconButton>
        </div>
        <Divider />
        <List component="nav" aria-label="secondary">
          {sidebarLinks.map((link, index) => (
            <Link to={link.path} className={classes.link} key={index}>
                <ThemeProvider theme={theme}>
                    <ListItem className={classes.manuItem} button >
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon className={classes.icon}/> : <MailIcon className={classes.icon}/>}</ListItemIcon>
                        <ListItemText className={classes.manuLink}>{link.text}</ListItemText>
                    </ListItem>
                </ThemeProvider>
            </Link>
          ))}
        </List>
      </Drawer>
  );
}