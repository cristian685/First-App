import React, {useState , useEffect} from "react"
import {connect} from "react-redux";
import {createProduct, deleteProduct, getProduct} from "./actions";
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    TextField,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MediaCardAdmin from "./components/MediaCardAdmin";
import LoadingComponent from "../../components/Loading";
import AddElement from "./components/AddElement";



    function Admin(props) {

    const [newProduct ,setNewProduct] = useState({});
    const [previewImage, setPreviewImage] = useState('')
    const {loading, products ,dispatchCreateProduct,dispatchDeleteProduct} =props
    const[image , setImage ] = useState(null);

        const handleChangeImage = image =>{
                setImage(image);
                setPreviewImage(image)
        }
    const handleCreateProduct = () => {
        dispatchCreateProduct({...newProduct, image: image[0]});
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
    if(loading)
    {
        return(
            <Container component="main" maxWidth="xs">
                <LoadingComponent/>
            </Container>

        )
    }
    return (
        <Box marginTop={2}>
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Add elements to the database
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: '#008CBA' }}>
                <AddIcon/>
            </Avatar>
                <AddElement previewImage={previewImage}  onChangeProduct={handleChangeProduct} onChangeImage={handleChangeImage} onSaveProduct={handleCreateProduct}/>
                <Box>
                    {products.map(product => {
                        return <MediaCardAdmin
                            key={product.id}
                            post={product}
                            onDelete={dispatchDeleteProduct}
                        />
                    })}

            </Box>
        </Container>
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        ...state.admin,
    };
}

const mapDispatchToProps= {
    dispatchGetProducts:getProduct,
    dispatchCreateProduct:createProduct,
    dispatchDeleteProduct : deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
