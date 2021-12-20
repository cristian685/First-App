import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getProduct} from "./actions";



function Products(props) {
 console.log("props",props)
    const {
     loading,
        products
    } =props

    useEffect(() => {
        props.dispatchSetProducts()
        ;
    },[] );
    if(loading)
    {
        return <div>Loading...</div>
    }
    return <div >
        {
            products.map( product =>{
                return(
                <div key={product.id}>
                    {product?.name}
                </div>
                )
            })
        }
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
