import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spacexdata.com/v3/launches",
});

api.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error("An unexpected error occurrred.");
  }
  return Promise.reject(error);
});

export default {
  get: api.get,
  post: api.post,
  put: api.put,
  delete: api.delete,
};
