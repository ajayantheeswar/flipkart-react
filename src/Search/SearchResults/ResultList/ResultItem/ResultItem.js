import React from 'react';
import classes from './ResultItem.module.css';

import Images from '../../../../Assets/Images';

import {getReviewColor} from "../../../../Shared/Utils/utils";

import ProductHighlights from '../../../../ProductDetails/ProductInfo/ProductHignlights/ProductHighlights';
import { withRouter } from 'react-router';

const ResultItem = props => {
    const {product} = props
    return (
        <div className={classes['result-item']} onClick={ () => props.history.push('/'+product._id)}>
            <div className={classes['prod-pic']}>
                <img src={product.imageURLs[0] || Images.NoImg} alt='im' />
            </div>
            <div className={classes['prod-details']}>
                <div>
                    <h4>{product.productName || 'Samsung Galaxy A51 (Prism Crush Black, 128 GB)  (8 GB RAM)'}</h4>
                </div>
                <div className={classes['review-face-value']}  >
                    <p style={{backgroundColor : getReviewColor(props.reviewValue || 4.44)}}>{props.reviewValue ? props.reviewValue+'★' : '4.44 ★'}</p>
                    <p className={classes['reviewsc']}>{ `${props.reviews || 23} Reviews & ${props.rating || 32} Ratings` }</p>
                    <img src={Images.fassure} alt= "img" /> 
                </div>
                <ProductHighlights hideHead highlights={product.highlights} />
            </div>
            <div className={classes['price']} >
                    <p className={classes['current-price']}>{'₹ ' + (product.pricing.currentPrice || '25000')}</p>
                    {product.pricing.originalPrice ? <p className={classes['original-price']}>{ '₹ ' + (props.originalPrice || '29000')}</p> : null}
                    {product.pricing.originalPrice ? <p className={classes['offer']}>{(props.offer || '13%') + '  Offer'}</p>: null}
            </div>
        </div>
    )
}

export default withRouter(ResultItem)
