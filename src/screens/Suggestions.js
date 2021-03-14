import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { suggestions } from "../actions/form";
import { errorNotification } from "../utils/notification";
import Time from "../components/Time";
import Date from "../components/Date";

const Suggestions = ({ history }) => {
  const [flightTime, setFlightTime] = useState("");
 
  const [startDate, setStartDate] = useState("");
  
  const dispatch = useDispatch();

  let flightTimes = [
    "1am - 3am",
    "3am - 5am",
    "5am - 7am",
    "7am - 9am",
    "9am - 11am",
    "11am - 1pm",
    "1pm - 3pm",
    "3pm - 5pm",
    "5pm - 7pm",
    "7pm - 9pm",
    "9pm - 11pm",
    "11pm - 1am",
  ];

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (flightTime && startDate) {
      let data = {
        flightTime,
        startDate,
      };
      dispatch(suggestions(data));
      history.push("/peoplebooking");
    } else {
      errorNotification("Please fill All fields");
    }
  };

  const valueFromPicker = (data) => {
    setFlightTime(data.valueText);
  };
  const datValueFromPicker = (data) => {
    setStartDate(data.valueText);
  };
  return (
    <div>
      <div className="wrapper">
        <div class="site-container mb-4">
          <section>
            <div class="appointment-header">
              <h4 class="appointment-heading">
                Enter your flight times and let our clever system give you the
                best option for your appointment time to ensure you get results
                back in time for your flight
              </h4>
            </div>
          </section>
          <section>
            <form class="appointment-form">
              <p class="appointment-form-heading">
                What is your departure date?
              </p>
              <div class="suggestion-date-row row">
                {/* <div class="form-group col-12 site-input">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    onFocus={() => console.log("ha")}
                  />
                </div> */}
                <Date datValueFromPicker={datValueFromPicker} />
              </div>
              {/* <div>
            <p class="appointment-form-heading appointment-date-div">
              What time if your flight?
            </p>
            <div class="selectdiv">
              <select
                onChange={(e) => oncFormCHangeHandler(e)}
                name="flightTime"
              >
                <option>---Please Select your flight time---</option>
                {flightTimes.map((fli) => {
                  return <option>{fli}</option>;
                })}
              </select>
            </div>
          </div> */}
              <div>
                <p class="appointment-form-heading appointment-date-div">
                  What time if your flight?
                </p>
                <div class="selectdiv">
                  <Time valueFromPicker={valueFromPicker} />
                </div>
              </div>
              {flightTime && (
                <div class="appointment-prosecer-steps">
                  <p class="appointment-prosecer-steps-subheading">
                    Please choose your preferred appointment time
                  </p>
                  <h3 class="appointment-prosecer-steps-mainheading">
                    Best choice
                  </h3>
                  <div class="suggest-best-time">
                    <button class="suggest-best-time-btn">
                      <span>2pm - 4pm</span> {startDate.toString()}
                    </button>
                  </div>
                  <div class="user-choose">
                    <p class="user-choose-heading">You can also choose</p>
                    <div class="user-choose-box">
                      <button class="user-choose-conent">
                        6am - 8am Monday 12th March
                      </button>
                    </div>
                    <div class="user-choose-box">
                      <button class="user-choose-conent">
                        8am - 8am Monday 12th March
                      </button>
                    </div>
                    <div class="user-choose-box">
                      <button class="user-choose-conent">
                        10am - 10am Monday 12th March
                      </button>
                    </div>
                    <div class="user-choose-box">
                      <button class="user-choose-conent">
                        10am - 8am Monday 12th March
                      </button>
                    </div>
                    <div class="user-choose-box">
                      <button class="user-choose-conent">
                        12am - 12am Monday 12th March
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
      <footer>
        <div class="site-container">
          <div className="pl-0 pr-0 col-md-6 col-12 row ml-auto flight-time-footer-buttons mt-0 mb-2 mr-0">
            <div class="col-md-6 col-6 footer-btn">
              <button type="submit" class="Back-btn">
                Back
              </button>
            </div>
            <div class="col-md-6 col-6 footer-btn pl-2 pr-0">
              <Link to="/peoplebooking">
                <button
                  type="submit"
                  class="Next-btn"
                  onClick={(e) => submitFormHandler(e)}
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Suggestions;
