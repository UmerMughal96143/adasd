import React, { useEffect } from 'react'

const BookingCOmplete = () => {

  useEffect(() => {
    window.scrollTo(0, 0);

  },[])
    return (
        <div>
          <section class="Appointment-Summary">
            <div class="Test-Location-box">
              <h3>Booking Complete</h3>
            </div>
            <div class="Appointment-subheader">
              <i class="fas fa-check-circle"></i>
            </div>
          </section>
          <div class="site-container mb-4">
        <section>
          <div class="Booking-Complete-wrapper">
            <div class="subheading">
              <p>Appointment Confirmation</p>
              <div class="Save-PDF">
                <button type="submit" class="Save-PDF-btn">
                  <i class="fas fa-file-pdf"></i> Save booking confirmation as a
                  PDF
                </button>
              </div>
            </div>
            <div class="Booking-Complete-Inner-wrapper">
              <div class="Booking-Complete-details">
                <div class="person-info">
                  <h3 class="person-heading">Your appointment details</h3>
                  <div class="Person-details-info">
                    <p>Appointment date :<span> 21 February 2021 </span></p>
                    <p>Appointment time: <span> Between 8am - 4pm</span></p>
                    <p>
                      Test type: <span> PCR Test + Fit to Fly Certificate</span>
                    </p>
                    <p>Number of tests: <span> 3 people</span></p>
                    <p>
                      Appointment Location:
                      <span> 14 Fernview Drive, Rammasbottom, BL0 9XB</span>
                    </p>
                    <p>Amount Paid: <span> £300.00</span></p>
                  </div>
                </div>
              </div>
              <div class="Booking-Complete-person-data">
                <div class="Booking-Complete-person-data-box">
                  <div class="Booking-Complete-person-data-box-header">
                    <h4 class="Booking-person-info">
                      Persoan 1 Name: <span>James smith</span>
                    </h4>
                    <h4 class="Booking-person-identity">
                      Booking Refrence ID: <span>AH/12345</span>
                    </h4>
                    <p class="Booking-person-dec">
                      Please have you photo ID present at the appointment as we
                      will be required to take a photo of it. We will not be
                      able to issue your test results without taking photo ID
                    </p>
                  </div>
                </div>
                <div class="Booking-Complete-person-data-box">
                  <div class="Booking-Complete-person-data-box-header">
                    <h4 class="Booking-person-info">
                      Persoan 1 Name: <span>James smith</span>
                    </h4>
                    <h4 class="Booking-person-identity">
                      Booking Refrence ID: <span>AH/12345</span>
                    </h4>
                    <p class="Booking-person-dec">
                      Please have you photo ID present at the appointment as we
                      will be required to take a photo of it. We will not be
                      able to issue your test results without taking photo ID
                    </p>
                  </div>
                </div>
                <div class="Booking-Complete-person-data-box">
                  <div class="Booking-Complete-person-data-box-header">
                    <h4 class="Booking-person-info">
                      Persoan 1 Name: <span>James smith</span>
                    </h4>
                    <h4 class="Booking-person-identity">
                      Booking Refrence ID: <span>AH/12345</span>
                    </h4>
                    <p class="Booking-person-dec">
                      Please have you photo ID present at the appointment as we
                      will be required to take a photo of it. We will not be
                      able to issue your test results without taking photo ID
                    </p>
                  </div>
                </div>
                <div class="Save-PDF">
                  <button type="submit" class="Save-PDF-btn">
                    <i class="fas fa-file-pdf"></i> Save booking confirmation as
                    a PDF
                  </button>
                </div>
                <div class="Booking-person-FAQ">
                  <h4 class="Booking-person-question-heading">
                    Do you have any questions?
                  </h4>
                  <p>
                    We have client service agents waiting on hand to help you 24
                    hours a day.
                  </p>
                  <div class="Booking-person-chat-type">
                    <div class="Save-PDF">
                      <button type="submit" class="Save-PDF-btn">
                        <i class="fas fa-file-pdf"></i> Contact via webchat
                      </button>
                    </div>
                    <div class="Save-PDF Booking-ml">
                      <button type="submit" class="Save-PDF-btn">
                        <i class="fas fa-envelope"></i> Contact via email
                      </button>
                    </div>
                    <div class="Save-PDF">
                      <button type="submit" class="Save-PDF-btn">
                        <i class="fas fa-phone-alt phono-min-size"></i> Contact
                        via telephone
                      </button>
                    </div>
                  </div>
                  <p class="Booking-person-content-tagline">
                    We have agents online right now
                  </p>
                </div>
                <div class="invite-frinds-box">
                  <h3 class="invite-frinds-heading">
                    Invite your friends to book test with Atehcy Health
                  </h3>
                  <p>
                    Became a brand ambassador of Atehcy Health and earn £10 per
                    appointment booked through your own affiliate link
                  </p>
                  <div class="w-75 m-auto">
                    <button class="Submit-to-checkout">Apply now</button>
                  </div>
                </div>
                <div class="invite-frinds-box">
                  <h3 class="invite-frinds-heading">
                    Want to change your appointment date?
                  </h3>
                  <p>
                    Appointment dates can be changedanywhere up to 2 days. If
                    you need to change your appointment within 48 hours, you
                    will need to book a new appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
    )
}

export default BookingCOmplete
