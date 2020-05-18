import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import StylesHeader from './header.style';

export default function Header({ setOpen, open }){

    const classes = StylesHeader();

    const handleDrawerOpen = () => {
        setOpen(true);
      };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="close drawer"
                    onClick={handleDrawerClose}
                    className={clsx(classes.menuButton, {
                    [classes.hide]: !open,
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Estimates
                </Typography>
                <div className={classes.profileBtn} aria-controls="profileIcon" aria-haspopup="true" onClick={handleClick}>
                    <AccountCircleIcon className={classes.accountCircleIcon}/>
                    email123@gmail.com
                </div>
                <Menu
                    id="profileIcon"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}