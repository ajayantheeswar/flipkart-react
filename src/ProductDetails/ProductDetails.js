import React from 'react';
import classes from './ProductDetails.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductInfo from './ProductInfo/ProductInfo';


const ProductDetails = () => {
    return (
        <div className={classes['product-details-container']}>
            <div className={classes['product-act-sec']} >
                <ProductPreview />
                <ProductInfo />
            </div>
        </div>
    )
}

export default ProductDetails