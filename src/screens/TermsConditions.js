import React, { useState } from "react";
import { Link } from "react-router-dom";
import { errorNotification } from "../utils/notification";

const TermsConditions = ({history}) => {

  const [condition1 , setCondition1] = useState(false)
  const [condition2 , setCondition2] = useState(false)
  const [condition3 , setCondition3] = useState(false)
  const [condition4 , setCondition4] = useState(false)




  const proceedToSummaryHandler = (e) => {
    e.preventDefault()

    if(!condition1 || !condition2 || !condition3 || !condition4){
      errorNotification('Missing Terms and Conditions')
      return
    }
    history.push('/appointmentsummary')
  }
  return (
    <div>
      <section>
        <div class="Test-Location-box">
          <h3>Terms and Conditions</h3>
        </div>
      </section>
      <div class="container-fluid mb-4">
        <section>
          <div class="Terms-Conditions-wrapper">
            <h3 class="Terms-Condition_heaading">
              Please tick the boxes below to accept that you have read and
              accept the following:
            </h3>
            <div class="Terms-Conditions-points">
              <p>
                <i class="fas fa-eye"></i>I have read and understand the privacy
                policy.
              </p>
            </div>
            <div class="Terms-Conditions-points">
              <p>
                <i class="fas fa-eye"></i>I have provided accurate information
                in this booking for every person in my party,and understand that
                inaccurate information will invalidate any Fit to Fly
                certificate.
              </p>
            </div>
            <div class="Terms-Conditions-points">
              <p>
                <i class="fas fa-eye"></i>I will ensure that me and my party
                have photo ID present at the time of appointment.
              </p>
            </div>
            <div class="user-agree-conditions">
              <label>
                <input type="checkbox" onChange={(e) => setCondition1(e.target.checked)} />
                <h3>
                  By ticking I acknowledge I have read and accept the above
                  statement.
                </h3>
              </label>
              <label>
                <input type="checkbox" onChange={(e) => setCondition2(e.target.checked)}/>
                <h3>I have read and accept the Terms and Conditions.</h3>
              </label>
              <label>
                <input type="checkbox" onChange={(e) => setCondition3(e.target.checked)}/>
                <h3>I have read and agree to the Fair Processing Notice.</h3>
              </label>
              <label>
                <input type="checkbox" onChange={(e) => setCondition4(e.target.checked)}/>
                <h3>
                  I accept the no refund policy unless in the event of an
                  airline cancellation.
                </h3>
              </label>
              <div class="accept-turm-condition">
                  <button class="Submit-to-checkout" onClick={(e) => proceedToSummaryHandler(e)}>
                    Accept and proceed to summary
                  </button>
                
              </div>
              <div class="back-btn-div">
                <button type="submit" class="Back-btn">
                  Back
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
