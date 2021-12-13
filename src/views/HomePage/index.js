import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button2 } from"../../components/Button2"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button href="about" color="inherit">About</Button>
                        <Button href="about" color="inherit">Contact</Button>
                    </Typography>
                    <Button href="login" color="inherit">Login</Button>
                    <Button href="singup" color="inherit">Sing Up</Button>
                </Toolbar>
            </AppBar>
    <header className="App-header">

            <Button2 onCLick={() => {console.log("you clicked on me")}}
            type="button"
                     buttonStyle="btn--primary--outline"
                     buttonSize="btn--large"
            >
                btn2
            </Button2>
            <Button2 variant="contained" color="primary" disableElevation>
                btn1
            </Button2>
        </header>
        </div>
    );
}