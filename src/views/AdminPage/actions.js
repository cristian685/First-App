import {SET_PRODUCTS , IS_LOADING , SET_RESERVATIONS} from"./constants"
import {
    addProductService,
    fetchProductsService,
    deleteProductService,
    uploadImagesFirebase,
    updateProductFbService,
    fetchReservationService,
    fetchReservationsById,
    updateReservationFbService,
    deleteReservationService, deleteImageService, deleteIdOfImage, updateImageIdsFbService, updateDetailsFbService
} from "../../services/firebaseService";
import  {openSnackbar} from "../../components/SnackbarCustom/actions"



export const getProduct = () => {
    return async(dispatch) => {
        dispatch(isLoading(true))
        try {
            const products = await fetchProductsService()
            dispatch( {
                type: SET_PRODUCTS,
                products: products
            })
        }
        catch(errors) {
            console.log(errors)
        }
        dispatch(isLoading(false))
    }

}
export const isLoading= (loading) => {
    return{type: IS_LOADING , loading:loading}
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            await deleteProductService(id);
            dispatch(getProduct())
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}
export const deleteImageId = (id) => {
    debugger;
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            await deleteIdOfImage(id);
            dispatch(getProduct())
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}

export const deleteImageById = ( idTeren) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            await deleteImageService(idTeren);
            debugger;
            dispatch(getProduct())
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}
export const deleteReservation = (id , idTeren) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            await deleteReservationService(id);
            dispatch(getReservationsById(idTeren))
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}
// export const uploadProductImage = (id, image) => {
//     return async(dispatch) => {
//         dispatch(isLoading(true))
//         try{
//             await uploadImagesFirebase(image,id);
//             dispatch(isLoading(false));
//         }
//         catch(errors) {
//             dispatch(openSnackbar('error', errors.message))
//             console.log(errors)
//         }
//         dispatch(isLoading(false))
//     }
// }

export const createProduct = (product) => {
    return async(dispatch) => {
        dispatch(isLoading(true))
        try{
            const {image, ...other} = product;
            console.log("ProductImageType", image)
            const imageIds=image.map(item=>{
                return item.id
            })
            const responseProductId = await addProductService({...other , imageIds});
            debugger;
            if (responseProductId  && image)
            {
                image.map(async (item) =>
                    await uploadImagesFirebase(item, responseProductId)
                )}
            debugger;
                dispatch(getProduct())
                dispatch(openSnackbar('success', 'S-a creat produsul cu succes'))
        }
        catch(error) {

            dispatch(openSnackbar('error', error.message))
        }
        dispatch(isLoading(false))
    }
}
export const updateImageIds = (id, image) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        debugger;
        try {
            console.log("ProductImageType", image)
            const imageIds=image.map(item=>{
                return item.id
            })
            const responseProductId = await updateImageIdsFbService(id  ,imageIds);
            debugger;
            if (responseProductId  && image)
            debugger;
            {
                image.map(async (item) =>
                    await uploadImagesFirebase(item, id)
                )}
            debugger;
            dispatch(getProduct())
            dispatch(openSnackbar('success', 'Elementul a fost editat cu succes'))
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}
export const updateProduct = (product) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            const {id,...other}=product
            console.log(other)
            await updateProductFbService(id ,other);
            dispatch(getProduct())
            dispatch(openSnackbar('success', 'Elementul a fost editat cu succes'))
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}
export const updateDetails = (id ,details) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        debugger;
        try {
            console.log(details ,id)
            await updateDetailsFbService(id ,details);
            debugger;
            dispatch(getProduct())
            dispatch(openSnackbar('success', 'Elementul a fost editat cu succes'))
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}
export const updateReservation = (reservation , idTeren) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            const {id,...other}=reservation
            console.log(other)
            await updateReservationFbService(id ,other);
            dispatch(getReservationsById(idTeren))
            dispatch(openSnackbar('success', 'Elementul a fost editat cu succes'))
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))
    }
}
export const getReservationsById = (idTeren) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        try {

            const reservations = await fetchReservationsById(idTeren)
            dispatch({
                type: SET_RESERVATIONS,
                reservations: reservations
            })
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))
    }
}