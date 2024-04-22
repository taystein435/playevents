/* eslint-disable no-undef */
import axios from "axios";

export const makeRequest = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2/'
//   headers: {
//     Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
//   },
});