import React, {Component} from 'react';
import Navbar from '../Components/JsFiles/Navbar.js'
import Header from '../Components/JsFiles/Header.js'
import Footer from '../Components/JsFiles/Footer.js'
import NewsLetter from '../Components/JsFiles/NewsLetter.js'
import InstagramFeed from '../Components/JsFiles/InstagramFeed.js'
class HomePage extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <Header/>
            <InstagramFeed/>
            <NewsLetter/>
            <Footer/>
        </div>
        );
    }
}

export default HomePage;

