import React, {useContext, useState} from 'react';
import { makeStyles } from '@mui/styles';
import {Link, NavLink} from "react-router-dom";
import companyLogo from "./Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { UserContext } from '../context/UserContext'
import {
    Container,
    Toolbar,
    AppBar,
    Typography,
    Box,
    IconButton,
    List,
    Button,
    ListItem,
    ListItemText,
    Drawer, ListItemIcon, Divider, Tooltip, Avatar,
} from '@mui/material'
import { Menu } from '@mui/icons-material';

const useStyles = makeStyles({
    avatarStyle:{
        color:'#008CBA',
    },
    drawerBackground:{
        backgroundColor:'#161a1d',
    },
    dividerTextColor:{
        color:'#008CBA',
    },
    listTextColor:{
        color:'white',
    },
    photo: {
        width: "150px",
    },
    drawerCustom:{
        backgroundColor: 'blue',
    },
    toolbarCustom: {
        backgroundColor: '#161a1d',
    },
    h6Custom: {
        color: 'blue',
    },
    h6_2_new: {
        backgroundColor: 'blue',
    },
    active: {
        textDecoration: 'none',
        color: 'grey'
    }
})

function SidebarMui(props) {
    const userContext  = useContext(UserContext);
    const classes = useStyles();
    const [isOpen, setDrawerOpen ] = useState()
    const handleCloseNavMenu = () => {}
    const toggleDrawer = () => {
        setDrawerOpen(!isOpen);
    }
    let nameFromEmail   = userContext?.email.substring(0, userContext?.email.lastIndexOf("@"));
    const drawerClass={paper:classes.drawerBackground}
    return <>

        <Drawer
            classes={drawerClass}
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer}
        >
            <Box
                sx={{
                    width: 250,
                }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                    <ListItem
                        button
                        onClick={toggleDrawer}
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon class={classes.listTextColor}>
                            <MenuIcon />
                        </ListItemIcon>
                    </ListItem>
                    <Divider color={'grey'}/>
                    <ListItem
                        button
                        component={NavLink}
                        to="/home"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon class={classes.listTextColor}>
                            <HomeIcon style={{marginRight:'20px'}}/>
                        </ListItemIcon>
                        <ListItemText class={classes.listTextColor} primary="Homepage"/>
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/products"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon class={classes.listTextColor}>
                            <ShoppingCartIcon style={{marginRight:'20px'}}/>
                        </ListItemIcon>

                        <ListItemText class={classes.listTextColor} primary="Products" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/about"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon class={classes.listTextColor}>
                            <InfoIcon style={{marginRight:'20px'}}/>
                        </ListItemIcon>
                        <ListItemText class={classes.listTextColor} primary="About" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        <AppBar classes={{root: classes.toolbarCustom}}>
            <Container maxWidth="xl">

                <Toolbar disableGutters  >
                    <Box sx={{ mr: 2, flexGrow: { xs: 1, md: 0 }, display: { xs: 'flex'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer}
                            color="inherit"
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 3, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img className={classes.photo} src={companyLogo}/>
                    </Typography>
                    <div>
                        Hi , {nameFromEmail} . Welcome back
                    </div>
                    <Box sx={{ flexGrow: 0 , marginLeft:'auto' }}>
                        <Link to="/create-account">
                            <Button class="buttonCustom"
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Create Account
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button class="buttonCustom "
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Login
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title={userContext?.email}>
                            <IconButton sx={{p: 0 , marginLeft:5}}  >
                                <Avatar sx={{ bgcolor: '#008CBA' }} src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </>
}
export default SidebarMui;