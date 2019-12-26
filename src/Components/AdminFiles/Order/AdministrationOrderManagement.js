import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link,withRouter } from 'react-router-dom'
import '../../CssFiles/AdministrationOrderManagement.css'
class AdministrationOrderManagement extends Component {
    DeleteOrder = (_id) => 
    {
       axios.delete(`/Administration/${this.props.adminid}/orders/delete/${_id}`)
       .then(() =>{ this.props.Delete(_id)
        this.props.history.push(`/Administration/${this.props.adminid}/orders`)
      })
         .catch(err => alert(err));
     }
     EditOrder(_id,productid,pdname,pdimg,pdprice,firstname,lastname,address,email,phone,size,color,quantity) 
     { 
       axios.put(`/Administration/${this.props.adminid}/orders/edit/${_id}`, 
       { 
        productid: productid,
        pdname: pdname,
        pdimg: pdimg,
        pdprice: pdprice,
        firstname: firstname,
        lastname: lastname,
        address: address,
        email: email,
        phone: phone,
        size: size,
        color: color,
        quantity: quantity
       })
       .then(() => {
         this.props.Edit(_id,productid,pdname,pdimg,pdprice,firstname,lastname,address,email,phone,size,color,quantity)
         this.props.history.push(`/Administration/${this.props.adminid}/orders`)
         })
       .catch(err => alert(err));
     }
    render() {
        const {order} =this.props
        return (
        <div className="admin_order_decoration_style">
          <div className="admin_order_flip-box">
            <div className="admin_order_flip-box-inner">
                <div className="admin_order_flip-box-front">
                <img id="admin_order_product_image_decoration"  src={order.pdimg} alt={order.pdname} />
                </div>
                <div className="admin_order_flip-box-back" style={{backgroundColor:  `#${Math.floor(Math.random()*16777215).toString(16)}`}}>
                <h4>Product ID: </h4>
                <p>{order.productid}</p>
                <h4>Product Name: </h4>
                <p>{order.pdname}</p>
                <h4>Price Per Unite: </h4>
                <p>{order.pdprice} DT</p>
                </div>
            </div>
          </div>
          <div className="admin_order_information_decoration_style">
               <p> First Name: {order.firstname}</p>
               <p> Last Name: {order.lastname}</p>
               <p> Client Physical Address: {order.address}</p>
               <p> Client E-mail Address: {order.email}</p>
               <p> Client Phone Number:  {order.phone}</p>
               <p> Product Size: {order.size}</p>
               <p> Product Color: {order.color} <input type="color" name="color" value={order.color}/>  </p>
               
               <p> Quantity: {order.quantity} item(s)</p>
          </div> 
          <div className="admin_order_button_section_style" >
            <Link to={`/Administration/${this.props.adminid}/orders/delete/${order._id}`}>  
              <button onClick={() => this.DeleteOrder(order._id)} className="admin_order_button_style">Delete </button>
            </Link>
            <Link to={`/Administration/${this.props.adminid}/orders/edit/${order._id}`}>
              <button onClick={()=>this.EditOrder(order._id, order.productid,order.pdname,order.pdimg,order.pdprice,
              prompt('Edit client first name', order.firstname),
              prompt('Edit client last name', order.lastname),
              prompt('Edit client physical address', order.address),
              prompt('Edit client e-mail address', order.email), 
              prompt('Edit client mobiel number', order.phone), 
              prompt('Edit product size', order.size), 
              prompt('Edit product color', order.color), 
              prompt('Editer quantity', order.quantity))}className="admin_order_button_style"> Update </button>
            </Link>
          </div>
        </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>
{
  return {
    Delete:_id=> 
      {
        dispatch({
          type:'DELETE_ORDER', 
           _id 
        })
      },
      Edit: (_id,productid,pdname,pdimg,pdprice,firstname,lastname,address,email,phone,size,color,quantity) => 
      {
        dispatch({
          type:'ORDER_EDIT',
          _id,
          productid: productid,
          pdname: pdname,
          pdimg: pdimg,
          pdprice: pdprice,
          firstname: firstname,
          lastname: lastname,
          address: address,
          email: email,
          phone: phone,
          size: size,
          color: color,
          quantity: quantity
        })
      }

}
}

export default connect(null,mapDispatchToProps)(withRouter(AdministrationOrderManagement))