import React from 'react'
import {Link} from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'
import fifth from '../../Images/21.jpg'
import settt from '../../Images/22.jpg'
import third from '../../Images/23.jpg'
import sett from '../../Images/24.jpg'
import '../CssFiles/InstagramFeed.css'
const thePhotos = [
    {
      photoSource: settt, liksNb: "231"
     },
     {
      photoSource: sett, liksNb: "342"
     },
     {
      photoSource: third, liksNb: "95"
     },
     {
      photoSource: fifth, liksNb: "144"
     }
  ]
let Photo = (props) => 
            <div className="instagramfeed_card_style">
                <img className="instagramfeed_card_photo_style" src={props.photo.photoSource} alt=""/>
              <div>
                <FaHeart className="instagramfeed_card_heart_style"/> 
                <span style={{color: 'gray', fontStyle: 'italic'}}>{props.photo.liksNb}</span>
              </div>              
            </div>          
const Photos = (props) =>
            props.photosList.map((currentPhoto, i) =>
            <div key={i}>
              <Photo photo={currentPhoto} />
            </div>
            )
const InstagramFeed = () =>
          <div className="instagramfeed_style">
            <div  className="instagramfeed_style_partone">
              <p>#MayanTailored</p>
              <Link to="/">Follow us on Instagram</Link>
            </div>
            <div className="instagramfeed_style_parttwo">
              <Photos photosList={thePhotos} />
            </div>
         </div> 

export default InstagramFeed;