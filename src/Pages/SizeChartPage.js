import React, {Component} from 'react';
import Navbar from '../Components/JsFiles/Navbar.js'
import ChartSizeTable from '../Components/JsFiles/ChartSizeTable.js'
import Footer from '../Components/JsFiles/Footer.js'
class SizeChartPage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <ChartSizeTable/>
            <Footer/>
        </div>
        );
    }
}

export default SizeChartPage;
