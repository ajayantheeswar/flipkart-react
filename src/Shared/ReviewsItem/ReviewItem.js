import React from 'react'
import classes from './ReviewItem.module.css';

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



const ReviewItem = props => {
    return (
        <div className={classes['review-item']}>
            <div className={classes['review-item-head']}>
                <p className={classes['review-item-value']} style={{backgroundColor : getReviewColor(props.reviewValue || 4.44)}}>{props.reviewValue ? props.reviewValue+'★' : '4.44 ★'}</p>
                <p className={classes['review-item--title']}>{props.reviewTitle || 'This Product is fantastic'}</p>
            </div>
            <div className={classes['review-item-desc']} >{ props.reviewDesc || "Didn't get the delivery in a day or two like others have got. Flipkart took full 5 days to deliver which is one day before their promised date, which is good.The watches came well packed and in working condition.They're good for the price. Look wise good and working well. Definitely a buy from my side. I haven't faced in problem in 3_4 days. Will update my review after a month or two. For now, go for it...!✌️"}</div>
            <div className={classes['review-user-info']}>
                <p className={classes['name']}>{props.name || 'Subash'}</p>
                <p className={classes['time']}>{props.time ||'2010 July'}</p>
            </div>
        </div>
    )
}

export default ReviewItem;
