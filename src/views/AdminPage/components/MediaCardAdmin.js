import React, { useState} from 'react';
import { makeStyles } from '@mui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
} from '@mui/material';
import CardMediaCustom from "../../../components/CardMediaCustom";
import DialogCustom from "../../../components/DialogCustom";
import AddElement from "./AddElement";
import ConfirmReservations from "./Reservations/ConfirmReservations";
import {v4 as uuidv4} from "uuid";
import EditImages from "./EditImages";
import Details from "./Details";

const useStyles = makeStyles({
    mediaCard: {
        maxWidth: 250,
        minWidth: 250,
        margin: 10,
    }
})

 export default function MediaCardAdmin(props) {

    const [openDialog, setOpenDialog] = useState(false);
    const classes = useStyles();
    const { post, onDelete  , onUpdateProduct ,onDeleteImage ,onDeleteId ,onAddImageIds ,onUpdateDetails } = props;
    const { adress, id, name , price ,contact ,program , lat ,lng , imageIds} = post;
    const [newProduct, setNewProduct] = useState({})
     const [imagesArray, setImagesArray] = useState([])
     const [openImagesDialog, setOpenImagesDialog] = useState(false);


    const handleToggleElement = () => {
        setOpenDialog(!openDialog)
    }
     const handleToggleImages = () => {
         setOpenImagesDialog(!openImagesDialog)
     }

    const handleSaveClick = () => {
        onUpdateProduct(newProduct);
    }

    const handleOnDelete=()=>{
        onDelete(id);
    }
    const handleAddImageIds = () => {
        onAddImageIds(id ,imagesArray)
        debugger;
    }


    const handleChangeImage = e => {
        const {files} = e.target;
        const filesWithId = {
            name: files[0].name,
            size: files[0].size,
            type: files[0].type,
            file: files[0],
            id: uuidv4()
        }
        const dataArray = [
            ...imagesArray,
            filesWithId,
        ];
        setImagesArray(dataArray)
    }

     const handleChangeProduct = (type) => (event) => {
         const{lat , lng } = newProduct
         const data = {
             ...post,
             ...newProduct ,lat:Number(lat) , lng:Number(lng),
             [type]: event.target.value

         }
         setNewProduct(data);
     }

    return (
        <Card sx={{ display: 'flex' , marginTop:3 , marginLeft:25, maxWidth:1200}} >
            <Box sx={{ display: 'flex', flexDirection: 'column' , maxHeight:280 ,
                maxWidth:280 , marginTop:6 }}>
                <CardMediaCustom  height="150"
                                  width='180'
                                  folderId={id}
                                  idImage={imageIds?.[0]} />

            </Box>

            <CardContent>
                    <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                   Adresa: {adress}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                   Contact: {contact}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                   Program: {program}
                </Typography>
                <Typography gutterBottom variant="body1" component="div" marginTop={'10px'}>
                   Pret/h: {price} RON
                </Typography>
                <Typography gutterBottom variant="body1" component="div" marginTop={'10px'}>
                    lat: {lat}
                </Typography>
                <Typography gutterBottom variant="body1" component="div" marginTop={'10px'}>
                    lng: {lng}
                </Typography>
            </CardContent>

            <CardActions>
               <ConfirmReservations idTeren={id}/>
                <Details post={post} onUpdate={onUpdateDetails}/>
                <Button
                    onClick={handleToggleElement}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Edit element</Button>
                <Button
                    onClick={handleToggleImages}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Edit images</Button>
                <Button
                    onClick={handleOnDelete}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Delete</Button>
            </CardActions>

            <DialogCustom open={openDialog} onClose={handleToggleElement}>
                <AddElement element={post}
                            onChangeProduct={handleChangeProduct}
                />
                <Button
                    onClick={handleSaveClick}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>
                   Edit Element
                </Button>
            </DialogCustom>

            <DialogCustom maxWidthDialog="lg" open={openImagesDialog} onClose={handleToggleImages}>
                <EditImages imageIds={imageIds} id={id}
                            onDeleteImg={onDeleteImage}
                            onDeleteId={onDeleteId}
                            onAddNewImages={handleChangeImage}
                            onSave={handleAddImageIds}
                            />
            </DialogCustom>

        </Card>
    );
}