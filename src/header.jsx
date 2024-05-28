import { useState } from "react";
import "./App.css";
import urslogo from "../src/urslogo.jpg";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="Head">
      <img
        src={urslogo}
        className="urslogo"
        alt="Urs Logo"
        style={{ verticalAlign: "left" }}
      />
      <div>
        <h1>Uma Ram Shankar Singh Inter College</h1>
        <h3 style={{ color: "#b75906" }}>
          <>उमा राम शंकर सिंह इंटर कॉलेज</>
        </h3>
        <h5 style={{ color: "#b75906" }}>
          <>मोगलहा, कुनवार, कैम्पियरगंज-गोरखपुर मो. 9140335773</>
        </h5>
        <h4 style={{ color: "#b75906", fontSize: "15px" }}></h4>
        <h5 style={{ color: "#000" }}>
          (Affiliated By: Uttar Pradesh Madhyamik Shiksha Parisad Prayagraj)
        </h5>
      </div>
    </div>
  );
}

export default Header;
