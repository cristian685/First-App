import React from 'react';
import {
    Dialog, DialogActions, DialogContent, DialogTitle, Button
} from "@mui/material";





function DialogCustom(props) {
    const { onClose, onConfirm, open, children, dialogConfirmLabel, dialogTitle, maxWidthDialog ,onNext, dialogNextLabel,dialogCloseLabel,onBackLabel,dialogBackLabel } = props;

    return (
        <Dialog
            maxWidth={maxWidthDialog}
             fullWidth='sm'
            open={open}
            onClose={onClose}
        >
            <DialogActions>
            <Button
                onClick={onClose}>
                {dialogCloseLabel}
            </Button>
            </DialogActions>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={onBackLabel}>
                    {dialogBackLabel}
                </Button>
                <Button
                    onClick={onConfirm}>
                    {dialogConfirmLabel}
                </Button>
                <Button
                    onClick={onNext}>
                    {dialogNextLabel}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogCustom;
