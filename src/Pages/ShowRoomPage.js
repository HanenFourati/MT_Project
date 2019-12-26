import React, {Component} from 'react'
import Navbar from '../Components/JsFiles/Navbar.js'
import ShowRoom from '../Components/JsFiles/ShowRoom.js'
import Footer from '../Components/JsFiles/Footer.js'
class ShowRoomPage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <ShowRoom/>
            <Footer/>
        </div>
        );
    }
}

export default ShowRoomPage;