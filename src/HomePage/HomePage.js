import React, { Component } from 'react';
import classes from './HomePage.module.css';


import HeadCarousel from '../Shared/HeadCarousel/HeadCarousel';
import ListCarousel from './ListCarousel/ListCarousel';
import ProdBanner from './ProdBanner/ProdBanner';


class HomePage extends Component {
    render() {
        return (
            <React.Fragment>                
                <div className={classes['home-body']}>
                    <HeadCarousel />
                    <ListCarousel />
                    <ProdBanner />
                    <ListCarousel />
                    <ListCarousel />
                    <ListCarousel />
                    <ProdBanner />
                </div>
                
            </React.Fragment>
        )
    }
}

export default HomePage;