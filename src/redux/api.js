import axios from "axios";

const BASE_URL = "https://raw.githubusercontent.com";

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: BASE_URL + url,
    data,
    headers,
  });
