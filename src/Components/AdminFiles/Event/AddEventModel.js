import React,{Component} from 'react'
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'
import AddEvent from './AddEvent.js'

class AddEventModel extends Component{
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
                <button onClick={this.handleOpenModal} style={{backgroundColor: "whitesmoke", fontSize: "200px", height: "320px", width: "100%", color:  "white"}}>
                  +
                </button>
                <Modal isOpen={this.state.showModal}>
                   <button className="model_close_button_style" onClick={this.handleCloseModal}>
                       <FaTimes/>
                    </button>
                    <AddEvent adminid={this.props.adminid}/>
                </Modal>
         </div>
        )
    }

}
export default AddEventModel