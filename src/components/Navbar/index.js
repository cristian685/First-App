import React, {useState, useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { NavLink } from "react-router-dom";

import { UserContext } from '../../context/UserContext'
import { ThemeContext } from '../../context/ThemeContext'

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Menu, KeyboardArrowRight, Outlet} from '@mui/icons-material';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const useStyles = makeStyles({
    active: {
        textDecoration: 'none',
        color: 'grey'
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

    const [isOpen, setDrawerOpen ] = useState()
    const handleOpenUserMenu = () => {}
    const toggleDrawer = () => {
        setDrawerOpen(!isOpen);
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
                    <ListItem
                        button
                        component={NavLink}
                        to="/products"
                        className={({isActive}) => isActive ? classes.active: ''}
                    >
                        <ListItemIcon>
                            <KeyboardArrowRight  color="inherit"/>
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        <AppBar variant="elevation" elevation={2}>
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button href="login" color="inherit">Login</Button>
                                <Button href="signup" color="inherit">Sign Up</Button>
                                <Typography variant="h6" className={classes.title}>
                                    <Button href="about" color="inherit">About</Button>
                                    <Button href="contact" color="inherit">Contact</Button>
                                    <Button href="home" color="inherit">Home</Button>
                                </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                        </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title={userContext?.email}>
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt={userContext?.email} src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Outlet />
    </>
}
export default Navbar;


