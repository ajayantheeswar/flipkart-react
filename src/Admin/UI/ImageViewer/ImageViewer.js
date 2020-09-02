import React from 'react'
import classes from './ImageViewer.module.css'
import ImageItem from './ImageItem/ImageItem'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
   
  };

const ImageViewer = props => {

    if(!props.images) {
        return null
    }

    return (
            <Slider {...settings} arrows={true}>
                {Array.from(props.images).map((img,index) => <ImageItem image={img} key={index} />)}
            </Slider>       
    )
}

export default ImageViewer
