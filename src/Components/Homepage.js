import React, { useState } from "react";
import "./Homepage.css";
import carousal from "./Images/carousal.jpg";
import beach from "./Images/beach.jpg";
import dog from "./Images/dog.jpg";
import pool from "./Images/pool.jpg";
import house from "./Images/house.jpg";
import house1 from "./Images/house1.jpg";
import Carausol from "./Carausol";

export default function Homepage() {
  const [count, setCount] = useState(0);
  const [dis, setDis] = useState("none");
  const adultAdd = () => {
    setCount(count + 1);
  };
  const adultSub = () => {
    setCount(count - 1);
  };

  const mystyle = {
    display: dis,
  };
  const guest = () => {
    if (dis === "none") {
      setDis("flex");
    } else {
      setDis("none");
    }
  };

  
  const today = ()=>{
    let date = new Date().toLocaleDateString().split("/").reverse()
    
    for (let i = 0; i < date.length; i++) {
      if (date[i].length == 1) {
        date[i] = "0"+date[i]
      }
    }
    return date[0]+"-"+date[2]+"-"+date[1]
  }
  

  return (
    <div>
      <div className="inp">
        <img src={carousal} alt="" />
        <div className="search">
          <div className="find">
            <input placeholder="where" type="text" />
            <input placeholder="From" type="date" name="date" value={today()} min={today()} id="" />
            <input value={today()} min={today()} type="date" name="" id="" />
            <div>
              <p onClick={guest}>Guests</p>
              <div style={mystyle} className="total-people">
                <div>
                  <p> {count} Adult</p>
                  <div className="side">
                    <button onClick={adultSub}>-</button>
                    <button onClick={adultAdd}>+</button>
                  </div>
                </div>
                <div>
                  <p>Pets</p>
                  <div className="side">
                    <label htmlFor="Yes">Yes</label>
                    <input type="radio" value="Yes" name="yes" id="" />
                    <label htmlFor="No">No</label>
                    <input type="radio" name="yes" value="No" id="" />
                  </div>
                </div>
                <button onClick={guest} id="apply-btn">
                  Apply
                </button>
              </div>
            </div>
            <button id="search-btn">Search</button>
          </div>
        </div>
      </div>
      <div className="fitt">
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
      </div>
<Carausol/>
      <div className="type"></div>
      <div className="privacy"></div>
      <div className="property"></div>
      <div className="info"></div>

      <div className="slide"></div>
    </div>
  );
}
