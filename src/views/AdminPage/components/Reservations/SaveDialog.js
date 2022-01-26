import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";

export default function SaveDialog(props) {

    const {onClose, selectedValue, open, onSave} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle id="dialog-title">
                Confirm Reservation
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure do you want to confirm this reservation?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onSave}>
                    Yes
                </Button>
                <Button onClick={onClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}