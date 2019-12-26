import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage.js'
import AboutUsPage from './Pages/AboutUsPage.js'
import ContactUsPage from './Pages/ContactUsPage.js'
import SizeChartPage from './Pages/SizeChartPage.js'
import CustmerCarePage from './Pages/CustmerCarePage.js'
import ShowRoomPage from './Pages/ShowRoomPage.js'
import ProductDetailsPage from './Pages/ProductDetailsPage.js'
import EventDetailsPage from './Pages/EventDetailsPage.js'
import EventsPage from './Pages/EventsPage.js'
import AdministrationPage from './Pages/AdministrationPage.js'
import AdministrationLogInPage from './Pages/AdministrationLogInPage.js'
import AdministrationEventsPage from './Pages/AdministrationEventsPage'
import AdministrationOrdersPage from './Pages/AdministrationOrdersPage'
import AdministrationProductsPage from './Pages/AdministrationProductsPage'

const Home = () => (
  <HomePage />
  )
const AboutUs = () => (
  <AboutUsPage />
  )
const ContactUs = () => (
   <ContactUsPage />
)
const ShowRoom = () => (
  <ShowRoomPage />
)
const Events = () => (
  <EventsPage />
)
const ChartSize = () => (
  <SizeChartPage/>
)
const CustmerCare = () => (
  <CustmerCarePage/>
)
const AdministrationLogIn = () => (
  <AdministrationLogInPage/>
)
class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
         {/* <Route exact path="/TemplatesOne" component={TemplateOnePage} />*/}
          <Route exact path="/" component={Home} /> 
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/ChartSize" component={ChartSize} /> 
          <Route exact path="/CustmerCare" component={CustmerCare} /> 
          <Route exact path="/ShowRoom" component={ShowRoom} /> 
          <Route path="/ShowRoom/:id" render={(props)=> <ProductDetailsPage  id={props.match.params.id} />} />
          <Route exact path="/Events" component={Events} /> 
          <Route path="/Events/:id" render={(props)=> <EventDetailsPage  id={props.match.params.id} />} />
          <Route exact path="/Administration" component={AdministrationLogIn} />
          <Route exact path="/Administration/:id" render={(props)=> <AdministrationPage  adminid={props.match.params.id} />} />
          <Route exact path="/Administration/:id/products" render={(props)=> <AdministrationProductsPage adminid={props.match.params.id} />} /> 
          <Route exact path="/Administration/:id/events" render={(props)=> <AdministrationEventsPage  adminid={props.match.params.id} />} />
          <Route exact path="/Administration/:id/orders" render={(props)=> <AdministrationOrdersPage  adminid={props.match.params.id} />} />
        </Switch>
       </div>
    );
  }
}

export default Router;