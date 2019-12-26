function ProductReducer(state= [] , action){
    switch(action.type){
      case "ADD_PRODUCT": return state.concat(action.newProduct)//   case "AJOUTER": return (state.map((el,index)=> index===action._id ? (Object.create({_id:el._id , code:el.code , label: el.label.concat(action.label)})) : el)); //(Object.create({_id:el._id , code:el.code , label: el.label.concat(action.label)}))
      case "DELETE_PRODUCT": return (state.filter((el,index)=>index!==action._id));
      case "PRODUCT_EDIT": return (state.map((el,index)=> index===action._id ? (Object.create({_id:el._id , 
        name: action.name , img: action.img, price: action.price, 
        colors: action.colors, Tissue: action.Tissue, category: action.category, rating: action.rating})) : el)); 
      case "LOED_PRODUCT_LIST": return (state = action.products);
      case "LOED_PRODUCT": return (state = action.product);
      default:  return state;
    }
  }
      
  export default ProductReducer