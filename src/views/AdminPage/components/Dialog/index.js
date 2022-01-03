import * as React from 'react';
import {connect} from "react-redux";
import {closeDialog} from "./actions";
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContentText, DialogTitle} from "@mui/material";


function DialogAlert(props) {

    const  {type, dispatchCloseDialog}=props;

    const open=type;


    const handleClose = () => {
        dispatchCloseDialog();
    };



    return (
        <React.Fragment>
            <Dialog
                maxWidth='lg'
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Optional sizes</DialogTitle>

                <DialogContentText>
                    You can set my maximum width and whether to adapt or not.
                </DialogContentText>

                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
const mapStateToProps=(state)=>{
    return {
        ...state.dialog
    };
}
const mapDispatchToProps={
    dispatchCloseDialog : closeDialog

}
export default connect(mapStateToProps, mapDispatchToProps)(DialogAlert)
