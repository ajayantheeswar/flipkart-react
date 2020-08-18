import React, { Component } from 'react';
import classes from './HomePage.module.css';

import Navbar from '../Navigation/Navbar/Navbar';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
        )
    }
}

export default HomePage;