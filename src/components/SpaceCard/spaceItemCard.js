import React, { useEffect, useState } from "react";
import spaceItemcss from "./spaceItemcss.css";

const SpaceItemCard = ({ spaceItem }) => {
  const getMissionIds = (missionIdList) => {
    if (missionIdList && missionIdList.length) {
      return missionIdList.map((item) => {
        return <li key={item}>{item}</li>;
      });
    }
  };

  return (
    <div className="space-card" key={spaceItem.flight_number + "Anki"}>
      <div className="image-container">
        <img src="https://images2.imgbox.com/40/e3/GypSkayF_o.png" />
      </div>
      <div className="content">
        <h4 className="heading">
          {spaceItem.mission_name} # {spaceItem.flight_number}
        </h4>
        <div className="row">
          <h4>
            mission Ids :{" "}
            {spaceItem.mission_id && spaceItem.mission_id.length === 0
              ? "no data found"
              : ""}
          </h4>
          <ul>{getMissionIds(spaceItem.mission_id)}</ul>
        </div>
        <div className="row" style={{ display: "flex", marginBottom: 5 }}>
          <h4>Launch Year : </h4>
          <h4 style={{ color: "#6798bf" }}>{spaceItem.launch_year}</h4>
        </div>
        <div className="row" style={{ display: "flex", marginBottom: 5 }}>
          <h4>Successfull Launch : </h4>
          <h4 style={{ color: "#6798bf" }}>
            {spaceItem.launch_success ? "true" : "false"}
          </h4>
        </div>
        <div className="row">
          <h4>Successfull Landing : </h4>
          <ul>
            {spaceItem && spaceItem.launch_landing
              ? spaceItem.launch_landing
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpaceItemCard;
