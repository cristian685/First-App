import React from 'react';
import {Avatar, Box, Button, CardMedia, TextField, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DropzoneCustom from "../../../components/CustomDropzone";

function AddElement(props) {
    const {onChangeProduct, onChangeImage, onSaveProduct, element, previewImage} = props;
    return (
        <>
                <TextField
                    margin="normal"
                    fullWidth
                    defaultValue={element?.name}
                    id="text"
                    label="Nume"
                    type = "text"
                    name="text"
                    autoFocus
                    onChange={onChangeProduct('name')}

                />
                <TextField
                    margin="normal"
                    fullWidth
                    defaultValue={element?.price}
                    type="number"
                    id="price"
                    label="Price"
                    name="price"
                    autoFocus
                    onChange={onChangeProduct('price')}

                />
                <TextField
                    margin="normal"
                    fullWidth
                    defaultValue={element?.contact}
                    type="number"
                    id="contact"
                    label="Contact"
                    name="contact"
                    autoFocus
                    onChange={onChangeProduct('contact')}

                />
                <TextField
                    margin="normal"
                    fullWidth
                    type="text"
                    defaultValue={element?.program}
                    id="program"
                    label="Program"
                    name="program"
                    autoFocus
                    onChange={onChangeProduct('program')}

                />
                <TextField
                    margin="normal"
                    fullWidth
                    multiline
                    row={2}
                    defaultValue={element?.adress}
                    type="text"
                    id="adress"
                    label="Adress"
                    name="adress"
                    autoFocus
                    onChange={onChangeProduct('adress')}

                />
                {/*<TextField*/}
                {/*    margin="normal"*/}
                {/*    fullWidth*/}
                {/*    type="file"*/}
                {/*    id="file"*/}
                {/*    label="file"*/}
                {/*    name="file"*/}
                {/*    autoFocus*/}
                {/*    onChange={onChangeImage}*/}

                {/*/>*/}
            {previewImage && <CardMedia
                component="img"
                height="50"
                width='50'
                image={previewImage}
            />}
                <DropzoneCustom onChangeImage={onChangeImage}/>
                <Button
                    onClick={onSaveProduct}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>
                    Add element
                </Button>
            </>
    )
}
export default AddElement