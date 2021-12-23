import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getProduct} from "./actions";
import LoadingComponent from "../../components/Loading";
import MediaCard from './components/MediaCard';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Products(props) {



    const {loading , products} =props

    useEffect(() => {
        props.dispatchSetProducts()
        ;
    },[] );


    if(loading)
    {
        return <div >
            <h1>
            <LoadingComponent/>
        </h1>
        </div>
    }
    return<div >
        {products.map( product =>{
                return(
                    <Container component="main" maxWidth="lg">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 'auto',
                            }}>
                            <Typography component="h1" variant='h6' gutterBottom>Terenuri</Typography>
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                }}>
                                {products.map(product => {
                                    return <MediaCard
                                        key={product.id}
                                        post={product}

                                    />
                                })}
                            </Box>

                        </Box>
                    </Container>
                )
            })}
    </div>
}

const mapStateToProps = state => {
    return {
        ...state.products,
    };
}

const mapDispatchToProps= {
    dispatchSetProducts:getProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
