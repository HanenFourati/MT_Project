function OrderReducer(state= [] , action){
    switch(action.type){
      case "ADD_ORDER": return state.concat(action.newOrder)
      case "DELETE_ORDER": return (state.filter((el,index)=>index!==action._id));
      case "ORDER_EDIT": return (state.map((el,index)=> index===action._id ? (Object.create({_id:el._id, orderNumber: action.orderNumber, orderitems: action.orderitems})) : el)); 
      case "LOED_ORDERS_LIST": return (state = action.orders)
      case "LOED_ORDER": return (state = action.order)
     default:  return state;
    }
  }
      
  export default OrderReducer