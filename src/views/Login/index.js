import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useContext, useState} from "react";
import {signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../../Config/firebaseConfig";
import {
     onAuthStateChanged
 } from 'firebase/auth'
import UserLogged from "./UserLogged"
import SnackbarCustom from "../../components/SnackbarCustom"
import {UserContext} from "../../context/UserContext";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {


    const [user, setUser] = useState(null);
    const [loginObj, setLoginObj] = useState({});
    const [authStatus,setAuthStatus]= useState(null);
    const handleLoginChange = type => event => {
        setLoginObj({
            ...loginObj,
            [type]: event.target.value
        })
    }

    const currentUser= useContext(UserContext)
    console.log(user)



    const handleLoginClick = async () => {

        const {email, password} = loginObj;
        try {
            const createdUser = await signInWithEmailAndPassword(auth, email, password)
            console.log(createdUser);
            setAuthStatus({type:"success", message:"Login successful", open:true})

        } catch (error) {
            console.log(error.message);
        setAuthStatus({type:"error", message:error.message , open:true})
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
     });

    const handleLogout = () => {
        signOut(auth);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box>
                    <UserLogged/>
                </Box>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleLoginChange('email')}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleLoginChange('password')}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button onClick={handleLoginClick}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="forgotPass" variant="body2" >
                                    Forgot password </Link>
                            </Grid>
                            <Grid item>
                                <Link href="signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
                <Box sx={{ margin: 10 }}>
                                     Auth user: {user?.email}

                                     <Button onClick={handleLogout}>
                                         Log out
                                     </Button>
                </Box>

                <SnackbarCustom type={authStatus?.type}
                                message={authStatus && authStatus.message ? authStatus.message : ""}
                                open={authStatus?.open}/>
            </Container>
            <UserContext.Consumer>
                {currentUser => {
                    return <div>
                        {currentUser?.email}
                    </div>
                }}
            </UserContext.Consumer>
        </ThemeProvider>

    );
}