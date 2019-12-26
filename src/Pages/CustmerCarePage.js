import React, {Component} from 'react';
import Navbar from '../Components/JsFiles/Navbar.js'
import CustmerCareTable from '../Components/JsFiles/CustmerCareTable.js'
import Footer from '../Components/JsFiles/Footer.js'
class CustmerCarePage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <CustmerCareTable/>
            <Footer/>
        </div>
        );
    }
}

export default CustmerCarePage;
