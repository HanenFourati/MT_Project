import React,{Component} from 'react'
import '../CssFiles/Header.css'
class Header extends Component{
    render(){
        return(
          <div classNaame="Header_style">
              <div  className="Header_background_style"></div>
              <div className="centered">
                  <h2 >READY TO WEAR</h2>
                  <p className="typewriter">Winter collection 2019</p>
              </div>
         </div>  
        )
    }

}
export default Header;