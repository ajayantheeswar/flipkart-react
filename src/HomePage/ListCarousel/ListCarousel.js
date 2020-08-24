import React from 'react'
import classes from './ListCarousel.module.css';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListThumbnail from './ListThumbnail/ListThumbnail';

const ListCarousel = props => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div className={classes['list-carousel']}>
            <div className={classes['car-sec-head']}>
                <p>{props.title || 'Deals of the day'}</p>
                <button>View All</button>
            </div>
            <Slider {...settings} arrows={true}>
                <ListThumbnail />
                <ListThumbnail />
                <ListThumbnail />
                <ListThumbnail />
                <ListThumbnail />
                <ListThumbnail />
                <ListThumbnail />
                <ListThumbnail />
                <ListThumbnail />
            </Slider>
        </div>
    )
}

export default ListCarousel
