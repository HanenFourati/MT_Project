import React,{Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

class AddOrder extends Component{
  constructor () {
    super()
    this.onAddOrder = this.onAddOrder.bind(this)
    this.onChange  = this.onChange.bind(this)
  }
  onAddOrder = () => {
    axios.post('/Administration/'+this.props.adminid+'/orders/add', this.state)
      .then(() => {this.props.onAddOrderReducerAction(this.state)
        this.props.history.push(`/Administration/${this.props.adminid}/orders`)
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
                        <form>
                            <label for="orderNumber"><b>orderNumber</b></label>
                            <input type="text" placeholder="Enter orderNumber" name="orderNumber" required onChange={this.onChange}/>
                            <label for="orderitems"><b>orderitems</b></label>
                            <input type="text" placeholder="Enter orderitems" name="orderitems" required onChange={this.onChange}/>
                            <Link onClick={this.onAddOrder} to={`/Administration/${this.props.adminid}/orders/add`}>Add</Link>
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
        onAddOrderReducerAction: order => {
        dispatch({
          type: "ADD_ORDER",
          newOrder: order
        });
      }
    };
  };
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispacthToProps
  )(AddOrder))