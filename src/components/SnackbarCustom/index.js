import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import {connect} from "react-redux";
import {closeSnackbar} from "./actions";

export const SET_SNACKBAR = "teamly/settings/SET_SNACKBAR";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function SnackbarCustom(props) {
    const {type, message , dispatchCloseSnackbar}=props;
    const open=!!type;


    console.log(type , message)

    const handleCloseSnackbar = () => {
        dispatchCloseSnackbar();
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={type}
                    sx={{width: '100%'}}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Stack>

    );
}
const mapStateToProps=(state)=>{
    return {
        ...state.snackbar
    };
}
const mapDispatchToProps={
    dispatchCloseSnackbar : closeSnackbar

}
// <Alert severity="warning">This is a warning message!</Alert>
// <Alert severity="info">This is an information message!</Alert>
// <Alert  key severity="success">This is a success message!</Alert>
export default connect(mapStateToProps, mapDispatchToProps)(SnackbarCustom)