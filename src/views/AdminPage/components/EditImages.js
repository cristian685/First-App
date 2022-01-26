import React, {useState} from 'react'
import {Box, Button, TextField} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardMediaCustom from "../../../components/CardMediaCustom";

export default function EditImages(props) {
    const { imageIds ,id ,onDeleteImg ,onDeleteId ,onAddNewImages ,onSave } =props

    const handleOnDeleteImage=()=>{
        debugger;
         onDeleteImg(id);
        onDeleteId(id)

    }


    if(imageIds) {
        return (
            <>
                <Box sx={{height: 450, width: 650}}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        spaceBetween={40}
                        slidesPerView={1}>

                        {imageIds.map((image, index) => (
                                <SwiperSlide key={image}>
                                    <Box sx={{marginTop: 4, marginLeft: 7, marginBottom: 7, marginRight: 7}}>
                                        <CardMediaCustom height="350"
                                                         width='350'
                                                         folderId={id}
                                                         idImage={image}/>
                                        <Button
                                            onClick={handleOnDeleteImage}
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}>
                                            Delete Gallery
                                        </Button>
                                    </Box>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </Box>
            </>
        )
    }
    else {
        return (
            <div>
                <TextField
                    margin="normal"
                    fullWidth
                    type="file"
                    id="file"
                    label="file"
                    name="file"
                    onChange={onAddNewImages}

                />
            <Button
                onClick={onSave}
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}>
                Add new gallery
            </Button>
            </div>
        )
    }
}