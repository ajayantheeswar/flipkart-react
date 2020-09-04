import React from 'react';
import classes from './ProductDetails.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductInfo from './ProductInfo/ProductInfo';
import { withRouter } from 'react-router';
import ProductSpecifications from './ProductInfo/ProductSpecifications/ProductSpecifications';



const ProductDetails = props => {
    console.log(props)
    return (
        <div className={classes['product-details-container']}>
            <div className={classes['product-act-sec']} >
                <ProductPreview product={props.product} isAuth={props.isAuth} />
                <ProductInfo {...props.product} />
            </div>
        </div>
    )
}


export default withRouter(ProductDetails)
