import React, {useState} from "react";
import { useStateValue } from "../StateProvider";
import {useHistory} from  "react-router-dom";
import "./Home.css";
import companyLogo from '../images/logo.png'
 
export default function Home() {
  const [userName, setUserName] = useState("");
  const [loginError, setLoginError] = useState("")
  const [{user}, dispatch] = useStateValue();
  const history = useHistory();

  const login= (e) => {
      e.preventDefault();
      if(!userName){
        setLoginError("Username required");
      }
      else{
        dispatch({
          type: "SET_USER",
          user: userName
      })
      }
      
       if(userName){
           history.push('/dashboard')
       }

  }
  return (
    <div className="home">
      <div className="home_banner">
          <img className="home_logo" src={companyLogo} alt=""/>
          <h4 className="home_logoname">TransMed</h4>
      </div>
      <div className="login_container">
      <form>
        <input
        placeholder="Username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <button type="submit" className="login_button" onClick={login}>
          Login
        </button>
        {loginError?.length > 0 && (
            <span className="login_errormessage">{loginError}</span>
          )}
      </form>
      </div>
      
    </div>
  );
}
