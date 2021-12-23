import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {sendPasswordResetEmail} from 'firebase/auth'
import { auth } from "../../config/firebaseConfig";
import {connect} from "react-redux";
import {openSnackbar} from "../../components/SnackbarCustom/actions";

    function ForgotPassword(props) {

    const {dispatchOpenSnackbar}=props;
    const [email, setEmail] = useState("");


    const handleSubmitChange = event => {
        setEmail(

            event.target.value
        )
    }


    const handleSubmitClick = async () => {
        try {
            const createdUser =  await sendPasswordResetEmail(auth, email)
            dispatchOpenSnackbar('success' , "A fost trimis un mail pentru schimbarea parolei")

        } catch (error) {

            dispatchOpenSnackbar('error' , error.message)
        }

    }


    return (
        <Container maxWidth="lg">
            <Box  sx={{ margin: 10 }}>
                <Typography variant="h4">Reset your password</Typography>
                <TextField margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                           onChange={handleSubmitChange}
                autoFocus />
            <Button onClick={handleSubmitClick}
                    variant="contained"
                    endIcon={<SendIcon />}>
            Send
        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
