import React, { useState } from "react";
import { Link } from "react-router-dom";

const PeopleBooking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    ethnicity: "",
    email: "",
    confirmEmail: "",
    mobile: "",
    confirmMobile: "",
    passportIdCard: "",
    confIrmpassportIdCard: "",
  });
  
  const {
    firstName,
    lastName,
    dob,
    ethnicity,
    email,
    confirmEmail,
    mobile,
    confirmMobile,
    passportIdCard,
    confIrmpassportIdCard,
  } = formData;

  const [sex, setSex] = useState("");
  const onChangeFormHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  let sexArray = ["Male", "Female"];

  return (
    <div class="container-fluid mb-4">
      <section>
        <div class="flite-time">
          <h4 class="PRC-flite-heading">PCR Fit to Fly</h4>
          <p class="PRC-flite-dec">
            You are booking for 3 people 12th February 2021 between 8am - 4pm
          </p>
          <button class="passenger-btn">Person 1 of 3</button>
        </div>
        {/* <div class="people-booking-copy-dedail-person">
          <label>
            <input type="checkbox" />
            <h3>Copy contact details from person 1</h3>
          </label>
        </div> */}
      </section>
      <section>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">First name*</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="firstName"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">last name*</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="lastName"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">DOB*</label>
            <input
              type="date"
              class="form-control"
              onChange={(e) => onChangeFormHandler(e)}
              name="dob"
            />
          </div>
          <div>
            <label for="inputAddress"> Sex*</label>
            <div class="selectdiv">
              <select onChange={(e) => setSex(e.target.value)}>
                <option>---Please Select your sex---</option>
                {sexArray.map((se) => {
                  return <option>{se}</option>;
                })}
              </select>
            </div>
          </div>
          <div>
            <label for="inputAddress"> Ehitinicity*</label>
            <div class="selectdiv">
              <select onChange={(e) => setSex(e.target.value)}>
                <option>---Please Select your sex---</option>
                {sexArray.map((se) => {
                  return <option>{se}</option>;
                })}
              </select>
            </div>
          </div>
          <div class="form-row mt-4">
            <div class="form-group col-md-6">
              <label for="inputCity">Emai*</label>
              <input
                type="emai"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="email"
              />
            </div>
            {/* <div class="drive-gide people-email-booking">
              <p>Your results will be Sent to you via email</p>
            </div> */}
            <div class="form-group col-md-4">
              <label for="inputCity">Confirm email*</label>
              <input
                type="emai"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="confirmEmail"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputCity">Mobile Number*</label>
              <input
                type="emai"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="mobile"
              />
            </div>
            {/* <div class="drive-gide people-email-booking">
              <p>Your results will be Sent to you via email</p>
            </div> */}
            <div class="form-group col-md-4">
              <label for="inputCity">Confirm Mobile Number*</label>
              <input
                type="emai"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="confirmMobile"
              />
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Passport/ID card number*</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="passportIdCard"
              />
            </div>
          </div>
          <div class="form-group Confirm-passport col-md-2">
            <label for="inputZip">Confirm passport/ID card number*</label>
            passportIdCard
            <input
              type="text"
              class="form-control"
              onChange={(e) => onChangeFormHandler(e)}
              name="confIrmpassportIdCard"
            />
          </div>
          <div class="row form_buttons user-detail-footer-btns">
            <div class="col-6">
              <button type="submit" class="Back-btn">
                Back
              </button>
            </div>
            <div class="col-6">
              <button type="submit" class="Next-btn">
                Next Person
              </button>
            </div>
            <div class="col-12">
              <Link to="/userdetail">
                <button class="Submit-to-checkout">
                  Submit and go to checkout
                </button>
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PeopleBooking;
