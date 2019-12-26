import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link,withRouter } from 'react-router-dom'
import { FaPencilAlt,FaTimes} from 'react-icons/fa'
class AdministrationEventManagement extends Component {
    DeleteEvent = (_id) => 
    {
       axios.delete(`/Administration/${this.props.adminid}/events/delete/${_id}`)
       .then(() =>{ this.props.Delete(_id)
        this.props.history.push(`/Administration/${this.props.adminid}/events`)
      })
         .catch(err => alert(err));
     }
     EditEvent(_id,title,description, video) 
     { 
       axios.put(`/Administration/${this.props.adminid}/events/edit/${_id}`, 
       {
         title: title,
         description: description,
         video: video
       })
       .then(() => {
         this.props.Edit(_id,title,description, video)
         this.props.history.push(`/Administration/${this.props.adminid}/events`)
         })
       .catch(err => alert(err));
     }
    render() {
        const {event} =this.props
        return (
        <div>
            <div className="event_style">  
                <iframe src={event.video} frameborder="0"></iframe>
                <div className="event_information_style">
                  <h5>{event.title}</h5>
                  <p>{event.description}</p>
                  <Link to={`/Administration/${this.props.adminid}/events/delete/${event._id}`}>  
                    <button onClick={() => this.DeleteEvent(event._id)} className="event_button_style">Delete </button>
                  </Link>
                  <Link to={`/Administration/${this.props.adminid}/events/edit/${event._id}`}>
                      <button onClick={()=>this.EditEvent(event._id,
                      prompt('Edit event title', event.title), 
                      prompt('Editer event description', event.description), 
                      prompt('Editer event video', event.video))} className="event_button_style"> Update </button>
                  </Link>
                </div>
            </div> 
        </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>
{
  return {
    Delete:_id=> 
      {
        dispatch({
          type:'DELETE_EVENT', 
           _id 
        })
      },
      Edit: (_id,title,description, video) => 
      {
        dispatch({
          type:'EVENT_EDIT',
          _id,
          title: title,
          description: description,
          video: video
        })
      }

}
}

export default connect(null,mapDispatchToProps)(withRouter(AdministrationEventManagement))