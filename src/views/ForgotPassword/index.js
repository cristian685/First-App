import * as React from 'react';
import Box from '@mui/material/Box';
import Button from "@material-ui/core/Button";
import SendIcon from '@mui/icons-material/Send';
import Container from "@material-ui/core/Container";
import Typography from "@mui/material/Typography";
import {TextField} from "@material-ui/core";
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from "../../Config/firebaseConfig";
import {useState} from "react";
import SnackbarCustom from "../../components/SnackbarCustom";





export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [authStatus,setAuthStatus]= useState(null);


    const handleSubmitChange = event => {
        setEmail(

            event.target.value
        )
    }


    const handleSubmitClick = async () => {
        try {
            const createdUser =  await sendPasswordResetEmail(auth, email)
            console.log(createdUser);
            setAuthStatus({type:"success", message:"Email sent", open:true})

        } catch (error) {
            console.log(error.message);
            setAuthStatus({type:"error", message:error.message , open:true})
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
                <SnackbarCustom type={authStatus?.type}
                                message={authStatus && authStatus.message ? authStatus.message : ""}
                                open={authStatus?.open}/>
            </Box>
        </Container>
    );
}

