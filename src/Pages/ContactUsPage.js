import React, {Component} from 'react';
import Navbar from '../Components/JsFiles/Navbar.js'
import ContactUs from '../Components/JsFiles/ContactUs.js'
import Footer from '../Components/JsFiles/Footer.js'
class ContactUsPage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <ContactUs/>
            <Footer/>
        </div>
        );
    }
}

export default ContactUsPage;