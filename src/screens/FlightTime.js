import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlightTime = () => {

  const [formData , setFormData] = useState({departure :  "" , reccommendAppointmentDate : "" })

  useEffect(() => {
    window.scrollTo(0, 0);

  },[])
  return (
    <div class="site-container mb-4">
      <section>
        <div class="appointment-header">
          <h4 class="appointment-heading">
            We recommend that you book your test for 72 hours prior to your
            flight departure to allow sufficient time for your test results to
            be processed.
          </h4>
        </div>
      </section>
      <section>
        <form class="appointment-form">
          <p class="appointment-form-heading">What is your departure date?</p>
          <div class="appointment-user-address-row row">
            <div class="form-group col-12 site-input">
              <input type="date" class="icon-input" />
            </div>
          </div>
          <div>
            <p class="appointment-form-heading appointment-date-div">
              We recommend your appointment date to be
            </p>
            <div class="selectdiv">
              <select>
                <option>---Please Select your address---</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Last long option</option>
              </select>
            </div>
          </div>
          <div class="form-group mb-0">
            <p class="appointment-form-heading appointment-date-div">
              We recommend your appointment date to be
            </p>
            <div class="appointment-user-address-row row">
              <div class="form-group col-12 site-input">
                <input type="date" class="icon-input" />
              </div>
            </div>
          </div>
          <div class="flight-time-footer-text">
            <i class="fas fa-info-circle"></i>
            <p>
              This is our recommended appointment date. You can change your
              appointment date at your own risk.
            </p>
          </div>
          <div class="row form_buttons flight-time-footer-buttons">
            <div class="col-md-6 col-12 row ml-auto">
              <div className="col-md-6 col-12 pl-0">
                <button type="submit" class="Back-btn">
                  Back
                </button>
              </div>
              <div class="col-md-6 col-12 pr-0">
              <Link to="/peoplebooking">
                <button type="submit" class="Next-btn">
                  Continue
                </button>
              </Link>
            </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FlightTime;
