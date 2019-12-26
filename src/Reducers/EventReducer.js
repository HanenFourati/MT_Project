function EventReducer(state= [] , action){
    switch(action.type){
      case "ADD_EVENT": return state.concat(action.newEvent)
      case "DELETE_EVENT": return (state.filter((el,index)=>index!==action._id));
      case "EVENT_EDIT": return (state.map((el,index)=> index===action._id ? (Object.create({_id:el._id, title: action.title , description: action.description, video: action.video})) : el)); 
      case "LOED_EVENTS_LIST": return (state = action.events)
      case "LOED_EVENT": return (state = action.event)
     default:  return state;
    }
  }
      
  export default EventReducer