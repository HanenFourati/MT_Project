import React from 'react'
import {Link} from 'react-router-dom'
import {FaRegQuestionCircle,FaRegEnvelope,FaPhone} from 'react-icons/fa'
import '../CssFiles/ContactUs.css'
const Information = [{title:"BUT FIRST:", text:"Check out our FAQs page first to expedite your resolution.", link:"VIEW FAQ PAGE", to: "/custmercare", icon: <FaRegQuestionCircle/>},
                    {title:"EMAIL US", text:"If you have any questions, concerns or suggestions, send us an email! we'll answer your inquiry in 24 hours.", link:"mayan_tailored@gmail.com", to:"/", icon: <FaRegEnvelope/>},
                    {title:"CONTACT CUSTOMER SERVICE", text:"We're happy to assist you in any way we can. We're available Mon-Sun, 6am-6pm PST.", link:"55337771", to:"/", icon: <FaPhone/>}]
const ContactUs = () => <div className="contactus_div_style">
                                <h1 className="title_para_style">Contact US</h1>
                                <p className="title_para_style">Hi Couturist! You can reach us by email and telephone. We're happy to assist you in any way we can.</p>
                                <div className='contactus_style'>
                                {Information.map((obj,i) => {
                                                                return (<div className='contactus_box_style' >
                                                                            <h3 className='contactus_title_style'>{obj.title}</h3>
                                                                            <p className='contactus_paragraph_style'>{obj.text}</p>
                                                                            <div className="contactus_link_style">
                                                                                <Link to={obj.to}>{obj.link} </Link>
                                                                                <span className="contactus_icon_style">{obj.icon}</span>
                                                                            </div>
                                                                        </div>)
                                                            })}
                                </div>
                        </div>
                    

export default ContactUs;