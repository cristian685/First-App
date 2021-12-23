import React, {useState} from 'react';
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

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
        width: '100%', // Fix IE 11 issue.
        marginTop: 12,
    },
    submit: {
        margin: 10,
    },
}));


    function SignUp(props) {

    const {dispatchOpenSnackbar}=props;
    const classes = useStyles();
    const [userCreateObj, setUserCreateObj] = useState({});
        let navigate = useNavigate();

    const handleCreateChange = type => event => {
        setUserCreateObj({
            ...userCreateObj,
            [type]: event.target.value
        })

    }

    const handleCreateClick = async () => {

        const {email, password} = userCreateObj;
        try {
            const createdUser = await createUserWithEmailAndPassword(auth, email, password)
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
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>

    );
}
const mapStateToProps = state => {
    return {
        ...state.products,
    };
}

const mapDispatchToProps= {
    dispatchOpenSnackbar:openSnackbar
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)