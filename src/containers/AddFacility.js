import React, { useState, useEffect } from "react";
import "./AddFacility.css";
import RegionsData from "../data/Regions.json";
import { Months } from "../data/Constants";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";

export default function AddFacility() {
  const history = useHistory();

  const [siteName, setSiteName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [regionId, setRegionId] = useState("");
  const [formErrors, setFormErrors] = useState({
    siteNameErr: "",
    emailErr: "",
    addressErr: "",
    countryErr: "",
  });
  const formValid = (formErrors) => {
    let valid = true;
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    return valid;
  };
  const [{ facility }, dispatch] = useStateValue();
  const addToFacility = () => {
    if (formValid(formErrors) && (siteName||email||address||country)){
      dispatch({
        type: "ADD_TO_FACILITY",
        item: {
          Sitename: siteName,
          Email: email,
          Address: address,
          Country: country,
          StartMonth: startMonth,
          RegionId: regionId,
        },
      });
    history.push("/facilities");
    }
    else{
      alert("Enter the required fields")
    }
      
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "siteName":
        setSiteName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "month":
        setStartMonth(value);
        break;
      case "region":
        setRegionId(value);
        break;
    }

    
  };
  useEffect(() => {
    let formErrorsCopy = formErrors;
    formErrorsCopy.siteNameErr = !siteName ? "Site Name Required" : "";
    formErrorsCopy.emailErr = !email ? "Email Required" : "";
    formErrorsCopy.addressErr = !address ? "Address Required" : "";
    formErrorsCopy.countryErr = !country ? "Country Required" : "";

    setFormErrors(formErrorsCopy);
  }, [siteName,email,address,country,startMonth,regionId]);
  return (
    <div className="addfacility">
      <h2>Add New Facility</h2>
      <form className="addfacility_details">
        <div className="addfacility_details_left">
          <h3>SiteName*</h3>
          <Input
            name="siteName"
            type="text"
            value={siteName}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.siteNameErr?.length > 0 && (
            <span className="errorMessage">{formErrors.siteNameErr}</span>
          )}
          <h3>Email*</h3>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.emailErr?.length > 0 && (
            <span className="errorMessage">{formErrors.emailErr}</span>
          )}
          <div className="dropdown">
            <h3>Potential Start Month</h3>
            <select
              name="month"
              className="addfacility_select"
              onChange={(e) => handleChange(e)}
            >
              <option>Please Choose a month</option>
              {Months.map((month, key) => {
                return (
                  <option key={key} value={month.value}>
                    {month.MonthName}
                  </option>
                );
              })}
            </select>
            
          </div>
        </div>

        <div className="addfacility_details_right">
          <h3>Address*</h3>
          <Input
            name="address"
            type="text"
            value={address}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.addressErr?.length > 0 && (
            <span className="errorMessage">{formErrors.addressErr}</span>
          )}

          <h3>Country*</h3>
          <Input
            name="country"
            type="text"
            value={country}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.countryErr?.length > 0 && (
            <span className="errorMessage">{formErrors.countryErr}</span>
          )}

          <div className="dropdown">
            <h3>Region</h3>
            <select
              className="addfacility_select"
              name="region"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Please Choose a Region</option>
              {RegionsData.map((region, key) => {
                return (
                  <option key={key} value={region.ID}>
                    {region.RegionName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="addfacility_btndiv">
        <button
          type="submit"
          className="addfacility_savebtn"
          onClick={addToFacility}
        >
          Save
        </button> 
        </div>
        
      </form>
    </div>
  );
}
