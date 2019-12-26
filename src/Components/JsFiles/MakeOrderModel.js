import React,{Component} from 'react'
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'
import MakeOrder from './MakeOrder.js'
import '../CssFiles/AddOrderModel.css'
class MakeOrderModel extends Component{
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
                <button onClick={this.handleOpenModal} className="addordermodel_button_style">
                  Make Order
                </button>
                <Modal isOpen={this.state.showModal}>
                   <button className="model_close_button_style" onClick={this.handleCloseModal}>
                       <FaTimes/>
                    </button>
                    <MakeOrder productid={this.props.productid} pdprice={this.props.pdprice} pdname={this.props.pdname} pdimg={this.props.pdimg}/>
                </Modal>
         </div>
        )
    }

}
export default MakeOrderModel