import React, {useEffect, useState} from 'react';
import { Avatar, Button, CssBaseline, TextField,
    FormControlLabel, Checkbox, Link, Grid, Box, Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { LockOutlined } from '@mui/icons-material';
import { Container } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import {connect} from "react-redux";
import {openSnackbar} from "../../components/SnackbarCustom/actions";
import  {useNavigate}  from "react-router-dom"
import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 4,
        backgroundColor: '#fff',
    },
    form: {
        width: '100%',
        marginTop: 12,
    },
    submit: {
        margin: 10,
    },
}));
const imageArray = [
    {img1:'url(https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'},
    {img2:'url(https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img3:'url(https://images.unsplash.com/photo-1585162562525-5f946b23cd00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img4:'url(https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img5:'url(https://images.unsplash.com/photo-1580560230671-61e01dfdb285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img6:'url(https://images.unsplash.com/photo-1511426463457-0571e247d816?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}

]

const randomIndex=Math.floor(Math.random() * imageArray.length);


    function SignUp(props) {


    const {dispatchOpenSnackbar}=props;
    const classes = useStyles();
    const [userCreateObj, setUserCreateObj] = useState({});
        let navigate = useNavigate();
        const [img, setImg] = useState(imageArray[randomIndex]);

        useEffect( () => {
            return () => {
                setImg(imageArray[randomIndex])

            }
        },[])


        const handleCreateChange = type => event => {
        setUserCreateObj({
            ...userCreateObj,
            [type]: event.target.value
        })

    }

    const handleCreateClick = async () => {

        const {email, password} = userCreateObj;
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            dispatchOpenSnackbar('success' , "Ai fost inregistrat cu succes")
            navigate("../home", { replace: true });
        } catch (error) {
            dispatchOpenSnackbar('error' , error.message)
        }
    }

     const henderSubmit=(event) => {
        event.preventDefault();

    }

    return (
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
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={henderSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleCreateChange('email')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleCreateChange('password')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={handleCreateClick}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
                </Box>
            </Grid>
        </Grid>

    );
}

const mapDispatchToProps= {
    dispatchOpenSnackbar:openSnackbar
}

export default connect(null, mapDispatchToProps)(SignUp)
