import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { bookCovidTest } from "../actions/form";
import {useDispatch} from 'react-redux'

const Landing = () => {
  const dispatch = useDispatch() ;

  useEffect(() => {
    window.scrollTo(0, 0);

  },[])
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
            <h3 class="travelling-tickets-mainheading">What test do I need?</h3>
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
                      <div class="col-9 travelling-tickets-box-right pl-0 pr-0">
                        <p class="travelling-tickets-services">PCR Test</p>
                        <p class="travelling-tickets-confirmation-email">
                          (e-mail results confirmation)
                        </p>
                      </div>
                      <div class="col-3 travelling-tickets-box-left pr-0 pl-0">
                        <div class="row m-0">
                          <div className="col-12 p-0 text-left">
                             <div className="d-flex">
                             <span>From</span> 
                             <h3 class="tickets-amount ml-1">£66</h3>
                             </div>
                          </div>
                          <div className="col-12 p-0">
                          <Link to="/testlocation" onClick={() => dispatch(bookCovidTest('I am travelling but need a test'))}>
                          <button class="tickets-button" >Book</button>
                        </Link>
                          </div>
                        </div>
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
                      <div class="col-9 travelling-tickets-box-right pr-0 pl-0">
                        <p class="travelling-tickets-services">PCR test</p>
                        <p class="travelling-tickets-confirmation-email">
                          (e-mail results confirmation)<br />
                          +Fit to Fly certificate
                        </p>
                      </div>
                      <div class="col-3 travelling-tickets-box-left pr-0 pl-0">
                      <div class="row m-0">
                          <div className="col-12 p-0">
                             <div className="d-flex">
                                <span>From</span> 
                                <h3 class="tickets-amount ml-1">£66</h3>
                             </div>
                          </div>
                        </div>
                        <div className="col-12 p-0">
                        <Link to="/testlocation"  onClick={() => dispatch(bookCovidTest('I am travelling out of the UK'))}>
                          <button class="tickets-button">Book</button>
                        </Link>
                        </div>
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
                      <div class="col-9 travelling-tickets-box-right pr-0 pl-0">
                        <p class="travelling-tickets-services">PCR Test</p>
                        <p class="travelling-tickets-confirmation-email">
                          (e-mail results confirmation)
                        </p>
                      </div>
                      <div class="col-3 travelling-tickets-box-left pr-0 pl-0">
                      <div class="row m-0">
                          <div className="col-12 p-0 text-left">
                              <div className="d-flex">
                                <span>From</span> 
                                <h3 class="tickets-amount ml-1">£66</h3>
                              </div>
                          </div>
                        </div>
                        <div className="col-12 p-0">
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
