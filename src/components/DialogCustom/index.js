import React from 'react';
import {
    Dialog, DialogActions, DialogContent, DialogTitle, Button
} from "@mui/material";

function DialogCustom(props) {
    const { onClose, onConfirm,  open, children, dialogConfirmLabel, dialogTitle, maxWidth = 'md' } = props;
    return (
        <Dialog
            maxWidth={maxWidth}
            fullWidth
            open={open}
            onClose={onClose}
        >
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

            <DialogActions>
                <Button onClick={onConfirm}>{dialogConfirmLabel}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogCustom;
