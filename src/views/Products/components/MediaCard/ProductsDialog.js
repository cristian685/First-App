import React from 'react'
import CustomTimePicker from "../../../../components/CustomTimePicker";
import {DialogTitle, TextField} from "@mui/material";
import CustomTable from "../../../../components/CustomTable";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import File from "../../../File";

    function ProductsDialog() {

    return(
        <>
        <Box marginBottom={3} >
            <Button variant="contained">Next</Button>
            <TextField
                label="Introdu numarul de telefon"
                margin="normal"
                required
                fullWidth
                name="name"
                autoComplete="current-password"

            />
            {/*<File/>*/}
        </Box>
            <DialogTitle>Selecteaza data si ora</DialogTitle>
            <CustomTimePicker/>

            <Box marginLeft={50} marginTop={-15}>
        <CustomTable/>
        </Box>
    </>
    )
}

export default ProductsDialog