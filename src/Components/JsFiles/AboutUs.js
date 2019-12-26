import React from 'react'
import i1 from '../../Images/team_member_one.jpg'
import i2 from '../../Images/team_member_two.jpg'
import '../CssFiles/AboutUs.css'
const Information = [
{text: 'MAYAN Tailored is a glamorous, irreverent, and fun lifestyle brand for the decidedly fashionable, bringing modest style and attitude to girls all over the world. Embracing its tunisian heritage, Mayan Tailarod discovers the couture in the everyday and delivers an element of surprise in all of its designs. A global phenomenon, Mayanv Tailerod is identified as a casual luxury brand, offering apparel in the categories of women, girls and baby, color cosmetics, fashion accessories and gift & stationary.', image: i1 , display: 'row'},
{text:'MAYAN Tailored is available in our show room located in Sousse state in republic of Tunisia and We dilever throughout the country. In 2019 the brand introduced its first fragrance, MAYAN Tailored work on expanding all over the world. We are two girls with a Big Dream so, Here we go... Be with us ❤', image: i2 , display: 'row-reverse'}]
const AboutUs = () =>   <div className='aboutus_style'>
                          <div className='aboutus_title_style'><h2>WHAT DRIVES US</h2></div>
                           {Information.map((obj,i) => {
                               return (
                                 <div><p className='aboutus-paragraph_style'>{obj.text}</p></div>
                                      // <div className='aboutus_parts_style' style={{display: 'flex', flexDirection: `${obj.display}`, justifyContent: "space-evenly" }}>
                                      //    <p className='aboutus-paragraph_style'>{obj.text}</p>
                                      //    <img className='aboutus_image_style' src={obj.image} alt="" />
                                      //  </div>
                                       )
                           })}
                        <div style={{padding: "2%"}}><h4>Meet out team</h4>
                        <div className="aboutus_team_style">
                        <div><img src={i1} className='aboutus_image_style'/> <p>Co-Founder </p></div>
                        <div><img src={i2} className='aboutus_image_style'/> <p>Co-Founder </p></div>
                        </div>
                        </div> 
                        </div>
                    

export default AboutUs;