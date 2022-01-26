import React from 'react';
import { Button, CardMedia, TextField} from "@mui/material";
import DropzoneCustom from "../../../components/CustomDropzone";

function AddElement(props) {
    const {onChangeProduct, onChangeImage, onSaveClick, element, previewImage} = props;

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
                onChange={onChangeProduct('adress')}

                />
            <TextField
                margin="normal"
                fullWidth
                multiline
                defaultValue={element?.lat}
                type="number"
                id="lat"
                label="Lat"
                name="lat"
                onChange={onChangeProduct('lat')}

            />
            <TextField
                margin="normal"
                fullWidth
                multiline
                defaultValue={element?.lng}
                type="number"
                id="lng"
                label="Lng"
                name="Lng"
                onChange={onChangeProduct('lng')}

            />
                <TextField
                    margin="normal"
                    fullWidth
                    type="file"
                    id="file"
                    label="file"
                    name="file"
                    onChange={onChangeImage}

                />
            </>
    )
}
export default AddElement
