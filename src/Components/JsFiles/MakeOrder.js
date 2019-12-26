import React,{Component} from 'react'
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import '../CssFiles/AddOrderModel.css'
class MakeOrder extends Component{
  constructor () {
    super()
    this.onAddOrder = this.onAddOrder.bind(this)
    this.onChange  = this.onChange.bind(this)
  }
  onAddOrder = () => {
    axios.post('/ShowRoom/'+this.props.productid+'/makeorder', this.state)
      .then(() => {
        this.props.onAddOrderReducerAction(this.state)
        console.log(this.state)
        this.props.history.push(`/ShowRoom/${this.props.productid}`)
        })
      .catch(err => {alert(err)})
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.setState({
      productid: this.props.productid,
      pdname: this.props.pdname,
      pdprice: this.props.pdprice,
      pdimg: this.props.pdimg
    })
  }
  render(){
      return(
        <div className="makeorder_model_style">
          <img id="product_image_style" src={this.props.pdimg} /> 
          <form className="addorder_model_style">
              <label for="firstname"><b>First Name</b></label>
              <input type="text" placeholder="Enter your first name" name="firstname" required onChange={this.onChange}/>
              <label for="lastname"><b>Last Name</b></label>
              <input type="text" placeholder="Enter your  last name" name="lastname" required onChange={this.onChange}/>
              <label for="address"><b>Address</b></label>
              <input type="text" placeholder="Enter your  last name" name="address" required onChange={this.onChange}/>
              <label for="email"><b>Email Address</b></label>
              <input type="text" placeholder="Enter your e-mail address" name="email" required onChange={this.onChange}/>
              <label for="phone"><b>Phone Number</b></label>
              <input type="text" placeholder="Enter mobiel phone number" name="phone" required onChange={this.onChange}/>
              <label for="size"><b>Choose your size:</b></label> &nbsp;
              <select name="size" onChange={this.onChange} >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
              </select> <br/>
              <label for="quantity"><b>Quantity</b></label>
              <input type="text" placeholder="Enter Quantity" name="quantity" required onChange={this.onChange}/>
              <label for="color"><b>Pick Color</b></label> &nbsp;
              <input type="color" name="color" onChange={this.onChange} placeholder="#e66465"/> <br/><br/><br/>
              <Link className="addorder_button_style" onClick={this.onAddOrder} to={'/ShowRoom/'+this.props.productid+'/makeorder'}>Add</Link>
          </form>
       </div>
      )
    }

}
const mapStateToProps = state => {
    return {}
  };
  
  const mapDispacthToProps = dispatch => {
    return {
        onAddOrderReducerAction: order => {
        dispatch({
          type: "ADD_ORDER",
          newOrder: order
        });
      }
    };
  };
  
  export default  withRouter(connect(
    mapStateToProps,
    mapDispacthToProps
  )(MakeOrder))