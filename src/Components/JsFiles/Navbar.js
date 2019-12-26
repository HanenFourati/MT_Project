import React,{Component} from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import i from '../../Images/ourlogo.png'
import '../CssFiles/Navbar.css'
const theButtons = [
    {
      value: 'Home', link: "/"
     },
     {
      value: 'About Us', link: "/AboutUs"
      },
     {
     value: 'Contact Us', link: "/ContactUs"
     },
     {
      value: 'Showroom', link: "/ShowRoom"
    },
    {
     value: 'Events', link: "/Events"
   }
  ]
  
let Button = (props) => 
            <li className="list_decoration">
              <Link to={props.button.link} className="link_decoration" >
                {props.button.value}
              </Link>
            </li>          
const Buttons = (props) =>
            props.buttonsList.map((currentButton, i) =>
            <ul className="links_list_decoration" key={i}>
              <Button button={currentButton} />
            </ul>
            )

class Navbar extends Component{
  constructor () {
    super();
    this.state = {
      showModal: false,
    }
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
    render(){
        return(
          <div>
            <div className="navBar">
                <h2 id="logo_style">MAYAN<span id="logo_text_style"> Tailored </span></h2>
                {/* <img src={i} id="logo_style"/> */}
                <button onClick={this.handleOpenModal} className="button_decoration">
                  <FaBars />
                </button>
            </div>
            <Modal isOpen={this.state.showModal}>
            <button className="model_close_button_style" onClick={this.handleCloseModal}><FaTimes/></button>
                <div className="Navs_display_direction">
                  <Buttons buttonsList={theButtons}/> 
                </div>

            </Modal>
         </div>
        )
    }

}
export default Navbar