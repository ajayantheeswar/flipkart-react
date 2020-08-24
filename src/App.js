import React from "react";
import "./App.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import Navbar from './Navigation/Navbar/Navbar';
import CatagoriesBar from './Navigation/CatagoriesBar/CatagoriesBar';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
	<div className="App">
		<React.Fragment>
			<Navbar/>
			<CatagoriesBar />
				<ProductDetails />
			<Footer />
		</React.Fragment>
		
	</div>
  );
}

export default App;
