import React, {Component} from 'react'
import AdministrationNavbar from '../Components/AdminFiles/AdministrationNavbar.js'
import AdministrationFooter from '../Components/AdminFiles/AdministrationFooter.js'
import AdministrationOrdersManagement from '../Components/AdminFiles/Order/AdministrationOrdersManagement.js' 
class AdministrationOrdersPage extends Component {
    render() {
        console.log(this.props.adminid)
        return (
        <div>
            <AdministrationNavbar adminid={this.props.adminid}/>
            <AdministrationOrdersManagement adminid={this.props.adminid}/>
            <AdministrationFooter/>
        </div>
        );
    }
}

export default AdministrationOrdersPage;