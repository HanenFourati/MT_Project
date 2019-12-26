import React, {Component} from 'react';
import Navbar from '../Components/JsFiles/Navbar.js'
import AdministrationLogIn from '../Components/AdminFiles/AdministrationLogIn.js'
import Footer from '../Components/JsFiles/Footer.js'
class AdministrationLogInPage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <AdministrationLogIn/>
            <Footer/>
        </div>
        );
    }
}

export default AdministrationLogInPage;