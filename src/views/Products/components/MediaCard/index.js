import React from 'react';

import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Typography,
    Box,
} from '@mui/material'

import CardMediaCustom from "../../../../components/CardMediaCustom";
import ProductsDialog from "./ReservationDialog";
import Maps from "../../../../components/Maps";
import DetailsDialog from "./DetailsDialog";
import {createTheme} from "@mui/material/styles";
import {purple} from "@mui/material/colors";
const theme = createTheme({
    palette: {
        primary: {
            main: '#FFCC00',
        },
        secondary: {
            main: '#330033',
        },
    },
});
// const useStyles = makeStyles({
//     mediaCard: {
//         minWidth: 250,
//         margin: 10,
//     }
// })


export default function MediaCard(props) {
    const { post } = props;
    const { adress, id, name , price ,contact, program , lat ,lng , imageIds} = post;



    return (
        <Card sx={{ display: 'flex' ,maxHeight:280  , marginTop:3}} >
            <Box sx={{ display: 'flex', flexDirection: 'column' , maxHeight:280 ,
                maxWidth:280, margin: 0 , marginTop:6 }}>
                <CardMediaCustom height="150"
                                 width='200'
                                 folderId={id}
                                 idImage={imageIds?.[0]} />
                {/*<CardMediaCustom idImage={id}/>*/}

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
                    <DetailsDialog teren={post}/>
                    <ProductsDialog teren={post}/>
                </CardActions>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' ,minWidth: 150,
                marginTop: 2 ,marginBottom:7 , marginLeft:3 }}>

            <Maps lat={lat}  lng={lng}/>
            </Box>
        </Card>
    );
}

