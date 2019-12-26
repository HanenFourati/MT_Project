import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import AdministrationEventManagement from './AdministrationEventManagement.js'
import AddEventModel from './AddEventModel.js'
import '../../CssFiles/AdministrationEventsManagement.css'
class AdministrationEventsManagement extends Component {
    componentDidMount(){ 
        axios.get('/Administration/'+this.props.adminid+'/events').then(res => this.props.initeventsList(res.data))
        .catch(error => {console.log(error)});
       } 
    render() {
        const {EventsTable}=this.props
        return (
        <div className="events_list_decoration">
          <AddEventModel adminid={this.props.adminid}/>
          {EventsTable.map((el,index)=><AdministrationEventManagement adminid={this.props.adminid} event={el} key={index}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdministrationEventsManagement)