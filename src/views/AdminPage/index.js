import React, {useState , useEffect} from "react"
import {connect} from "react-redux";
import {
    createProduct,
    deleteImageById,
    deleteImageId,
    deleteProduct,
    getProduct, updateDetails,
    updateImageIds,
    updateProduct
} from "./actions";
import {
    Avatar,
    Box, Button,
    Container,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MediaCardAdmin from "./components/MediaCardAdmin";
import LoadingComponent from "../../components/Loading";
import AddElement from "./components/AddElement";
import { v4 as uuidv4 } from 'uuid';


function Admin(props) {
    const [newProduct ,setNewProduct] = useState({});
    const {loading, products,dispatchUpdateDetails ,dispatchCreateProduct,dispatchDeleteProduct, dispatchUpdateProduct ,dispatchDeleteImageById , dispatchDeleteImageId ,dispatchUpdateImageIds} =props
    const [imagesArray, setImagesArray] = useState([])

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

    const handleCreateProduct = () => {
            const{lat , lng } = newProduct
         dispatchCreateProduct({...newProduct, image: imagesArray ,lat:Number(lat) , lng:Number(lng)});
    }

    const handleChangeProduct= (type) => (event) =>{

        const data = {
            ...newProduct,
            [type] : event.target.value
        }
        setNewProduct(data);
    }

    useEffect(() => {
        props.dispatchGetProducts();
    },[] );


    return (
        <>
            <Box sx={{ flexDirection: 'row' }}>
                {loading && <LoadingComponent/>}
                {products.map(product => {
                    return <MediaCardAdmin
                        onUpdateProduct={dispatchUpdateProduct}
                        key={product.id}
                        post={product}
                        onDelete={dispatchDeleteProduct}
                        onDeleteImage={dispatchDeleteImageById}
                        onDeleteId={dispatchDeleteImageId}
                        onAddImageIds={dispatchUpdateImageIds}
                        onUpdateDetails={dispatchUpdateDetails}
                    />
                })}
            </Box>
        <Box sx={{ marginTop:5 }}>
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5">
                    Add elements to the database
                </Typography>
                <Avatar sx={{ m: 1, bgcolor: '#008CBA' }}>
                    <AddIcon/>
                </Avatar>
                <AddElement
                    onChangeProduct={handleChangeProduct}
                    onChangeImage={handleChangeImage}
                />
                <Button
                    onClick={handleCreateProduct}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>
                    Add element
                </Button>
            </Container>
        </Box>
        </>
    )
}

const mapStateToProps = state => {
    const { products, loading } = state.admin;
    return {
       products,
        loading,
    };
}



const mapDispatchToProps= {
    dispatchDeleteImageId:deleteImageId,
    dispatchDeleteImageById:deleteImageById,
    dispatchGetProducts:getProduct,
    dispatchCreateProduct:createProduct,
    dispatchDeleteProduct : deleteProduct,
    dispatchUpdateProduct : updateProduct,
    dispatchUpdateImageIds:updateImageIds,
    dispatchUpdateDetails:updateDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
