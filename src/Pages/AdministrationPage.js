import React, {Component} from 'react'
import AdministrationNavbar from '../Components/AdminFiles/AdministrationNavbar.js'
import AdministrationFooter from '../Components/AdminFiles/AdministrationFooter.js'
class AdministrationPage extends Component {
    render() {
        return (
        <div>
            <AdministrationNavbar adminid={this.props.adminid}/>
            <div style={{height: "700px"}}></div>
            <AdministrationFooter/>
        </div>
        );
    }
}

export default AdministrationPage;