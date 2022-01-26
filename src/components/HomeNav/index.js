import React, {useState, useContext } from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {
    signOut
} from 'firebase/auth'
import { makeStyles } from '@mui/styles';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Avatar,
    Container
} from '@mui/material'

import { Menu, KeyboardArrowRight } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import {ThemeProvider} from "@emotion/react";
import appLogo from "../../images/logo.png";
import { UserContext } from '../../context/UserContext'
import { ThemeContext } from '../../context/ThemeContext'
import { auth }from '../../config/firebaseConfig'


const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#003333',
        },
    },
});

const useStyles = makeStyles({
    active: {
        textDecoration: 'none',
        color: 'grey'
    },
    photo: {
        width: "150px",
    },
    drawerBackground: {
        '&.MuiDrawer-paper': {
            backgroundColor: 'black',
            color: 'white'
        },
        '& svg': {
            color: 'white'
        }

    },
});


function Navbar() {


    const classes = useStyles();
    const userContext  = useContext(UserContext);
    const themeContext  = useContext(ThemeContext);
    // let nameFromEmail   = userContext?.email.substring(0, userContext?.email.lastIndexOf("@"));
    let nameFromEmail = userContext?.displayName
    const [isOpen, setDrawerOpen ] = useState()
    let navigate = useNavigate();

    const handleOpenUserMenu = () => {
        navigate("../youraccount", { replace: true });
    }
    const toggleDrawer = () => {
        setDrawerOpen(!isOpen);
    }

    const handleLogout = () => {
        signOut(auth);
    }

    return <>
        <Drawer
            anchor="left"
            open={isOpen}
            variant="temporary"
            onClose={toggleDrawer}
            classes={{paper: themeContext === 'black' ? classes.drawerBackground: ''}}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                    Hi , {nameFromEmail} . Welcome back
                    <ListItem
                        button
                        component={NavLink}
                        to="/contact"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon>
                            <KeyboardArrowRight  color="inherit"/>
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/about"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon>
                            <KeyboardArrowRight  color="inherit"/>
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem
                        button
                        component={NavLink}
                        to="/products"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon>
                            <KeyboardArrowRight  color="inherit"/>
                        </ListItemIcon>
                        <ListItemText primary="Inchiriaza teren" />
                    </ListItem>
                    <ListItem
                        button
                        // component={NavLink}
                        onClick={handleLogout}
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon>
                            <KeyboardArrowRight  color="inherit"/>
                        </ListItemIcon>
                        <ListItemText primary="Log out" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
                <AppBar variant="elevation" elevation={2} color="secondary">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters  >
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                                sx={{ mr: 2, flexGrow: { xs: 1, md: 0 }, display: { xs: 'flex'} }}
                            >
                                <img className={classes.photo} src={appLogo}/>
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                                <Button
                                    to='/home'
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    component={NavLink}
                                >
                                    Home
                                </Button>
                                <Button
                                    to='/about'
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    component={NavLink}
                                >
                                    About
                                </Button>
                                <Button
                                    to='/contact'
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    component={NavLink}
                                >
                                    Contact
                                </Button>
                                    <UserContext.Consumer>
                                        {user => {
                                            if (user) {
                                                return (
                                                    <Box sx={{ flexGrow: 0, marginLeft:'auto', display: { xs: 'none', md: 'flex' } }}>

                                                        <Tooltip title={userContext?.email}>
                                                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                                                <Avatar alt={userContext?.email} src={userContext?.photoURL}/>
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Box sx={{ flexGrow: 0 , marginTop:2.5 , marginLeft:2 , marginRight:2 }}>

                                                                Hi , {nameFromEmail} . Welcome back
                                                        </Box>
                                                        <Button
                                                            sx={{my: 2, color: 'white', display: 'block'}}
                                                            onClick={handleLogout}
                                                        >
                                                            Log out
                                                        </Button>
                                                    </Box>


                                                        )
                                            }
                                            return (
                                                <Box sx={{ flexGrow: 0, marginLeft:'auto', display: { xs: 'none', md: 'flex' } }}>
                                                {/*<Box sx={{ flexGrow: 0 , marginLeft:'auto' }}>*/}
                                                    <Button
                                                        to='/login'
                                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                                        component={NavLink}
                                                    >
                                                        Login
                                                    </Button>
                                                    <Button
                                                        to='/signup'
                                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                                        component={NavLink}
                                                    >
                                                        Create account
                                                    </Button>
                                                </Box>
                                            )
                                        }}
                                    </UserContext.Consumer>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </Box>
        <Toolbar disableGutters />
    </>
}
export default Navbar;


