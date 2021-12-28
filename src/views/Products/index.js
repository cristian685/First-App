import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getProduct} from "./actions";
import LoadingComponent from "../../components/Loading";
import MediaCard from './components/MediaCard';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelectBar from "../../components/SelectBar";
import SearchInput from "../../components/SearchImput";

function Products(props) {
    const {loading , products} =props
    const [searchText , setSearchText ] =useState("")
    const handleOnChange=(event) => {
        setSearchText(event.target.value)
    }

    const filteredProducts = products.filter(item => item?.name.includes(searchText))

    useEffect(() => {
        props.dispatchSetProducts()
        ;
    },[] );


    if(loading)
    {
        return (
            <LoadingComponent/>
        )
    }
    return<div >
        <Box
            sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                flex: 'auto',
            }}>
        <SearchInput onSearchChanged={handleOnChange}/>
        <SelectBar/>
        </Box>
                    <Container component="main" maxWidth="lg" sx={{marginLeft:50}}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 'auto',
                            }}>
                            <Typography component="h1" variant='h6' gutterBottom>In Brasov : </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                {filteredProducts.map(product => {
                                    return <MediaCard
                                        key={product.id}
                                        post={product}

                                    />
                                })}
                            </Box>

                        </Box>
                    </Container>
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
