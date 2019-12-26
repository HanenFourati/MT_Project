import React, {Component} from 'react';
import Navbar from '../Components/JsFiles/Navbar.js'
import AboutUs from '../Components/JsFiles/AboutUs.js'
import Footer from '../Components/JsFiles/Footer.js'
class AboutUsPage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <AboutUs/>
            <Footer/>
        </div>
        );
    }
}

export default AboutUsPage;

