import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Typography, TextField, CssBaseline, Grid} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {sendPasswordResetEmail} from 'firebase/auth'
import { auth } from "../../config/firebaseConfig";
import {connect} from "react-redux";
import {openSnackbar} from "../../components/SnackbarCustom/actions";
import {useNavigate} from "react-router-dom";
import Paper from "@mui/material/Paper";



const imageArray = [
    {img1:'url(https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'},
    {img2:'url(https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img3:'url(https://images.unsplash.com/photo-1585162562525-5f946b23cd00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img4:'url(https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img5:'url(https://images.unsplash.com/photo-1580560230671-61e01dfdb285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'},
    {img6:'url(https://images.unsplash.com/photo-1511426463457-0571e247d816?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}

]

const randomIndex=Math.floor(Math.random() * imageArray.length);

    function ForgotPassword(props) {

    const {dispatchOpenSnackbar}=props;
    const [email, setEmail] = useState("");
    let navigate = useNavigate();
    const [img, setImg] = useState(imageArray[randomIndex]);


        useEffect( () => {
            return () => {
                setImg(imageArray[randomIndex])

            }
        },[])

    const handleSubmitChange = event => {
        setEmail(

            event.target.value
        )
    }


    const handleSubmitClick = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            dispatchOpenSnackbar('success' , "A fost trimis un mail pentru schimbarea parolei")
            navigate("../home", { replace: true });
        } catch (error) {

            dispatchOpenSnackbar('error' , error.message)
        }

    }
            return (
                <Grid container component="main" sx={{height: '100vh'}}>
                    <CssBaseline/>
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
                            <Container maxWidth="lg">
                                <Box sx={{margin: 10}}>
                                    <Typography variant="h4">Reset your password</Typography>
                                    <TextField margin="normal"
                                               required
                                               fullWidth
                                               id="email"
                                               label="Email Address"
                                               name="email"
                                               autoComplete="email"
                                               onChange={handleSubmitChange}
                                               autoFocus/>
                                    <Button onClick={handleSubmitClick}
                                            variant="contained"
                                            sendIcon={<SendIcon/>}>
                                        Send
                                    </Button>
                                </Box>
                            </Container>
                        </Box>
                    </Grid>
                </Grid>
            );
}
const mapDispatchToProps= {
    dispatchOpenSnackbar:openSnackbar
}

export default connect(null, mapDispatchToProps)(ForgotPassword)
