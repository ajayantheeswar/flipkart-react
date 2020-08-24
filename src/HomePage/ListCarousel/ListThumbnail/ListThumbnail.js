import React from 'react'
import classes from './ListThumbnail.module.css';
import Images from '../../../Assets/Images';

const ListThumbnail = props => {
    return (
        <div className={classes['list-thumbnail']}>
            <img src={props.image || Images.NoImg} alt='img' />
            <p className={classes['thumb-title']}>{props.title || "Headphones & Speakers"}</p>
            <p className={classes['thumb-rel-price']}>{props.relPrice || "Headphones & Speakers"}</p>
            <p className={classes['thumb-subtitle']}>{props.subTitle || "Sticker"}</p>
        </div>
    )
}

export default ListThumbnail
