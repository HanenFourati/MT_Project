import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import '../CssFiles/OurProducts.css'

const DisplayProducts = (props) =>
                                props.prodList.map((currentProduct, i) =>
                                <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                    <img className="product_image_decoration" src={currentProduct.img} alt={currentProduct.name} />
                                    </div>
                                    <div className="flip-box-back" style={{backgroundColor:  `#${Math.floor(Math.random()*16777215).toString(16)}`}}>
                                    <p>{currentProduct.name}</p>
                                    <p>{currentProduct.price} DT</p>
                                    <p>{currentProduct.category}</p>
                                    <Link to={`/ShowRoom/${currentProduct._id}`} style={{color: "white"}}>Details</Link>
                                    </div>
                                </div>
                                </div>
                                )
class ShowRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
        val: '',
        listproducts:  []
      }
}
    componentDidMount(){ 
        axios.get('/ShowRoom').then(res => {this.props.initproductsList(res.data)
          this.setState({
            listproducts:  this.props.ProductsTable
              })})
        .catch(error => {console.log(error)});
       } 
       filterproducts(val){
        this.setState({
          val: val
        })
      }
      getvisibleworker(){
        if (this.state.val=="")
        return this.state.listproducts
        else
        return this.state.listproducts.filter(
            el => el.category==this.state.val) 
       }
    render() {
        return (
        <div className="showroom_display_style">
            <button className="filter_buttons_style" onClick={() => this.filterproducts("")}>All</button>
            <button className="filter_buttons_style" onClick={() => this.filterproducts("Dress")}>Dress</button>
            <button className="filter_buttons_style" onClick={() => this.filterproducts("Skirt")}>Skirt</button>
            <button className="filter_buttons_style" onClick={() => this.filterproducts("Top")}>Top</button>
            <button className="filter_buttons_style" onClick={() => this.filterproducts("Coat")}>Coat</button>
            <div id="products_list_decoration">
              <DisplayProducts  prodList={this.getvisibleworker()} />
              {/* {this.getvisibleproducts(ProductsTable,"All")} */}
            </div>  
        </div>
        );
    }
}
const mapStateToProps=(state)=>
{
  return { ProductsTable : state.ProductReducer} 
}
const mapDispatchToProps = dispatch => 
{
  return {
    initproductsList: products => { 
    dispatch({
      type: "LOED_PRODUCT_LIST",  
      products
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowRoom)
