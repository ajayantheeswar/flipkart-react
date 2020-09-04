import React, { Component } from 'react';
import classes from './HomePage.module.css';
import HeadCarousel from '../Shared/HeadCarousel/HeadCarousel';
import ListCarousel from './ListCarousel/ListCarousel';
import ProdBanner from './ProdBanner/ProdBanner';
import { HomePageConfig, PRODBANNER ,LISTCAROSEL } from './HomePageConfig';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>                
                <div className={classes['home-body']}>
                    <HeadCarousel />
                    {HomePageConfig.map( (item,i) => {
                        switch (item.Type) {
                            case PRODBANNER:
                                return <ProdBanner key={i} images={item.items} />
                            case LISTCAROSEL :
                                return <ListCarousel key={i} {...item}/>
                            default:
                                break;
                        }
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage;