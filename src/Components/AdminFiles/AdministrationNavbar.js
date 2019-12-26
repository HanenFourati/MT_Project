import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../CssFiles/AdministrationNavbar.css'
class AdministrationNavbar extends Component{
    constructor(props) {
        super(props)
        this.state = {
          _id: "",
          username: "",
          password: ""
        }
    }
    componentDidMount(){ 
        axios.get('/Administration/'+this.props.adminid).then(res => { this.setState({ ...res.data })
        console.log(this.state) 
        console.log(res.data)
    console.log(this.props.adminid)})
        .catch(error => {console.log(error)});
    }
    render(){
        return(
          <div className="navBar_style">
            <div className="admin_navbar_logo_style">
                {/* <img src={i} id="admin_navbar_logo_style"/>  */}
                <h2 id="admin_logo_style">MAYAN<span id="admin_logo_text_style"> Tailored </span></h2>
            </div>
            <div className="admin_navbar_links_style">
                <Link style={{color: "white"}} to={`/Administration/${this.props.adminid}/events`} >
                    Events
                </Link>
                <Link style={{color: "white"}} to={`/Administration/${this.props.adminid}/products`} >
                    Products
                </Link>
                <Link style={{color: "white"}} to={`/Administration/${this.props.adminid}/orders`}>
                    Orders
                </Link>
            </div>
            <div className="admin_navbar_account_style">
              <p> Welcome, {this.state.username} (<Link to="/Administration" style={{color: "white"}}> Log out </Link>) </p>
            </div>
         </div>
        )
    }

}
export default AdministrationNavbar