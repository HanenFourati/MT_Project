import React, { Component } from "react"
import { withRouter } from 'react-router'
import axios from "axios"
import '../CssFiles/LogIn.css'
class AdministrationLogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: "",
          password: "",
          userstable: []
        }
    
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
      componentDidMount(){ 
        axios.get('/Administration').then(res =>
          this.setState({
            userstable: res.data
          }))
        .catch(error => {console.log(error)});
       } 
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit() {
        let error=document.getElementById("error_message")
       if(this.state.username != "" && this.state.password != "")
       {this.state.userstable.map((currentele)=> 
       (currentele.username===this.state.username && currentele.password===this.state.password) ? 
       this.props.history.push(`/Administration/${currentele._id}`) : error.innerHTML="username or password incorrect !" )
       }
       else
       {error.innerHTML="username or password field are empty !"}
      }
    
      render() {
        return (
          <div className="login-card">
            <h1>Log-in</h1>
            <input type="text" name="username" placeholder="Username" className="login_input_style" value={this.state.username} onChange={this.handleChange} required />
            <input type="password" name="password" placeholder="Password"  className="login_input_style"value={this.state.password} onChange={this.handleChange} required />
            <button onClick={this.handleSubmit} className="login_button_style">Login</button>
            <p id="error_message"></p>
          </div>
        )
      }

}

export default withRouter(AdministrationLogIn)
