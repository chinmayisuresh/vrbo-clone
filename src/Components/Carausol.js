import React, { useState } from "react";
import "./Carausol.css";
import Slider from "react-slick";
import houses from "./Images/houses.jpg";
import bunglows from "./Images/bunglows.jpg";
import cabins from "./Images/cabins.jpg";
import caravans from "./Images/caravans.jpg";
import castles from "./Images/castles.jpg";
import chalerts from "./Images/chalerts.jpg";
import condos from "./Images/condos.jpg";
import cottages from "./Images/cottages.jpg";
import estates from "./Images/estates.jpg";
import farmhouses from "./Images/farmhouses.jpg";
import guesthouse from "./Images/guest-houses.jpg";
import hotels from "./Images/hotels.jpg";
import resorts from "./Images/resorts.jpg";
import studios from "./Images/studios.jpg";
import villas from "./Images/villas.jpg";
import townhouses from "./Images/townhouses.jpg";

export default function Carausol() {
  const arr = [
    houses,
    bunglows,
    cabins,
    caravans,
    castles,
    chalerts,
    condos,
    estates,
    cottages,
    farmhouses,
    guesthouse,
    hotels,
    resorts,
    studios,
    villas,
    townhouses,
  ];

const [toShow, setToShow] = useState(4);  
const [toScroll, setToScroll] = useState(4);  
const scwidth = ()=>{
    if (window.innerWidth <= 600 ) {
      setToShow(1)
      setToScroll(1)
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: toShow,
    slidesToScroll: toScroll,
  };

  

  return (
    <div onLoad={scwidth} className="sli">
      
      <h2> Find spaces that suit your style </h2>
      <Slider {...settings}>
       
        {arr.map((e,i) => (
          <div key={i} className="sli-item">
            <img  src={e} alt="" />
            <p>name</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
