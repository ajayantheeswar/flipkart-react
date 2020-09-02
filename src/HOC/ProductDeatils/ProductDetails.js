import React from 'react';

import Spinner from '../../Shared/Spinner/Spinner';

import ProductDetailsViewer from '../../ProductDetails/ProductDetails';
import Axios from 'axios';
 
class ProductDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            product : null,
            productFound : true
        }
    }

    loadProduct = () => {
        Axios
            .get(`http://localhost:3002/public/get-product/${this.props.match.params.productID}`)
            .then (response => {
                this.setState( (prevState) => {
                    return {
                        ...prevState,
                        product : response.data.product,
                        loading : false
                    }
                } )
            })
            .catch(err => {

                const productFound = err.response || err.response.data || err.respose.data.productNotFound || false;

                this.setState( (prevState) => {
                    return {
                        ...prevState,
                        product : null,
                        loading : false,
                        productFound : productFound
                    }
                } )
            })
    }

    render () {
        if(this.state.loading){
            return <Spinner />
        }

        if(this.state.product){
            return <ProductDetailsViewer product={this.state.product} />
        }

        if(!this.state.productFound) {
            return <p>Product Not Found</p>
        }
    }

    componentDidMount () {
        this.loadProduct()
    }
}

export default ProductDetails
