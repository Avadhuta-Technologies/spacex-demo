import React, { useEffect, useState } from "react";
import SpaceFilter from "../Filter/filter";
import spaceItemcss from "./spaceList.css";
import spaceService from "../../service/space.service";
import SpaceItemCard from "../SpaceCard/spaceItemCard";
import Loader from "../Loader/loader";

const SpaceList = ({ spaceItem }) => {
  const [spaceDataList, setSpaceDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLunch, setSelectedLunch] = useState("");
  const [selectedLanding, setSelectedLanding] = useState("");
  const filter = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  const getAllSpaceData = async () => {
    try {
      const { data: spaceData } = await spaceService.getAllSpaceData();
      if (spaceData) {
        setSpaceDataList(spaceData);
      }
      setLoading(false);
      //console.log(spaceData, "spacedata");
    } catch (err) {
      console.log(err, "err");
      setLoading(false);
    }
  };

  const getAllSpaceDataWithFilter = async (year, lunch, landing) => {
    setLoading(true);
    try {
      const { data: spaceData } = await spaceService.getAllSpaceDataWithFilter(
        year,
        lunch,
        landing
      );
      if (spaceData) {
        setSpaceDataList(spaceData);
        setLoading(false);
      }
      //console.log(spaceData, "spacedata");
    } catch (err) {
      console.log(err, "err");
      setLoading(false);
    }
  };

  const onHandleYear = (year) => {
    if (selectedYear === year) {
      setSelectedYear("");
      getAllSpaceDataWithFilter("", selectedLunch, selectedLanding);
    } else {
      setSelectedYear(year);
      getAllSpaceDataWithFilter(year, selectedLunch, selectedLanding);
    }
  };

  const onHandleLanding = (landing) => {
    console.log(landing, "landing");
    if (selectedLanding === landing) {
      setSelectedLanding("");
      getAllSpaceDataWithFilter(selectedYear, selectedLunch, "");
    } else {
      setSelectedLanding(landing);
      getAllSpaceDataWithFilter(selectedYear, selectedLunch, landing);
    }
  };

  const onHandleLunch = (lunch) => {
    if (selectedLunch === lunch) {
      setSelectedLunch("");
      getAllSpaceDataWithFilter(selectedYear, "", selectedLanding);
    } else {
      setSelectedLunch(lunch);
      getAllSpaceDataWithFilter(selectedYear, lunch, selectedLanding);
    }
  };

  useEffect(() => {
    getAllSpaceData();
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <h3 style={{ marginBottom: 10 }}>SpaceX Launch Programs</h3>
      <div className="space-container">
        <div className="filter">
          <SpaceFilter
            onHandleYear={(year) => onHandleYear(year)}
            onHandleLunch={(lunch) => onHandleLunch(lunch)}
            onHandleLanding={(landing) => onHandleLanding(landing)}
            filter={filter}
            selectedLunch={selectedLunch}
            selectedLanding={selectedLanding}
            selectedYear={selectedYear}
          />
        </div>
        <div className="space-list">
          {spaceDataList &&
            spaceDataList.length >= 1 &&
            spaceDataList.map((item) => {
              return (
                <SpaceItemCard spaceItem={item} key={item.flight_number} />
              );
            })}

          {!loading && spaceDataList.length === 0 && (
            <div className="no-data">
              <h3>No Data Found</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SpaceList;
