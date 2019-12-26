import React, {Component} from 'react'
import AdministrationNavbar from '../Components/AdminFiles/AdministrationNavbar.js'
import AdministrationFooter from '../Components/AdminFiles/AdministrationFooter.js'
import AdministrationProductsManagement from '../Components/AdminFiles/Product/AdministrationProductsManagement.js' 
class AdministrationProductsPage extends Component {
    render() {
        console.log(this.props.adminid)
        return (
        <div>
            
            <AdministrationNavbar adminid={this.props.adminid}/>
            <AdministrationProductsManagement adminid={this.props.adminid}/>
            <AdministrationFooter/> 
        </div>
        );
    }
}

export default AdministrationProductsPage