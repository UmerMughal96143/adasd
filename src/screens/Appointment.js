import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addressesAppointment } from "../actions/form";
import { errorNotification } from "../utils/notification";

const Appointment = ({ history }) => {
  const [addressResult, setAddressResult] = useState("");
  const [dropDownAddress, setDropdownAddress] = useState("");
  const [isDropDownAddressSelected, setIsDropDownAddressSelected] = useState(
    false
  );
  const [isAddressSuccess, setAddressSuccess] = useState(false);

  const [numberOfPeoples, setNumberOfPeoples] = useState("");

  const [finalAddressArrayyy, setFinalAddressArray] = useState([]);

  const [postcode, setPostCode] = useState("");

  const dispatch = useDispatch();

  let finalAddressArray = [];

  useEffect(() => {
    if (addressResult.delivery_points) {
      finalAddressArray = addressResult.delivery_points.map((add) => ({
        ...add,
        townCity: addressResult.town + addressResult.traditional_county,
      }));

      setFinalAddressArray(finalAddressArray);
    }
    window.scrollTo(0, 0);
  }, [addressResult]);

  let numberOfPeoplesData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const findAddressHandler = async (e) => {
    e.preventDefault();
    if (!postcode) {
      errorNotification("Enter Post Code");
      return;
    }

    let result = await axios.post(
      `https://pcls1.craftyclicks.co.uk/json/rapidaddress?key=35000-bcc97-ce11b-02c57&postcode=${postcode}&response=data_formatted`
    );
    setAddressResult(result.data);
    // setTownCity(result.data);
    if (result.data) {
      setAddressSuccess(true);
    }
  };

  const continueHandler = (e) => {
    e.preventDefault();
    if (dropDownAddress && postcode && numberOfPeoples) {
      let formData = {
        address: dropDownAddress,
        postcode: postcode,
        numberOfPeoples: numberOfPeoples,
      };
      dispatch(addressesAppointment(formData));
      history.push("/suggestions");
    } else {
      errorNotification("Please fill all fields");
      return;
    }
  };

  return (
    <div class="site-container mb-4">
      <section>
        <div class="appointment-header">
          <h4 class="appointment-heading">
            All swabs are taken at your home address. Your are required to be at
            home from 8am till 4pm on the day of your appointment.
          </h4>
        </div>
      </section>
      <section>
        <form class="appointment-form">
          <p class="appointment-form-heading">
            Please Select which address you would like to have appointed
          </p>
          <div class="appointment-user-address-row row">
            <div class="form-group col-md-7 col-8">
              <input
                type="text"
                class="form-control"
                placeholder="Postal Code"
                onChange={(e) => setPostCode(e.target.value)}
                required
                value={postcode.toUpperCase()}
              />
            </div>
            <div class="form-group col-md-4 col-4 Find-Address-btn">
              <button
                class="tickets-button"
                onClick={(e) => findAddressHandler(e)}
                disabled={isAddressSuccess}
              >
                Find Address
              </button>
            </div>
          </div>
          {isAddressSuccess && (
            <div class="selectdiv">
              <select
                onChange={(e) => {
                  setDropdownAddress(e.target.value);
                  setIsDropDownAddressSelected(true);
                }}
                required
              >
                <option>---Please Select your address---</option>
                {finalAddressArrayyy &&
                  finalAddressArrayyy.map((state) => {
                    return (
                      <option>
                        {state.line_1} {state.line_2} {state.organisation_name}{" "}
                        {state.townCity}{" "}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}

          {isDropDownAddressSelected && (
            <div class="appointment-user-address-row row">
              <div class="form-group col-8">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  value={dropDownAddress.toUpperCase()}
                  onChange={(e) => setDropdownAddress(e.target.value)}
                />
              </div>
            </div>
          )}

          <div class="form-group mt-5">
            <p class="appointment-form-heading">
              How many people will require a PCR test at the appointment?
            </p>
            <div class="selectdiv">
              <select
                onChange={(e) => {
                  setNumberOfPeoples(e.target.value);
                  localStorage.setItem("numberOfUsers", e.target.value);
                }}
                required
              >
                <option>---Please Select number of people---</option>
                {numberOfPeoplesData.map((peo) => {
                  return <option>{peo}</option>;
                })}
                {/* 
                <option>Option 2</option>
                <option>Last long option</option> */}
              </select>
            </div>
          </div>
          <div class="row form_buttons">
            <div class="col-md-4 col-12 ml-auto">
              <button
                type="submit"
                onClick={(e) => continueHandler(e)}
                class="Next-btn"
              >
                Continue
              </button>
            </div>
          </div>
          <div class="appointment-footer-content">
            <p class="travelling-tickets-footer-contentsubheading">
              *You will be reqiured to wear a face mask when the swabber arrives
              at your home. If you're not at home on the day of your
              appointment, you will not be entitled to a refund. You will be
              required to re-book your appointment via the website.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Appointment;
