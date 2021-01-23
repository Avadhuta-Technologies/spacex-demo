import React, { useEffect, useState } from "react";
import spaceItemcss from "./filtercss.css";

const SpaceFilter = ({
  onHandleYear,
  onHandleLanding,
  onHandleLunch,
  selectedLunch,
  selectedLanding,
  filter,
  selectedYear,
}) => {
  const getFilterValue = () => {
    if (filter && filter.length) {
      return filter.map((item) => {
        return (
          <div
            className={
              selectedYear && selectedYear === item
                ? "year selectedItem"
                : "year"
            }
            onClick={() => {
              onHandleYear(item);
            }}
            key={item}
          >
            {item}
          </div>
        );
      });
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="space-filter">
        <h4>Filters</h4>
        <div className="filter-list">
          <p className="title">Launch Year</p>
          {getFilterValue()}
          <p className="title">SuccessFull Launch</p>
          <div
            className="year"
            className={
              selectedLunch && selectedLunch === "true"
                ? "year selectedItem"
                : "year"
            }
            onClick={() => {
              onHandleLunch("true");
            }}
          >
            {"True"}
          </div>
          <div
            className="year"
            className={
              selectedLunch && selectedLunch === "false"
                ? "year selectedItem"
                : "year"
            }
            onClick={() => {
              onHandleLunch("false");
            }}
          >
            {"False"}
          </div>
          <p className="title">SuccessFull Landing</p>
          <div
            className={
              selectedLanding && selectedLanding === "true"
                ? "year selectedItem"
                : "year"
            }
            onClick={() => {
              onHandleLanding("true");
            }}
          >
            {"True"}
          </div>
          <div
            className={
              selectedLanding === "false" ? "year selectedItem" : "year"
            }
            onClick={() => {
              onHandleLanding("false");
            }}
          >
            {"False"}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceFilter;
