import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import AdministrationOrderManagement from './AdministrationOrderManagement'
// import AddOrderModel from './AddOrderModel.js'
class AdministrationOrdersManagement extends Component {
    componentDidMount(){ 
        axios.get('/Administration/'+this.props.adminid+'/orders').then(res => this.props.initordersList(res.data))
        .catch(error => {console.log(error)});
       } 
    render() {
        const {OrdersTable}=this.props
        return (
        <div style={{display: "flex", flexDirection: "column"}}>
          {/* <AddOrderModel  adminid={this.props.adminid}/> */}
            {OrdersTable.map((el,index)=><AdministrationOrderManagement order={el} key={index} adminid={this.props.adminid}/>)}
        </div>
        );
    }
}
const mapStateToProps=(state)=>
{
  return { OrdersTable : state.OrderReducer} 
}
const mapDispatchToProps = dispatch => 
{
  return {
    initordersList: orders => { 
    dispatch({
      type: "LOED_ORDERS_LIST",  
      orders
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdministrationOrdersManagement)