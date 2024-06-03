import React from "react";
import "../App.css";
import urslogo from "../assets/urslogo.jpg";
import youtube from "../assets/youtube.jpg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

function Header() {
  return (
    <div className="headersize">
      <img src={urslogo} className="urslogo" alt="Urs Logo" />
      <div className="logonamesection">
        <h1 className="logoname logoenglishname">
          Uma Ram Shankar Singh Inter College
        </h1>
        <h2 className="logoname logohindiname">
          उमा राम शंकर सिंह इंटर कॉलेज
        </h2> <br />
        <h5 className="logoname logohindaddress">
          <strong>मोगलहा, कुनवार, कैम्पियरगंज-गोरखपुर मो. 9140335773</strong>
        </h5>
        <div className="logosubtitle"></div>
        <div className="logosubtitle logotagname">
          (Affiliated By: Uttar Pradesh Madhyamik Shiksha Parisad Prayagraj School code: 751500)
        </div>
      </div>
      <div className="col-md-2 col-sm-1 col-xs-1  social-media-links">
      {/* <a target="_blank" href="https://youtube.com/@ddugu-official" rel="noopener noreferrer">
        <img src={youtube} className="img-responsive" alt="YouTube" style={{
    width: "52px"}} />
      </a> */}
      <a target="_blank" href="https://www.facebook.com/DDUGorakhpurUniv" rel="noopener noreferrer">
        <img src={facebook} className="img-responsive fb" alt="Facebook" />
      </a>
      <a target="_blank" href="https://www.instagram.com/ddugu_official" rel="noopener noreferrer">
        <img src={instagram} className="img-responsive ig" alt="Instagram" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/ddu-gorakhpur-university-gorakhpur-95980b222/" rel="noopener noreferrer">
        <img src={linkedin} className="img-responsive ln" alt="LinkedIn" />
      </a>
      <a target="_blank" href="https://x.com/DDUGU_Official?t=zwwJe_yra_s7aScuKzTYDg&amp;s=08" rel="noopener noreferrer">
        <img src={twitter} className="img-responsive x" alt="Twitter" />
      </a>
    </div>
    </div>
  );
}

export default Header;