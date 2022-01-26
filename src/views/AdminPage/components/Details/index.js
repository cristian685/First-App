import React, { useState} from 'react'
import DialogCustom from "../../../../components/DialogCustom";
import {Button, Checkbox, FormControlLabel} from "@mui/material";

export default function Details (props) {
    const { post ,onUpdate } =props
    const {detalii ,id} =post
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const [details, setDetails] =  useState(false)

    const handleToggleDetails = () => {
        setOpenDetailsDialog(!openDetailsDialog)
    }

    const handleChangeDetails= (type) => (event) =>{
        const data = {
            ...detalii,
            ...details,
            [type]: event.target.checked
        }
        setDetails(data)
    }
    const handleSaveDetails = () => {
        onUpdate(id ,details);
    }

    return (
        <>

            <DialogCustom open={openDetailsDialog} onClose={handleToggleDetails} maxWidthDialog='lg'>
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('parcare')}/>}
                    label="parcare"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('dusuri')}/>}
                    label="dusuri"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('maieuri')}/>}
                    label="maieuri"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('nocturna')}/>}
                    label="nocturna"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('tribuna')}/>}
                    label="tribuna"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('wc')}/>}
                    label="wc"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('vestiar')}/>}
                    label="vestiar"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('acoperit')}/>}
                    label="acoperit"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('bar')}/>}
                    label="bar"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChangeDetails('wifi')}/>}
                    label="wifi"
                />
                <Button
                    onClick={handleSaveDetails}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Salveaza</Button>
            </DialogCustom>
            <Button
                onClick={handleToggleDetails}
                display='flex'
                variant="outlined"
                color="primary"
            >Detalii</Button>

        </>
    )
}