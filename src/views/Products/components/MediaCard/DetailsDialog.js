import {createTheme} from "@mui/material/styles";
import {purple} from "@mui/material/colors";
import {Button, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import React, {useState} from "react";
import DialogCustom from "../../../../components/DialogCustom";
import Typography from "@mui/material/Typography";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import KeyIcon from '@mui/icons-material/Key';
import WcIcon from '@mui/icons-material/Wc';
import HighlightIcon from '@mui/icons-material/Highlight';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ShowerIcon from '@mui/icons-material/Shower';
import RoofingIcon from '@mui/icons-material/Roofing';
import LightModeIcon from '@mui/icons-material/LightMode';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';
import CardMediaCustom from "../../../../components/CardMediaCustom";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import WifiIcon from '@mui/icons-material/Wifi';
import {ThemeProvider} from "@emotion/react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#003333',
        },
        secondary: {
            main: '#003333',
        },
    },
});

export default function DetailsDialog(props){


    const [activeTeren, setActiveTeren] = useState('');
    const { teren } = props
    const { id  ,imageIds ,details} = teren;
    const handleToggleElement = (id) => () => {
        setActiveTeren(id)
    }

    let parking ,dusuri ,maieuri ,vestiar ,wc ,nocturna , tribuna ,acoperit ,bar ,wifi;
     if(details?.parcare ===true ) {
         parking = (<Box marginTop={2}><DirectionsCarIcon sx={{marginRight:1 }}/> Parcare</Box>)
     }
    if(details?.dusuri ===true ) {
        dusuri = (<Box marginTop={2}><ShowerIcon sx={{marginRight:1}}/> Dusuri</Box>)
    }
    if(details?.vestiar ===true ) {
        vestiar = (<Box marginTop={2}><KeyIcon sx={{marginRight:1}}/> Vestiar</Box>)
    }
    if(details?.wc ===true ) {
        wc = (<Box marginTop={2}><WcIcon sx={{marginRight:1}}/> Wc</Box>)
    }
    if(details?.nocturna ===true ) {
        nocturna = (<Box marginTop={2}><LightModeIcon sx={{marginRight:1}}/> Nocturna</Box>)
    }
    if(details?.tribuna ===true ) {
        tribuna = (<Box marginTop={2}><EmojiPeopleIcon sx={{marginRight:1}}/> Tribuna</Box>)
    }
    if(details?.acoperit ===true ) {
        acoperit = (<Box marginTop={2}><RoofingIcon sx={{marginRight:1}}/>Acoperit</Box>)
    }
    if(details?.bar ===true ) {
        bar = (<Box marginTop={2}><LocalBarIcon sx={{marginRight:1}}/> Bar</Box>)
    }
    if(details?.wifi ===true ) {
        wifi = (<Box marginTop={2}><WifiIcon sx={{marginRight:1}}/> Wifi</Box>)
    }


    return(
    <>
        <ThemeProvider theme={theme}>
    <Button
        onClick={handleToggleElement(id)}
    display='flex'
    variant="contained"
    color="secondary"
        >Detalii </Button>
    <DialogCustom
        maxWidthDialog="lg"
        open={!!activeTeren}
        onClose={handleToggleElement('')}
        dialogTitle="Detalii despre teren"
    >
        <Box sx={{height:800}}>
        <Box sx={{  height:450 ,width:650 ,marginTop:3 ,marginLeft:2}}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}

                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                spaceBetween={40}
                slidesPerView={1}>
                {imageIds.map(image=>(
                        <SwiperSlide key={image}>
                            <Box sx={{marginTop:4 , marginLeft:7 , marginBottom:7 ,marginRight:7}}>
                                <CardMediaCustom height="350"
                                                 width='350'
                                                 folderId={id}
                                                 idImage={image}/>
                            </Box>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
            <Typography gutterBottom variant="h5" component="div" sx={{marginLeft:30 ,marginTop:3}}>
                <PhotoLibraryIcon/>
                Galerie Foto
            </Typography>
        </Box>
        </Box>
        <Box sx={{marginTop:-96 , height:800}}>
        <Card sx={{ maxWidth: 340 ,marginLeft:90}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <CheckIcon/>
                        Facilitatile Terenului
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {parking}
                        {dusuri}
                        {maieuri}
                        {vestiar}
                        {wc}
                        {nocturna}
                        {tribuna}
                        {acoperit}
                        {bar}
                        {wifi}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Box>
    </DialogCustom>
        </ThemeProvider>
    </>
        )
}