import React from "react";

const PaymentDetails = () => {
  return (
    <div>
      <section>
        <div class="Test-Location-box">
          <h3>Payment Details</h3>
        </div>
      </section>
      <div class="site-container mt-5 mb-4">
        <section>
          <div class="Payment-Details-wrapper">
            <p class="Payment-Details-heading">
              Your appointment has been temporarily secured for the following
              <br />
              date: <span> 21 February 2021</span>
            </p>
            <p class="Payment-Details-subheading">
              Your appointment will be held for <span>00:00:00</span>
            </p>
            <div class="Payment-Details-form">
              <h3>
                Payment due: <span>£298.00</span>
              </h3>
              <form>
                <div class="Payment-form-row">
                  <p>Card number*</p>
                  <input type="text" class="form-control" />
                </div>
                <div class="Payment-form-row">
                  <p>Expiry Date*</p>
                  <input type="date" class="form-control" />
                </div>
                <div class="Payment-form-row">
                  <p>Cardholder name*</p>
                  <input type="text" class="form-control" />
                </div>
                <div class="Payment-form-row">
                  <p>CVV*</p>
                  <input type="text" class="form-control" />
                </div>
                <div class="Payment-form-row Billing-address">
                  <p>
                    Billing address <i class="fas fa-pen"></i>
                  </p>
                  <div class="travelling-tickets">
                    <p>14 Fernview Drive, Ramsbottom, BL0 9XB UK, England.</p>
                  </div>
                </div>
                <div className="row form_buttons flight-time-footer-buttons">
                  <div className="col-md-6 col-12 row ml-auto">
                    <div class="col-md-4 col-12 back-btn-div pl-0">
                      <button type="submit" class="Back-btn">
                        Back
                      </button>
                    </div>
                    <div class="col-md-8 col-12 accept-turm-condition pr-0">
                      <button class="Submit-to-checkout">Complete Payment</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentDetails;
