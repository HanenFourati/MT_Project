import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import newsletterphoto from '../../Images/newsletterphoto.jpg'
import '../CssFiles/NewsLetter.css'
class NewsLetter extends Component{
    constructor (props) {
        super(props)
        this.state = {
            Newsletter_input_Value: ''
        }
    }
    render () {
        return(
            <div className="newsLetter_style">
                <div className="newsLetter_style_partone">
                   <img src={newsletterphoto} id="NewsletterImage" alt=""/> 
                </div>
                <div className="newsLetter_style_parttwo">
                    <h3> SIGN UP FOR 10% OFF</h3>
                    <h3>YOUR FIRST PURCHASE OF 200DT</h3>
                    <p className="newsLetter_para_style_parttwo">Plus, you'll always be in the loop regarding promptions,</p>
                    <p className="newsLetter_para_style_parttwo">new arrivals and everything else about MAYAN Tailored</p>
                    <input className="newsLetter_input_field" type="text" placeholder="Enter your email" />
                    <Link className="newsLetter_button">Subscribe</Link>
                </div>
            </div>
        )
    }
}
export default NewsLetter