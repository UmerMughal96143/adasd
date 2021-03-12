import React from "react";

const AppointmentSummary = () => {
  return (
    <div>
      <section class="Appointment-Summary">
        <div class="Test-Location-box">
          <h3>Appointment Summary</h3>
        </div>
        <div class="breaking-news-box">
          <h4 class="breaking-news">PCR Fit to Fly</h4>
          <p class="breaking-news-dec">
            You are booking for 3 people 12th February 2021 between 8am - 4pm
          </p>
        </div>
      </section>
      <section class="Appointment-Summary">
        <div class="Test-Location-box">
          <h3>Appointment Summary</h3>
        </div>
        <div class="breaking-news-box">
          <h4 class="breaking-news">PCR Fit to Fly</h4>
          <p class="breaking-news-dec">
            You are booking for 3 people 12th February 2021 between 8am - 4pm
          </p>
        </div>
      </section>
      <div class="container-fluid mb-4">
        <section>
          <div class="Payment-Details-wrapper">
            <div class="mini-heading">
              <p>Please check your appointment derails carefully below</p>
            </div>
            <div class="appointment-derails-wrapper">
              <div class="person-details">
                <div class="person-info">
                  <h3 class="person-heading">Person 1</h3>
                  <div class="Person-details-name">
                    <p>Jammer Smith - PCR Fit to Fly</p>
                  </div>
                </div>
                <div class="person-personal-detail">
                  <div class="d-flex person-detail-flex-box">
                    <div class="col-6">
                      <div class="person-heading-icon">
                        <h3 class="person-heading">Details</h3>
                        <i class="fas fa-pen"></i>
                      </div>
                    </div>
                    <div class="col-6">
                      <button type="submit" class="remove-btn">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div class="Person-details-info">
                    <p>
                      Passport/ID card number :<span> 12345668156</span>
                    </p>
                    <p>
                      Email address: <span> Jamessmith321@gmail.com</span>
                    </p>
                    <p>
                      Mobile number:<span> Jamessmith321@gmail.com</span>
                    </p>
                  </div>
                  <div class="Person-requird-details">
                    <p>Documents required at appointment:</p>
                  </div>
                  <p class="Passport">Passport</p>
                </div>
              </div>
              <div class="person-details">
                <div class="person-info">
                  <h3 class="person-heading">Person 1</h3>
                  <div class="Person-details-name">
                    <p>Jammer Smith - PCR Fit to Fly</p>
                  </div>
                </div>
                <div class="person-personal-detail">
                  <div class="d-flex person-detail-flex-box">
                    <div class="col-6">
                      <div class="person-heading-icon">
                        <h3 class="person-heading">Details</h3>
                        <i class="fas fa-pen"></i>
                      </div>
                    </div>
                    <div class="col-6">
                      <button type="submit" class="remove-btn">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div class="Person-details-info">
                    <p>
                      Passport/ID card number :<span> 12345668156</span>
                    </p>
                    <p>
                      Email address: <span> Jamessmith321@gmail.com</span>
                    </p>
                    <p>
                      Mobile number:<span> Jamessmith321@gmail.com</span>
                    </p>
                  </div>
                  <div class="Person-requird-details">
                    <p>Documents required at appointment:</p>
                  </div>
                  <p class="Passport">Passport</p>
                </div>
              </div>
              <div class="add-person">
                <button class="add-person-btn">+ Add another person</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div class="amount-due">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6 amount-due-text">
                <h3>Amount due</h3>
              </div>
              <div class="col-6 amount-due-price">
                <h3>£149</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentSummary;
