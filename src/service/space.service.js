import http from "./httpService";

const getAllSpaceData = () => {
  return http.get(`?limit=100`);
};

const getAllSpaceDataWithFilter = (year, launch, landing) => {
  let launchParams = null;
  let yearParams = null;
  let landingParams = null;
  if (year) {
    yearParams = `&launch_year=${year}`;
  }
  if (launch) {
    launchParams = `&launch_success=${launch}`;
  }
  if (landing) {
    landingParams = `&land_success=${landing}`;
  }
  let url = `?limit=100${launchParams ? launchParams : ""}${
    landingParams ? landingParams : ""
  }${yearParams ? yearParams : ""}`;
  return http.get(url);
};

export default {
  getAllSpaceData,
  getAllSpaceDataWithFilter,
};
