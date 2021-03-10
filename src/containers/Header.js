import React from "react";
import { useStateValue } from "../StateProvider";
import "./Header.css";
import "./Home.css";
import companyLogo from "../images/logo.png";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const handleLogout = () => {
    dispatch({
      type: "SET_USER",
      user: null
    })
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header_logo">
        <img className="header_logoicon" src={companyLogo} alt="" />
        <h4 className="header_logoname">TransMed</h4>
      </div>

      <div className="header_option">
        <span className="header_optionOne">
          {user ? "Hi," + " " + user : "Hello Guest"}
        </span>
        <span className="header_optionTwo">
          {
            <button className="logout_button" onClick={handleLogout}>
              Logout
            </button>
          }
        </span>
      </div>
    </div>
  );
}
