import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { LockOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, getAuth} from "firebase/auth";
import {auth} from "../../config/firebaseConfig";
import UserLogged from "./UserLogged"
import {connect} from "react-redux";
import {openSnackbar} from "../../components/SnackbarCustom/actions";
import  {useNavigate}  from "react-router-dom"
import Paper from "@mui/material/Paper";
import FacebookLogin from 'react-facebook-login';


const theme = createTheme();
const imageArray = [
    {img1:'url(https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'},
    {img2:'url(https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img3:'url(https://images.unsplash.com/photo-1585162562525-5f946b23cd00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img4:'url(https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img5:'url(https://images.unsplash.com/photo-1580560230671-61e01dfdb285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img6:'url(https://images.unsplash.com/photo-1511426463457-0571e247d816?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}

]
const randomIndex=Math.floor(Math.random() * imageArray.length)


    function SignIn(props) {
        const {dispatchOpenSnackbar}=props;
        const [loginObj, setLoginObj] = useState({});
        let navigate = useNavigate();
        const [img, setImg] = useState(imageArray[randomIndex]);


        const handleLoginFacebook = () => {
            const provider = new FacebookAuthProvider()
            signInWithPopup(auth ,provider)
                .then ((re) =>{
                    console.log(re)
                    dispatchOpenSnackbar('success' , 'V-ati logat cu succes')
                    navigate("../home", { replace: true });
                })
                .catch((error) => {
                    console.log(error.message)
                    dispatchOpenSnackbar('error' , error.message)
                })
        }


        useEffect( () => {
            return () => {
                setImg(imageArray[randomIndex])

            }
        },[])



    const handleLoginChange = type => event => {
       setLoginObj({
            ...loginObj,
            [type]: event.target.value
        })
    }

    const handleLoginClick = async () => {

        const {email, password} = loginObj;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            dispatchOpenSnackbar('success' , 'V-ati logat cu succes')
            navigate("../home", { replace: true });

        } catch (error) {
            dispatchOpenSnackbar('error' , error.message)
            console.log(error.message);
        }
    }



        // const[status ,setStatus] =useState({})
        //
        // const responseFacebook = (response) => {
        // if(response.status !== 'unknown') {
        //     console.log(response);
        //     setStatus({
        //         auth: true,
        //         name: response.name,
        //         picture: response.picture.data.url,
        //     })
        // }
        // }
        //
        // let facebookData;
        //    status.auth ?
        // facebookData=(
        //     <div>
        //         Hi
        //     </div>
        //     ) :
        // facebookData = (
        // <FacebookLogin
        //     appId="501136865054695"
        //     autoLoad={true}
        //     fields="name,email,picture"
        //     callback={responseFacebook} />
        // )

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: Object.values(img),
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
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
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }}>
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
                            Log In
                        </Button>
                        <Typography>
                            Or
                        </Typography>
                        {/*{facebookData}*/}
                        <Button onClick={handleLoginFacebook}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                        >
                            Log in with facebook
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
            </Container>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>


    );
}


const mapDispatchToProps= {
    dispatchOpenSnackbar:openSnackbar
}

export default connect(null, mapDispatchToProps)(SignIn)
