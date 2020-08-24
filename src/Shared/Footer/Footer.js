import React from 'react';
import classes from './Footer.module.css';
import Images from '../../Assets/Images';

const footerValues = [
    {
        title : 'sell on flipcart',
        image : Images.Gsuitecase
    },
    {
        title : 'advertise',
        image : Images.star
    },
    {
        title : 'gift card',
        image : Images.giftcards
    },
    {
        title : 'help center',
        image : Images.help
    },
]

const Footer = props => {
    return (
        <div className={classes['footer']}>
            {footerValues.map(ele =>(
                <div className={classes['footer-item']}>
                    <img src={ele.image} alt={ele.title}/> 
                    <p>{ele.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Footer
