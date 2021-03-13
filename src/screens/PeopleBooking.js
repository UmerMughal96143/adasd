import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { errorNotification } from "../utils/notification";
import { peopleBookingAction } from "../actions/form";

const PeopleBooking = ({ history }) => {
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

  const dispatch = useDispatch();
  const [sex, setSex] = useState("");
  const [checkboxStatus, setCheckBoxStatus] = useState(false);
  const [NumberOfPersonsLimit, setNumberOfPersonsLimit] = useState(1);
  const onChangeFormHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { peoplesData } = useSelector((state) => state.Form);

  let sexArray = ["Male", "Female"];

  const submitCheckout = (e) => {
    e.preventDefault();
    if (email) {
      var validator = require("validator")
      console.log(validator.isEmail(email), "email validation");
      if (!validator.isEmail(email)) {
        errorNotification("Enter Valid Email");
        return;
      }
    }
    if (
      firstName &&
      lastName &&
      dob &&
      sex &&
      email &&
      confirmEmail &&
      mobile &&
      confirmMobile &&
      passportIdCard &&
      confIrmpassportIdCard &&
      sex
    ) {
      let data = {
        firstName,
        lastName,
        dob,
        sex,
        email,
        confirmEmail,
        mobile,
        confirmMobile,
        passportIdCard,
        confIrmpassportIdCard,
        sex,
        Person: peoplesData.length + 1,
      };

      dispatch(peopleBookingAction(data));
      setNumberOfPersonsLimit(NumberOfPersonsLimit + 1);
      localStorage.setItem('limit' , NumberOfPersonsLimit)
      history.push("/termsconditions");
    } else {
      if (!firstName || !lastName || !dob || !sex) {
        errorNotification("Fill Required Fields");
        return;
      }
      if (sex == "---Please Select your sex---") {
        errorNotification("Select Sex");
        return;
      }
      if (!email) {
        errorNotification("Enter Email");
        return;
      }
      if (email !== confirmEmail) {
        errorNotification("Email does not match");
        return;
      }
      if (!mobile) {
        errorNotification("Enter Mobile Number");
        return;
      }
      if (mobile !== confirmMobile) {
        errorNotification("Mobile does not match");
        return;
      }
      if (!passportIdCard) {
        errorNotification("Enter Id Number");
        return;
      }
      if (passportIdCard !== confIrmpassportIdCard) {
        errorNotification("Id number does not match");
        return;
      }
    }
  };

  const nextPersonHandler = (e) => {
    e.preventDefault();
    if (email) {
      var validator = require("validator");
      console.log(validator.isEmail(email), "email validation");
      if (!validator.isEmail(email)) {
        errorNotification("Enter Valid Email");
        return;
      }
    }
    if (
      firstName &&
      lastName &&
      dob &&
      sex &&
      email &&
      confirmEmail &&
      mobile &&
      confirmMobile &&
      passportIdCard &&
      confIrmpassportIdCard &&
      sex
    ) {
      let data = {
        firstName,
        lastName,
        dob,
        sex,
        email,
        confirmEmail,
        mobile,
        confirmMobile,
        passportIdCard,
        confIrmpassportIdCard,
        sex,
        Person: NumberOfPersonsLimit,
      };
      dispatch(peopleBookingAction(data));
      // let peoplesData = []
      // peoplesData.unshift(data)
      // localStorage.setItem('peoples' , JSON.stringify(peoplesData) )

      setFormData({
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
      setSex("---Please Select your sex---");
      setNumberOfPersonsLimit(NumberOfPersonsLimit + 1);
      localStorage.setItem('limit' , NumberOfPersonsLimit + 1)
      setCheckBoxStatus(false);
      window.scrollTo(0, 0);
    } else {
      if (!firstName || !lastName || !dob || !sex) {
        errorNotification("Fill Required Fields");
        return;
      }
      if (sex == "---Please Select your sex---") {
        errorNotification("Select Sex");
        return;
      }
      if (!email) {
        errorNotification("Enter Email");
        return;
      }

      if (email !== confirmEmail) {
        errorNotification("Email does not match");
        return;
      }
      if (!mobile) {
        errorNotification("Enter Mobile Number");
        return;
      }
      if (mobile !== confirmMobile) {
        errorNotification("Mobile does not match");
        return;
      }
      if (!passportIdCard) {
        errorNotification("Enter Id Number");
        return;
      }
      if (passportIdCard !== confIrmpassportIdCard) {
        errorNotification("Id number does not match");
        return;
      }
    }
  };
  var a = 1 ;
  let limit =  localStorage.getItem('limit') + a

  useEffect(() => {
    if (checkboxStatus) {
      setFormData({
        firstName: peoplesData[0].firstName,
        lastName: peoplesData[0].lastName,
        dob: peoplesData[0].dob,
        ethnicity: peoplesData[0].ethnicity,
        email: peoplesData[0].email,
        confirmEmail: peoplesData[0].confirmEmail,
        mobile: peoplesData[0].mobile,
        confirmMobile: peoplesData[0].confirmMobile,
        passportIdCard: peoplesData[0].passportIdCard,
        confIrmpassportIdCard: peoplesData[0].confIrmpassportIdCard,
      });
      setSex(peoplesData[0].sex);
    }
    
  }, [checkboxStatus]);
 

  return (
    <div class="container-fluid mb-4">
      <section>
        <div class="flite-time">
          <h4 class="PRC-flite-heading">PCR Fit to Fly</h4>
          <p class="PRC-flite-dec">
            You are booking for 3 people 12th February 2021 between 8am - 4pm
          </p>
          <button class="passenger-btn">
            Person{" "}
            {`${ NumberOfPersonsLimit}  of ${localStorage.getItem(
              "numberOfUsers"
            )}`}
            {/* {NumberOfPersonsLimit  {"of"} {localStorage.getItem("numberOfUsers")} } */}
          </button>
        </div>
        {peoplesData[0] && (
          <div class="people-booking-copy-dedail-person">
          <div className="site-container">
            <label>
              <input
                type="checkbox"
                onChange={(e) => setCheckBoxStatus(e.target.checked)}
                checked={checkboxStatus}
              />
              <h3>Copy contact details from person 1</h3>
            </label>
            </div>
          </div>
        )}
      </section>
      <section>
      <div className="wrapper">
      <div className="site-container mb-4">
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputEmail4">First name*</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="firstName"
                value={firstName}
              />
            </div>
            <div class="form-group col-md-12">
              <label for="inputPassword4">Last name*</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="lastName"
                value={lastName}
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
              value={dob}
            />
          </div>
          <div>
            <label for="inputAddress"> Sex*</label>
            <div class="selectdiv">
              <select onChange={(e) => setSex(e.target.value)} value={sex}>
                <option>---Please Select your sex---</option>
                {sexArray.map((se) => {
                  return <option>{se}</option>;
                })}
              </select>
            </div>
          </div>
          <div>
          <div className=" mt-3">
          <label for="inputAddress"> Ehitinicity*</label>
            <div class="selectdiv">
              <select onChange={(e) => setSex(e.target.value)} value={sex}>
                <option>---Please Select your sex---</option>
                {sexArray.map((se) => {
                  return <option>{se}</option>;
                })}
              </select>
            </div>
            </div>
          </div>
          <div class="form-row mt-4">
            <div class="form-group col-md-12">
              <label for="inputCity">Email*</label>
              <input
                type="email"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="email"
                value={email}
              />
            </div>
            {/* <div class="drive-gide people-email-booking">
              <p>Your results will be Sent to you via email</p>
            </div> */}
            <div class="form-group col-md-12">
              <label for="inputCity">Confirm Email*</label>
              <input
                type="emai"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="confirmEmail"
                value={confirmEmail}
              />
            </div>
            <div class="form-group col-md-12">
              <label for="inputCity">Mobile Number*</label>
              <input
                type="emai"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="mobile"
                value={mobile}
              />
            </div>
            {/* <div class="drive-gide people-email-booking">
              <p>Your results will be Sent to you via email</p>
            </div> */}
            <div class="form-group col-md-12">
              <label for="inputCity">Confirm Mobile Number*</label>
              <input
                type="emai"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="confirmMobile"
                value={confirmMobile}
              />
            </div>
            <div class="form-group col-md-12">
              <label for="inputZip">Passport/ID card number*</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => onChangeFormHandler(e)}
                name="passportIdCard"
                value={passportIdCard}
              />
            </div>
          </div>
          <div class="form-group Confirm-passport col-md-12 p-0">
            <label for="inputZip">Confirm Passport/ID card number*</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => onChangeFormHandler(e)}
              name="confIrmpassportIdCard"
              value={confIrmpassportIdCard}
            />
          </div>
         
          
        </form>
        </div>
      </div>
      <footer>
              <div className="site-container">
                <div class="col-md-6 col-12 p-0 form_buttons user-detail-footer-btns ml-auto mt-0 mb-2">
                  <div className="row">
                    {NumberOfPersonsLimit == localStorage.getItem("numberOfUsers") ? (
                      ""
                    ) : (
                      <>
                        <div class="col-6">
                          <button type="submit" class="Back-btn">
                            Back
                          </button>
                        </div>
                        <div class="col-6">
                          <button
                            type="submit"
                            onClick={(e) => nextPersonHandler(e)}
                            class="Next-btn"
                          >
                            Next Person
                          </button>
                        </div>
                      </>
                    )}

                    <div class="col-12" onClick={(e) => submitCheckout(e)}>
                      <button class="Submit-to-checkout">
                        Submit and go to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </footer>
        
      </section>
    </div>
  );
};

export default PeopleBooking;
