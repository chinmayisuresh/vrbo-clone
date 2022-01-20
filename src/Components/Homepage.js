import React from "react";
import "./Homepage.css";
import carousal from "./Images/carousal.jpg";
import beach from "./Images/beach.jpg";
import dog from "./Images/dog.jpg";
import pool from "./Images/pool.jpg";
import house from "./Images/house.jpg";
import house1 from "./Images/house1.jpg";

export default function Homepage() {
  return (
    <div>
      <div className="inp">
        <img src={carousal} alt="" />
      </div>
      <div className="family">
        <h1>Get inspired for a family trip </h1>
        <p>Book homes with space, convenience and amenities</p>
        <div className="family-image">
          <div>
            <img src={beach} alt="" />
            <p>On the beach</p>
          </div>
          <div>
            <div>
              <img src={dog} alt="" />
              <p>Pets welcome</p>
            </div>
            <div>
              <img src={pool} alt="" />
              <p>Swimming pools</p>
            </div>
            <div>
              <img src={house} alt="" />
              <p>Homes with free cancellation</p>
            </div>
            <div>
              <img src={house1} alt="" />
              <p>More than 3 bedrooms</p>
            </div>
          </div>
        </div>
      </div>
      <div className="type"></div>
      <div className="privacy"></div>
      <div className="property"></div>
      <div className="info"></div>

      <div className="slide"></div>
    </div>
  );
}
