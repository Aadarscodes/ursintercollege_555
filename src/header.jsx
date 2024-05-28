import { useState } from "react";
import "./App.css";
import urslogo from "../src/urslogo.jpg";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="Head">
      <img src={urslogo} className="urslogo" alt="Urs Logo" />
      
      <div
        className="col-md-6 col-sm-8 col-xs-8 logonamesection"
        style={{ verticalAlign: "middle" }}
      >
        <h3 className="logoname logoenglishname">
          Uma Ram Shankar Singh Inter College
        </h3>
        <h4 className="logoname logohindiname" style={{ color: "#b75906" }}>
          <strong>उमा राम शंकर सिंह इंटर कॉलेज</strong>
        </h4>
        <h5 className="logoname logohindiname" style={{ color: "#b75906" }}>
          <strong>मोगलहा, कुनवार, कैम्पियरगंज-गोरखपुर मो. 9140335773</strong>
        </h5>
        <div
          className="logosubtitle"
          style={{ color: "#b75906", fontSize: "15px" }}
        ></div>
        <div className="logosubtitle logotagname" style={{ color: "#000" }}>
          (Affiliated By: Uttar Pradesh Madhyamik Shiksha Parisad Prayagraj)
        </div>
      </div>
    </div>
  );
}

export default Header;
