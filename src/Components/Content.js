import React from "react";
import Pic1 from "./img/1.png";
import Pic2 from "./img/2.png";
import Logo from "./img/logo.png";
import Pic3 from './img/3.png';

function Content() {
  return (
    <div className="container">
      <div className="flx">
        <div className="flximg">
          <img src={Pic1} alt="pic1" />
        </div>
        <div className="flxcontent">
          <img src={Logo} className="logo" alt="logo" />
          <h5>
            {" "}
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <div className="img2container">
            <ul className="font-size">
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img className="pic2" src={Pic2} alt="pic2" />
            
          </div>
          <div className="font-size">
            Government of India has awarded the <b>"National Energy Conservation
            Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </div>
        </div>
      </div>
      <div className="lowercontainer">
        <p className="fontSize">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <div className="pic3">
          <img src={Pic3} alt="pic3"/>
        </div>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <div className="horizontalline"></div>
        <h5 className="fluidsystem">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
        <div className=" details">
          <span>CHEMICALS & PROCESS</span>
           <span>POWER WATER & WASTE WATER</span>
          <span>OILS & GAS</span>
          <span>PHARMA</span>
          <span>SUGARS & DISTILLERIES</span>
          <span>PAPER & PULP</span>
          <span>MARINE & DEFENCE</span>
          <span>METAL & MINING</span>
          <span>FOOD & BEVERAGE</span>
          
          <span>PETROCHEMICAL & REFINERIES</span>
          <span>SOLAR</span>
          <span>BUILDING</span>
          <span>HVAC</span>
          <span>FIRE FIGHTING</span>
          <span>AGRICULTURE & RESIDENTIAL</span>
        </div>
      </div>
      
    </div>
  );
}

export default Content;
