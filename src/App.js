import React from "react";
import "./App.css";
import Navbar from './Navigation/Navbar/Navbar';
import CatagoriesBar from './Navigation/CatagoriesBar/CatagoriesBar';
import Footer from './Shared/Footer/Footer';
/* import Search from "./Search/Search"; */
import {publicUserRoutes} from './routes';

import { Switch, Route } from "react-router";

import { connect } from 'react-redux';
import * as AuthActions from  './Store/Actions/Auth';

class App extends React.Component {
	
	render(){
		return (
			<div className="App">
				<React.Fragment>
					<Navbar/>
					<CatagoriesBar />
					<Switch>
						{publicUserRoutes}
					</Switch>
					<Footer />
				</React.Fragment>
			</div>
		);
	}

	componentDidMount(){
		this.props.checkAuth()
	}
}

const mapPropsToState = state => {
	return {
	  isAuth : state.auth.auth
	}
  }
  
  const mapPropsToDisPatch = dispatch => {
	return {
	  checkAuth : () => dispatch(AuthActions.AuthCheckAsync()),
	  logout : () => dispatch(AuthActions.AuthLogout())
	}
  }
  

  export default connect(mapPropsToState,mapPropsToDisPatch)(App);
