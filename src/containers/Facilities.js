import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Facilities.css";
import FacilitiesData from "../data/Facilities.json";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import Card from '../components/Card.js'

export default function Facilities() {
  const history = useHistory();
  const [searchItem, setSearchItem] = useState("");
  const [{ facility, user }, dispatch] = useStateValue();
  const [newFacilities, setnewFacilities] = useState(FacilitiesData);
  const addNewFacility = () => {
    history.push("/addFacilities");
  };
  useEffect(() => {
    if (facility) {
      setnewFacilities(newFacilities.concat(facility));
    }
  }, [facility]);
  return (
    <div className="facilities">
      <h2>Facilities Search</h2>
      <div className="facilities_search">
        <input
          className="facilities_searchInput"
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <SearchIcon className="facilities_searchIcon" />
        <button className="facilities_addbtn" onClick={addNewFacility}>
          Add New
        </button>
      </div>
      <div className="facilities_list">
        {newFacilities
          .filter((facilities) => {
            if (searchItem === "") {
              return facilities;
            } else if (
              facilities.Sitename.toLowerCase().includes(
                searchItem.toLowerCase()
              )
            )
              return facilities;
          })
          .map((facilities, index) => {
            return (
              <Card
                key={index}
                topLabel={facilities.Sitename}
                bottomLabel={facilities.Address}
              />
            );
          })}
      </div>
    </div>
  );
}
