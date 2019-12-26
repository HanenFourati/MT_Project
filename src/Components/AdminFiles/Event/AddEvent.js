import React,{Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import '../../CssFiles/AddEvent.css'
class AddEvent extends Component{
  constructor () {
    super()
    this.onAddEvent = this.onAddEvent.bind(this)
    this.onChange  = this.onChange.bind(this)
  }
  onAddEvent = () => {
    axios.post('/Administration/'+this.props.adminid+'/events/add', this.state)
      .then(() => {
        this.props.onAddEventReducerAction(this.state) 
        this.props.history.push(`/Administration/${this.props.adminid}/events`)
        })
      .catch(err => {alert(err)})
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
    render(){
        return(
          <div>
            <form className="addevent_model_style">
                <label for="title"><b>Title</b></label>
                <input type="text" placeholder="Enter title" name="title" required onChange={this.onChange}/>
                <label for="description"><b>Description</b></label>
                <input type="text" placeholder="Enter description" name="description" required onChange={this.onChange}/>
                <label for="video"><b>Video</b></label>
                <input type="text" placeholder="Enter video" name="video" required  onChange={this.onChange}/>
                <Link className="addevent_button_style" onClick={this.onAddEvent} to={`/Administration/${this.props.adminid}/events/add`}>Add</Link>
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
        onAddEventReducerAction: event => {
        dispatch({
          type: "ADD_EVENT",
          newEvent: event
        });
      }
    };
  };
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispacthToProps
  )(AddEvent))