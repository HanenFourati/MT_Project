import React, {Component} from 'react'
import Navbar from '../Components/JsFiles/Navbar.js'
import Events from '../Components/JsFiles/Events'
import Footer from '../Components/JsFiles/Footer.js'
class EventsPage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <Events/>
            <Footer/>
        </div>
        );
    }
}

export default EventsPage;
