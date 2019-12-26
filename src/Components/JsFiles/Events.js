import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../CssFiles/Event.css'
//let EventTable=[{title: "title", description: "Our summer 2019 collection is now relesed", video: welcomevideo}, {title: "title", description: "Opening of our showroom", video: welcomevideo}]
class Events extends Component {

    componentDidMount(){ 
        axios.get('/Events').then(res => this.props.initeventsList(res.data))
        .catch(error => {console.log(error)});
       } 
    render() {
        const {EventsTable}=this.props
        return (
          <div className="eventss_list_decoration">
            {EventsTable.map((currentevent,i) => 
                                               <div className="eventss_style">  
                                                 <iframe src={currentevent.video} frameborder="0"></iframe>
                                                 <div className="eventss_information_style">
                                                   <h5>{currentevent.title}</h5>
                                                   <p>{currentevent.description}</p>
                                                 </div>
                                               </div>
                            )
            }
            </div>
            

        );
    }
}
const mapStateToProps=(state)=>
{
  return { EventsTable : state.EventReducer} 
}
const mapDispatchToProps = dispatch => 
{
  return {
    initeventsList: events => { 
    dispatch({
      type: "LOED_EVENTS_LIST",  
      events
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)