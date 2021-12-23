import React from"react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CustomButton() {
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <div>
                <Button
                    variant="contained" size="large">
                    Products
                </Button>
            </div>
        </Box>
    );
}