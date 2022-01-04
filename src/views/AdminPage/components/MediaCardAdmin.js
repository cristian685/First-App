import React, {useState} from 'react';
import { Link } from'react-router-dom';

import { makeStyles } from '@mui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography, Container, Avatar,
} from '@mui/material'
import CardMediaCustom from "../../../components/CardMediaCustom";
import DialogCustom from "../../../components/DialogCustom";
import AddElement from "./AddElement";
import AddIcon from "@mui/icons-material/Add";


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
    const { post, onDelete } = props;
    const { adress, id, name , price ,contact ,program } = post;
    console.log('post', post)
    const handleOnDelete=()=>{
        onDelete(id);
    }
   const handleToggleElement = () => {
         setOpenDialog(!openDialog)
    }
    const handleChangeProduct = () => {

    }
    const handleChangeImage= () => {

    }
    const handleCreateProduct= () => {

    }

    return (
        <Card className={classes.mediaCard} >
            <Link to='/terenuri/${id}'>
                <CardMediaCustom idImage={id}/>
            </Link>
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
            </CardContent>

            <CardActions>
                <Button
                    onClick={handleToggleElement}
                    display='flex'
                    // to={`/terenuri/${id}`}
                    // component={Link}
                    variant="outlined"
                    color="primary"
                >Edit element</Button>
                <Button
                    onClick={handleOnDelete}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Delete</Button>
            </CardActions>
            <DialogCustom open={openDialog} onClose={handleToggleElement}>
                <Typography component="h1" variant="h5">
                    Edit elements
                </Typography>
                <AddElement element={post} onChangeProduct={handleChangeProduct} onChangeImage={handleChangeImage} onSaveProduct={handleCreateProduct}/>
            </DialogCustom>
        </Card>
    );
}