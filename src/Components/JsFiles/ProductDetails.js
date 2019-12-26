import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {FaStar} from 'react-icons/fa'
import MakeOrderModel  from './MakeOrderModel.js'
import '../CssFiles/ProductDetails.css'
class ProductDetails extends Component {
  
    componentDidMount(){ 
        axios.get('/ShowRoom/'+this.props.id).then(res => this.props.initproduct(res.data))
        .catch(error => {console.log(error)});
    }
    // displayImages (table){
    //   var part=document.getElementById("display_product_images_style")
    //   let s=["imageone", "imagetwo", "imagethree", "imagefour", "imagefive"]
    //   let k=0
    //   for(var d in table)
    //    { 
    //      part.innerHTML+=`<img  src="${table[d]}"  alt="" id="${s[k]}"/>`
    //      k++
    //     } }
    render() {
        const {PDetails}=this.props
        return (
        <div className="product_information_style">
          <div id="display_product_colored_div_style">
            <p></p>
          </div>
          <div id="display_product_images_style"> 
            {/* {this.displayImages(PDetails.img)} */}
            <img  src={PDetails.img}  alt="" id="imageone"/>
          </div>
          <div id="display_product_details_style">
            <h2>{PDetails.name}</h2>
            <p><b>Price:</b> <span className="product_font_information_style">{PDetails.price}</span> DT</p>
            {/* <p> Availble colors: <span className="product_font_information_style">{PDetails.colors}</span> </p> */}
            <p><b>Tissue:</b> <span className="product_font_information_style">{PDetails.Tissue}</span> </p>
            <p><b>Cateegory:</b> <span className="product_font_information_style">{PDetails.category}</span> </p>
            <p style={{color: "yellow", fontSize: "40px"}}>{'★'.repeat(PDetails.rating)} 
             {'☆'.repeat(5-PDetails.rating)} </p>
            <MakeOrderModel productid={this.props.id} pdname={PDetails.name} pdimg={PDetails.img} pdprice={PDetails.price}/>
          </div>
        </div>
        );
    }
}
const mapStateToProps=(state)=>
{
  return { PDetails : state.ProductReducer} 
}
const mapDispatchToProps = dispatch => 
{
  return {
    initproduct: product => { 
    dispatch({
      type: "LOED_PRODUCT",  
      product
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)