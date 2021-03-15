import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { errorNotification } from "../utils/notification";
import { peopleBookingAction, updatePersonAction } from "../actions/form";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const PeopleBooking = (props) => {
  const [isValidSubmitCheckout, setIsValidSubmitCheckout] = useState(false);
  const [isValidNextPerson, setIsValidNextPerson] = useState(false);
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

  const { peoplesData, editMan } = useSelector((state) => state.Form);

  let sexArray = ["Male", "Female"];

  const submitCheckout = (values, resetForm) => {
    values.Person = values.firstName;
    dispatch(peopleBookingAction(values));
    // resetForm()
    props.history.push("/termsconditions");
  };

  const nextPersonHandler = (e) => {
    e.preventDefault();
    if (email) {
      var validator = require("validator");
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
        Person: firstName,
        id: Math.floor(100000 + Math.random() * 900000),
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
      localStorage.setItem("limit", NumberOfPersonsLimit + 1);
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

  const updatePersonHandler = () => {
    if (email) {
      var validator = require("validator");
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
        Person: editMan.Person,
        id: editMan.id,
      };
      dispatch(updatePersonAction(data));
      props.history.push("/appointmentsummary");
      // let peoplesData = []
      // peoplesData.unshift(data)
      // localStorage.setItem('peoples' , JSON.stringify(peoplesData) )
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

  useEffect(() => {
    if (checkboxStatus) {
      setFormData({
        email: peoplesData[0].email,

        mobile: peoplesData[0].mobile,
      });
    }
  }, [checkboxStatus]);

  useEffect(() => {
    if (editMan) {
      setFormData({
        firstName: editMan.firstName,
        lastName: editMan.lastName,
        dob: editMan.dob,
        ethnicity: editMan.ethnicity,
        email: editMan.email,
        confirmEmail: editMan.confirmEmail,
        mobile: editMan.mobile,
        confirmMobile: editMan.confirmMobile,
        passportIdCard: editMan.passportIdCard,
        confIrmpassportIdCard: editMan.confIrmpassportIdCard,
      });
      setSex(editMan.sex);
    }
  }, [editMan]);

  useEffect(() => {
    if (isValidSubmitCheckout) {
      console.log("Submit To Checkout ");
    }
  }, [isValidSubmitCheckout]);

  useEffect(() => {
    if (isValidNextPerson) {
      console.log("NextPerson ");
    }
  }, [isValidNextPerson]);

  return (
    <div class="container-fluid mb-4 p-0">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dob: "",
          ethnicity: "",
          email: editMan?.email ? editMan.email : "",
          confirmEmail: "",
          mobile: editMan?.mobile ? editMan.mobile : "",
          confirmMobile: "",
          passportIdCard: "",
          confIrmpassportIdCard: "",
          sex: "",
          ethnicity: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          if(localStorage.getItem('submitType') == 'nextPerson'){
            console.log('next Person')
          }
          if(localStorage.getItem('submitType') == 'proceedToCheckout'){
            console.log('proceedToCheckout')
            submitCheckout(values);
          }


          // console.log("object1");
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Required"),
          confirmEmail: Yup.string()
            .oneOf([Yup.ref("email"), null], "Email don't match!")
            .required("Required"),
          passportIdCard: Yup.string().required("Required"),
          confIrmpassportIdCard: Yup.string()
            .oneOf(
              [Yup.ref("passportIdCard"), null],
              "Passport id don't match!"
            )
            .required("Required"),
          mobile: Yup.string().required("Required"),
          confirmMobile: Yup.string()
            .oneOf([Yup.ref("mobile"), null], "Mobile no don't match!")
            .required("Required"),
          firstName: Yup.string()
            .matches(
              /^[A-Z][a-z0-9_-]{1,100}$/,
              "First Letter must be Uppercase,"
            )
            .required("Required"),
          lastName: Yup.string()
            .matches(
              /^[A-Z][a-z0-9_-]{1,100}$/,
              "First Letter must be Uppercase,"
            )
            .required("Required"),
          sex: Yup.string().required("Required"),
          ethnicity: Yup.string().required("Required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
          } = props;
          console.log(
            "🚀 ~ file: PeopleBooking.js ~ line 410 ~ PeopleBooking ~ values",
            values
          );
          if (isValid) {
            setIsValidSubmitCheckout(true);
          }
          return (
            <Form>
              <section>
                <div class="flite-time">
                  <h4 class="PRC-flite-heading">PCR Fit to Fly</h4>
                  <p class="PRC-flite-dec">
                    You are booking for 3 people <br /> 12th February 2021
                    between 8am - 4pm
                  </p>
                  {localStorage.getItem("limit") < 1 && (
                    <button class="passenger-btn">
                      Person{" "}
                      {`${NumberOfPersonsLimit}  of ${localStorage.getItem(
                        "numberOfUsers"
                      )}`}
                      {/* {NumberOfPersonsLimit  {"of"} {localStorage.getItem("numberOfUsers")} } */}
                    </button>
                  )}
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="firstName"
                            value={values.firstName}
                          />
                          {errors.firstName && touched.firstName && (
                            <div className="input-feedback">
                              {errors.firstName}
                            </div>
                          )}
                        </div>
                        <div class="form-group col-md-12">
                          <label for="inputPassword4">Last name*</label>
                          <input
                            type="text"
                            class="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="lastName"
                            value={values.lastName}
                          />
                          {errors.lastName && touched.lastName && (
                            <div className="input-feedback">
                              {errors.lastName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputAddress">DOB*</label>
                        <input
                          type="date"
                          class="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="dob"
                          value={values.dob}
                        />
                        {errors.dob && touched.dob && (
                          <div className="input-feedback">{errors.dob}</div>
                        )}
                      </div>
                      <div>
                        <label for="inputAddress"> Sex*</label>
                        <div class="selectdiv">
                          <select
                            onChange={(e) => setSex(e.target.value)}
                            value={values.sex}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="sex"
                          >
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
                            <select
                              onChange={(e) => setSex(e.target.value)}
                              value={values.ethnicity}
                              name="ethnicity"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="email"
                            value={values.email}
                          />
                          {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                          )}
                        </div>
                        {/* <div class="drive-gide people-email-booking">
                    <p>Your results will be Sent to you via email</p>
                  </div> */}
                        <div class="form-group col-md-12">
                          <label for="inputCity">Confirm Email*</label>
                          <input
                            type="emai"
                            class="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmEmail}
                            name="confirmEmail"
                          />
                          {errors.confirmEmail && touched.confirmEmail && (
                            <div className="input-feedback">
                              {errors.confirmEmail}
                            </div>
                          )}
                        </div>
                        <div class="form-group col-md-12">
                          <label for="inputCity">Mobile Number*</label>
                          <input
                            type="number"
                            class="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="mobile"
                            value={values.mobile}
                          />
                          {errors.mobile && touched.mobile && (
                            <div className="input-feedback">
                              {errors.mobile}
                            </div>
                          )}
                        </div>
                        {/* <div class="drive-gide people-email-booking">
                    <p>Your results will be Sent to you via email</p>
                  </div> */}
                        <div class="form-group col-md-12">
                          <label for="inputCity">Confirm Mobile Number*</label>
                          <input
                            type="number"
                            class="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="confirmMobile"
                            value={values.confirmMobile}
                          />
                          {errors.confirmMobile && touched.confirmMobile && (
                            <div className="input-feedback">
                              {errors.confirmMobile}
                            </div>
                          )}
                        </div>
                        <div class="form-group col-md-12">
                          <label for="inputZip">Passport/ID card number*</label>
                          <input
                            type="text"
                            class="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="passportIdCard"
                            value={values.passportIdCard}
                          />
                          {errors.passportIdCard && touched.passportIdCard && (
                            <div className="input-feedback">
                              {errors.passportIdCard}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="form-group Confirm-passport col-md-12 p-0">
                        <label for="inputZip">
                          Confirm Passport/ID card number*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="confIrmpassportIdCard"
                          value={values.confIrmpassportIdCard}
                        />
                        {errors.confIrmpassportIdCard &&
                          touched.confIrmpassportIdCard && (
                            <div className="input-feedback">
                              {errors.confIrmpassportIdCard}
                            </div>
                          )}
                      </div>
                    </form>
                  </div>
                </div>
                <footer>
                  <div className="site-container">
                    <div class="col-md-6 col-12 p-0 pr-0 pl-0 ml-auto mt-0 mb-2">
                      <div className="row">
                        {!editMan ? (
                          <>
                            {NumberOfPersonsLimit ==
                            localStorage.getItem("numberOfUsers") ? (
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
                                    onClick={() => {
                                      handleSubmit();
                                      localStorage.setItem(
                                        "submitType",
                                        "nextPerson"
                                      );
                                    }}
                                    class="Next-btn"
                                  >
                                    Next Person
                                  </button>
                                </div>
                              </>
                            )}

                            <div class="col-12">
                              <button
                                class="Submit-to-checkout"
                                type="submit"
                                onClick={(e) => {
                                  handleSubmit();
                                  localStorage.setItem(
                                    "submitType",
                                    "proceedToCheckout"
                                  );
                                }}
                              >
                                Submit and go to checkout
                              </button>
                            </div>
                          </>
                        ) : (
                          <div class="col-12">
                            <button
                              class="Submit-to-checkout"
                              onClick={() => {
                                updatePersonHandler();
                                localStorage.setItem(
                                  "submitType",
                                  "updatePerson"
                                );
                              }}
                            >
                              Update Person
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </footer>
              </section>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PeopleBooking;
