import React, {Component} from 'react'
import AdministrationNavbar from '../Components/AdminFiles/AdministrationNavbar.js'
import AdministrationFooter from '../Components/AdminFiles/AdministrationFooter.js'
import AdministrationEventsManagement  from '../Components/AdminFiles/Event/AdministrationEventsManagement.js' 
class AdministrationEventsPage extends Component {
    render() {
        console.log(this.props.adminid)
        return (
        <div>
            <AdministrationNavbar adminid={this.props.adminid}/>
            <AdministrationEventsManagement adminid={this.props.adminid}/>
            <AdministrationFooter/>
        </div>
        );
    }
}

export default AdministrationEventsPage;