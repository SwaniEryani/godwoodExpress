import React from "react";
import Map from "./Map";
import './ContentDetails.css';

export default function ContentDetails() {
  return (
    <>
      <div class="container">
        <div className="title">
          <h2>Our Location</h2>
        </div>
        <div class="row">
          <div class="column">
            <Map />
          </div>
          <div class="column">
            <div className="address">
              <div className="details">
                <i className="fas fa-map-marker-alt"></i>
                <label>Address:</label>
                <p>1422 N Amherst Hwy, Amherst, VA 24521, United States</p>
              </div>
              <div className="details">
                <i className="fas fa-phone-volume"></i>
                <label>Phone:</label>
                <p>+14349462542</p>
              </div>
              <div className="details">
                <i className="far fa-envelope"></i>
                <label>Email:</label>
                <p>
                  <a href="mailto:info@dogwoodexpress.com">
                    info@dogwoodexpress.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
