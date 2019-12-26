import React,{Component} from 'react'
import {Link,withRouter  } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import '../../CssFiles/AddProduct.css'
class AddProduct extends Component{
  constructor () {
    super()
    this.onAddProduct = this.onAddProduct.bind(this)
    this.onChange  = this.onChange.bind(this)
  }
  onAddProduct = () => {
    axios.post('/Administration/'+this.props.adminid+'/products/add', this.state)
      .then(() => {this.props.onAddProductReducerAction(this.state)
        this.props.history.push(`/Administration/${this.props.adminid}/products`)
        })
      .catch(err => {alert(err)})
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
    render(){
      console.log(this.state)
      console.log(this.props.adminid)
        return(
          <div>
              <form className="addproduct_model_style">
                  <label for="name"><b>Name</b></label>
                  <input type="text" placeholder="Enter Name" name="name" required onChange={this.onChange}/>
                  <label for="image"><b>Image</b></label>
                  <input type="text" placeholder="Enter Image" name="image" required onChange={this.onChange}/>
                  <label for="price"><b>Price </b></label>
                  <input type="text" placeholder="Enter Price" name="price" required  onChange={this.onChange}/>
                  <label for="colors"><b>Colors </b></label>
                  <input type="text" placeholder="Enter colors" name="colors" required onChange={this.onChange}/>
                  <label for="Tissue"><b>Tissue</b></label>
                  <input type="text" placeholder="Enter Tissue" name="Tissue" required onChange={this.onChange}/>
                  <label for="category"><b>Category</b></label>
                  <input type="text" placeholder="Enter category" name="category" required onChange={this.onChange}/>
                  <label for="rating"><b>Rating</b></label>
                  <input type="text" placeholder="Enter rating" name="rating" required onChange={this.onChange}/>
                  <Link className="addproduct_button_style" onClick={this.onAddProduct} to={`/Administration/${this.props.adminid}/products/add`}>Add</Link>
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
      onAddProductReducerAction: product => {
        dispatch({
          type: "ADD_PRODUCT",
          newProduct: product
        });
      }
    };
  };
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispacthToProps
  )(AddProduct))