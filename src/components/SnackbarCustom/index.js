import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import {useEffect} from "react";

export const SET_SNACKBAR = "teamly/settings/SET_SNACKBAR";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function SnackbarCustom(props) {
    const {type, message}=props;
    let {open}=props;
    console.log(type)

    const [isLocalOpen, setIsLocalOpen] = React.useState(open);

    useEffect(() => {
        setIsLocalOpen(open);
    }, [open]);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsLocalOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                open={isLocalOpen}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={type}
                    sx={{width: '100%'}}
                    >
                    {message}
                </Alert>
            </Snackbar>
        </Stack>

    );
}
            // <Alert severity="warning">This is a warning message!</Alert>
            // <Alert severity="info">This is an information message!</Alert>
            // <Alert  key severity="success">This is a success message!</Alert>