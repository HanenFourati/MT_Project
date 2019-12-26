import React, {Component} from 'react'
import Navbar from '../Components/JsFiles/Navbar.js'
import EventDetails from '../Components/JsFiles/EventDetails.js'
import Footer from '../Components/JsFiles/Footer.js'
class EventDetailsPage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <EventDetails  id={this.props.id}/>
            <Footer/>
        </div>
        );
    }
}

export default EventDetailsPage