import React from 'react';
import classes from './HeadCarousel.module.css';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Images from '../../Assets/Images'

const HeadCarousel = props => {
    return (
        <Carousel showThumbs={false} >
            <div className={classes['carsolel-item']}>
                <img src={Images.Car1} alt="c" /> 
            </div>
            <div>
                <img src={Images.Car2} alt="c" /> 
            </div>
            <div>
                <img src={Images.Car1} alt="c" /> 
            </div>
        </Carousel>
    )
}

export default HeadCarousel
