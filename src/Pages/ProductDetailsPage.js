import React, {Component} from 'react'
import Navbar from '../Components/JsFiles/Navbar.js'
import ProductDetails from '../Components/JsFiles/ProductDetails.js'
import Footer from '../Components/JsFiles/Footer.js'
class ProductDetailsPage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <ProductDetails  id={this.props.id}/>
            <Footer/>
        </div>
        );
    }
}

export default ProductDetailsPage;