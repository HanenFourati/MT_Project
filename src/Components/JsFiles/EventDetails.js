import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class EventDetails extends Component {

    componentDidMount(){ 
        axios.get('/Events/'+this.props.id).then(res => this.props.initevent(res.data))
        .catch(error => {console.log(error)});
    }
    render() {
        const {EDetails}=this.props
        return (
        <div>
            <p>{EDetails.id}</p>
           <p>{EDetails.title}</p>
           <iframe src={EDetails.video} frameborder="0"></iframe>
        </div>
        );
    }
}
const mapStateToProps=(state)=>
{
  return { EDetails : state.EventReducer} 
}
const mapDispatchToProps = dispatch => 
{
  return {
    initevent: event => { 
    dispatch({
      type: "LOED_EVENT",  
      event
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);