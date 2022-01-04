import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";

function DialogCustom(props) {
    const {onClose, open, children} = props;
    return (
        <Dialog
            maxWidth='md'
            open={open}
            onClose={onClose}
        >
            <DialogTitle>Optional sizes</DialogTitle>

            <DialogContent dividers>
                {children}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogCustom;
