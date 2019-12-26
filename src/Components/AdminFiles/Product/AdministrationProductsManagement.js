import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import AddProductModel from './AddProductModel.js'
import AdministrationProductManagement from './AdministrationProductManagement.js'
class AdministrationProductsManagement extends Component {

    componentDidMount(){ 
        axios.get('/Administration/'+this.props.adminid+'/products')
        .then(res => this.props.initproductsList(res.data))
        .catch(error => {console.log(error)})
       } 
    render() {
        const {ProductsTable}=this.props
        return (
        <div id="products_list_decoration">
          <AddProductModel adminid={this.props.adminid}/>
          {ProductsTable.map((el,index)=><AdministrationProductManagement product={el} key={index} adminid={this.props.adminid}/>)}
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
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdministrationProductsManagement)