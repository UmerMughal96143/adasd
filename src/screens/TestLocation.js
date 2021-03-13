import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {testlocation} from '../actions/form'


const TestLocation = () => {
  const dispatch = useDispatch() ;

  return (
    <div>
      <section>
        <div class="Test-Location-box">
          <h3>Test Location</h3>
        </div>
      </section>
      <div class="site-container mb-4">
        <section>
          <div class="Location-block-wrapper">
            <div class="Location-box">
              <i class="fas fa-home home-icon"></i>
              <div class="Location-mini-heading">
                <p>Home Visit</p>
              </div>
              <p class="Location-box-header">
                <span>
                  <i class="far fa-clock"></i>
                </span>
                <span>2 Hour time slots</span>
              </p>
              <p>
                from <span class="Location-amount">£99</span>
              </p>
              <div class="see-location-btn-div">
              <Link to='/appointment' onClick={() => dispatch(testlocation('Home Visit'))}>
                <button class="Submit-to-checkout">Select Home Visit</button>
              </Link>
              </div>
            </div>
            <div class="Location-box">
              <i class="fas fa-car home-icon"></i>
              <div class="Location-mini-heading">
                <p>Drive through</p>
              </div>
              <p class="Location-box-header">
                <span>
                  <i class="far fa-clock"></i>
                </span>
                <span>2 Hour time slots</span>
              </p>
              <p>
                from <span class="Location-amount">£66</span>
              </p>
              <div class="see-location-btn-div">
              <Link to='/appointment' onClick={() => dispatch(testlocation('Drive through'))}>
                <button class="Submit-to-checkout">Select Drive through</button>
              </Link>
              </div>
              <div class="drive-gide">
                <p>
                  *Before choosing drive through, be sure to check our available
                  locations
                </p>
              </div>
              
              <div class="see-location-modle">
                {/* <!-- Button trigger modal --> */}
                
                <button
                  type="button"
                  class="Submit-to-checkout"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  See location
                </button>

                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header border-0">
                        <h5 class="modal-title" id="staticBackdropLabel">
                          Drive Through Test Centres
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <ul>
                          <li>Aberdeen Airport</li>
                          <li>Bristol Airport</li>
                          <li>Doncaster Sheffield Airport</li>
                          <li>London Gatwick Airport</li>
                          <li>London Luton Airport</li>
                          <li>Glasgow International Airport</li>
                          <li>Manchester Airport</li>
                          <li>Birmingham Airport</li>
                          <li>East Midlands Airport</li>
                          <li>Liverpool Airport</li>
                          <li>London Stanstead Airport</li>
                          <li>Cardiff Airport</li>
                          <li>Edinburgh Airport</li>
                          <li>Newcastle Airport</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestLocation;
