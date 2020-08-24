import React from 'react'
import classes from './ProdBanner.module.css';
import Images from '../../Assets/Images';


const ProdBanner = props => {
    return (
        <div className={classes['prod-banner']}>
            <img src={props.images ? props.images[0] : Images.NoImg} alt='i' />
            <img src={props.images ? props.images[1] : Images.NoImg} alt='i' />
            <img src={props.images ? props.images[2] : Images.NoImg} alt='i' />
        </div>
    )
}

export default ProdBanner
