import React from "react";
import "./OpeningHours.css";
export default function OpeningHours() {
  return (
    <div className="main">
      <div className="opning-hours">
        <h2>Operating hours</h2>
        <div className="open-hours">
          <div className="day"> Monday </div>
          <div className="open-time"> 06:00 - 22:00</div>
        </div>
        <div className="open-hours">
          <div className="day"> Tuesday </div>
          <div className="open-time"> 06:00 - 22:00</div>
        </div>
        <div className="open-hours">
          <div className="day"> Wednesday </div>
          <div className="open-time"> 06:00 - 22:00</div>
        </div>
        <div className="open-hours">
          <div className="day"> Thursday </div>
          <div className="open-time"> 06:00 - 22:00</div>
        </div>
        <div className="open-hours">
          <div className="day"> Friday </div>
          <div className="open-time"> 06:00 - 22:00</div>
        </div>
        <div className="open-hours">
          <div className="day"> Saturday </div>
          <div className="open-time"> 06:00 - 22:00</div>
        </div>
        <div className="open-hours">
          <div className="day"> Sunday </div>
          <div className="open-time"> 06:00 - 22:00</div>
        </div>
      </div>
    </div>
  );
}
