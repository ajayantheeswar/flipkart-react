import React from 'react'
import classes from './ProductInfo.module.css'
import Images from '../../Assets/Images';
import ProductHighlights from './ProductHignlights/ProductHighlights';
import ProductSpecifications from './ProductSpecifications/ProductSpecifications';
import ProductReviews from './ProductReviews/ProductReviews';


const getReviewColor = value => {
    value = +value;
    
    if (value > 3.5){
        return 'Green';
    } else if (value > 2.5) {
        return 'Yellow'
    }else{
        return 'Red'
    }

}


const ProductInfo = props => {

    return (
        <div className={classes['product-info']}>
             <div>
                <h3>{props.productName || 'Samsung Galaxy A51 (Prism Crush Black, 128 GB)  (8 GB RAM)'}</h3>
             </div>
             <div className={classes['head-review']} >
                <div className={classes['review-face-value']}  >
                    <p style={{backgroundColor : getReviewColor(props.reviewValue || 4.44)}}>{props.reviewValue ? props.reviewValue+'★' : '4.44 ★'}</p>
                    <p className={classes['reviewsc']}>{ `${props.reviews || 23} Reviews & ${props.rating || 32} Ratings` }</p>
                    <img src={Images.fassure} alt= "img" /> 
                </div>
                <div className={classes['price']} >
                    <p className={classes['current-price']}>{'₹ ' + (props.currentPrice || '25000')}</p>
                    <p className={classes['original-price']}>{ '₹ ' + (props.originalPrice || '29000')}</p>
                    <p className={classes['offer']}>{(props.offer || '13%') + '  Offer'}</p>
                </div>
                <div className={classes['description']}>
                    <p>Description</p>
                    <p>{props.description || 'NA '}</p>
                </div>
                <ProductHighlights />
             </div>
             <ProductSpecifications />
             <ProductReviews />
        </div>
    )
}

export default ProductInfo
