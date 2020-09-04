import React from "react";
import "./App.css";
import Navbar from './Navigation/Navbar/Navbar';
import CatagoriesBar from './Navigation/CatagoriesBar/CatagoriesBar';
import Footer from './Shared/Footer/Footer';
/* import Search from "./Search/Search"; */
import {publicRoutes,userProtectedRoutes,adminProtectedRoutes} from './routes';

import { Switch, Route } from "react-router";

import { connect } from 'react-redux';
import * as AuthActions from  './Store/Actions/Auth';
import Spinner from "./Shared/Spinner/Spinner";

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			mounted : false
		}
	}
	
	render(){

		if(!this.state.mounted){
			return <Spinner />
		}

		return (
			<div className="App">
				<React.Fragment>
					<Navbar/>
					{this.props.isAdmin ? null : <CatagoriesBar /> }
					<Switch>
						<Route path='/logout' render={(props) => {this.props.logout(); props.history.replace('/'); return null }} />
						{(() => {
							if(this.props.isAuth && this.props.isAdmin){
								return [...adminProtectedRoutes]
								
							}else if(this.props.isAuth && !this.props.isAdmin){
								return [...userProtectedRoutes,...publicRoutes,]
							}else if (!this.props.isAuth){
								return [...publicRoutes]
							}
						})()}
					</Switch>
					<Footer />
				</React.Fragment>
			</div>
		);
	}

	componentDidMount(){
		this.props.checkAuth();
		this.setState({
			mounted :true
		})		
	}
}

const mapPropsToState = state => {
	return {
	  isAuth : state.auth.auth,
	  isAdmin : state.auth.isAdmin
	}
  }
  
  const mapPropsToDisPatch = dispatch => {
	return {
	  checkAuth : () => dispatch(AuthActions.AuthCheckAsync()),
	  logout : () => dispatch(AuthActions.AuthLogout())
	}
  }
  

  export default connect(mapPropsToState,mapPropsToDisPatch)(App);
