import React from "react";
import { Link } from "react-router-dom";
import { bookCovidTest } from "../actions/form";
import {useDispatch} from 'react-redux'

const Landing = () => {
  const dispatch = useDispatch() ;
  return (
    <div>
      <section>
        <div class="breaking-news-box">
          <h4 class="breaking-news">Book your Covid-19 Test</h4>
          <p class="breaking-news-dec">
            Have a question? Visit our <a href="#">Help centre</a>
          </p>
        </div>
      </section>
      <div class="container mb-4">
        <section>
          <div class="travelling-tickets-wrapper">
            <h3 class="travelling-tickets-heading">What test do I need?</h3>
            <div class="container__">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="travelling-tickets">
                    <h3 class="travelling-tickets-heading">
                      I am 
                      <span class="travelling-tickets-hightlight-text">
                        NOT
                      </span>
                       travelling but need a test
                    </h3>
                    <div class="d-flex travelling-tickets-content">
                      <div class="col-8 travelling-tickets-box-right">
                        <p class="travelling-tickets-services">PCR Test</p>
                        <p class="travelling-tickets-confirmation-email">
                          (e-mail results confirmation)
                        </p>
                      </div>
                      <div class="col-4 travelling-tickets-box-left">
                        <div class="d-flex">
                          <span>From</span>
                          <h3 class="tickets-amount ml-auto">£66</h3>
                        </div>
                        <Link to="/testlocation" onClick={() => dispatch(bookCovidTest('I am travelling but need a test'))}>
                          <button class="tickets-button" >Book</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="travelling-tickets">
                    <h3 class="travelling-tickets-heading">
                      I am travelling
                      <span class="travelling-tickets-hightlight-text">
                        OUT
                      </span>
                      of the UK
                    </h3>
                    <div class="d-flex travelling-tickets-content">
                      <div class="col-8 travelling-tickets-box-right">
                        <p class="travelling-tickets-services">PCR test</p>
                        <p class="travelling-tickets-confirmation-email">
                          (e-mail results confirmation)
                        </p>
                      </div>
                      <div class="col-4 travelling-tickets-box-left">
                        <div class="d-flex">
                          <span>From</span>
                          <h3 class="tickets-amount ml-auto">£66</h3>
                        </div>
                        <Link to="/testlocation"  onClick={() => dispatch(bookCovidTest('I am travelling out of the UK'))}>
                          <button class="tickets-button">Book</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="travelling-tickets">
                    <h3 class="travelling-tickets-heading">
                      I am
                      <span class="travelling-tickets-hightlight-text">
                        ARRIVING
                      </span>
                      in England
                    </h3>
                    <div class="d-flex travelling-tickets-content">
                      <div class="col-8 travelling-tickets-box-right">
                        <p class="travelling-tickets-services">PCR Test</p>
                        <p class="travelling-tickets-confirmation-email">
                          (e-mail results confirmation)
                        </p>
                      </div>
                      <div class="col-4 travelling-tickets-box-left">
                        <div class="d-flex">
                          <span>From</span>
                          <h3 class="tickets-amount ml-auto">£66</h3>
                        </div>
                        <Link to="/testlocation" onClick={() => dispatch(bookCovidTest('I am arriving in England'))}>
                          <button class="tickets-button">Book</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="travelling-tickets-footer-content">
            <p class="travelling-tickets-footer-content-heading">
              We aim to deliver your results <br />
              by 10pm the next day*
            </p>
            <p class="travelling-tickets-footer-contentsubheading">
              *Results could take upto 48 hours
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
