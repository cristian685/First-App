import React, {useState} from 'react';
import { Link } from'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
} from '@mui/material'

import CardMediaCustom from "../../../../components/CardMediaCustom";
import ProductsDialog from "./ProductsDialog";

export default function MediaCard(props) {
    const { post } = props;
    const { adress, id, name , price ,contact, program } = post;

    return (
        <Card sx={{ display: 'flex' ,maxHeight:280  , marginTop:3}} >
            <Box sx={{ display: 'flex', flexDirection: 'column' , maxHeight:280 ,
                maxWidth:280, margin: 0 , marginTop:6 }}>
            <Link to='/terenuri/${id}'>
                <CardMediaCustom idImage={id}/>
            </Link>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' ,minWidth: 150,
                margin: 1 , }}>
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
                    <ProductsDialog teren={post}/>
                </CardActions>
            </Box>
        </Card>
    );
}

