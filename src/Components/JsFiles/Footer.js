import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebookF,FaInstagram,FaPinterestSquare,FaTwitter} from "react-icons/fa";
import '../CssFiles/Footer.css'
const firstrow = [ { text: 'ABOUT US', to: '/AboutUs'},
                   { text: 'CUSTOMER CARE', to: '/CustmerCare'},
                   { text: 'SIZE CHART', to: '/ChartSize'}
                ]
const secondrow = [ { text: 'FAQ', to: '/CustmerCare'},
                    { text: 'Contact Us ', to: '/ContactUs'},
                    { text: 'Track Order', to: '/'},
                    { text: 'Shipping', to: '/CustmerCare'},
                    { text: 'Returns', to: '/CustmerCare'} 
                ] 
const socialmediaicons = [ { text: <FaFacebookF/>, to: 'https://www.facebook.com/mayan_tailored/'},
                           { text: <FaInstagram/>, to: 'https://www.instagram.com/mayan_tailored/'},
                           { text: <FaTwitter/>, to: 'https://www.twitter.com/mayan_tailored/'},
                           { text: <FaPinterestSquare/>, to: 'https://www.pinterest.com/mayan_tailored/'}
                        ]

const Footer = () =>
            <div className="Footer_style">
                <div className="Footer_row_style firstrow">
                    { firstrow.map(
                        (fsmobj, i) => {
                            return (
                                    <div style={{display: "inline"}}>
                                        <Link  to={fsmobj.to} key={i}>
                                            {fsmobj.text} 
                                        </Link> 
                                        { i < firstrow.length-1 ? '|' : ''}
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <div className="Footer_row_style">
                    {  secondrow.map(
                        (srmobj, i) => {
                            return (
                                    <Link  to={srmobj.to} key={i}>
                                        {srmobj.text} 
                                    </Link> 
                                )
                            }
                        )
                    }
                </div>
                <div className="Footer_row_style">
                    {  socialmediaicons.map(
                        (smobj, i) => {
                            return (
                                    <Link  to={smobj.to} key={i}>
                                        {smobj.text} 
                                    </Link> 
                                )
                            }
                        )
                    }   
                </div>   
                <div className="Footer_fourth_row_style"> 
                    <p>©2019 All Rights Reserved <Link style={{color: 'white', fontStyle: 'italic'}}>MAYAN Tailored</Link>  by <Link style={{color: 'white', fontStyle: 'italic'}}>Hanen FOURATI</Link></p>
                </div>         
            </div> 

export default Footer