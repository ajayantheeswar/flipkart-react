import React from 'react'
import classes from './ProductReviews.module.css';

import ReviewItem from '../../../Shared/ReviewsItem/ReviewItem';

const ProductReviews = props => {
    return (
        <div className={classes['prod-review-container']}>
            <div className={classes['prod-head']}>
                <h3>{'Product Ratings & Reviews '}</h3>
                <button>Rate This Product</button>
            </div>
            <ul>
                {props.reviews.map(review => <ReviewItem />)}
            </ul>
        </div>
    )
}

export default ProductReviews
