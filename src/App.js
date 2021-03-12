import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Appointment from "./screens/Appointment";
import Header from "./components/Header";
import AppointmentSummary from "./screens/AppointmentSummary";
import BookingCOmplete from "./screens/BookingComplete";
import FlightTime from "./screens/FlightTime";
import Landing from "./screens/Landing";
import PaymentDetails from "./screens/PaymentDetails";
import PeopleBooking from "./screens/PeopleBooking";
import Suggestions from "./screens/Suggestions";
import TermsConditions from "./screens/TermsConditions";
import TestLocation from "./screens/TestLocation";
import UserDetail from "./screens/UserDetail";

const App = () => {
  

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/appointmentsummary" component={AppointmentSummary} />
          <Route path="/bookingcomplete" component={BookingCOmplete} />
          <Route path="/flighttime" component={FlightTime} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/paymentdetails" component={PaymentDetails} />
          <Route path="/peoplebooking" component={PeopleBooking} />
          <Route path="/suggestions" component={Suggestions} />
          <Route path="/termsconditions" component={TermsConditions} />
          <Route path="/testlocation" component={TestLocation} />
          <Route path="/userdetail" component={UserDetail} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
