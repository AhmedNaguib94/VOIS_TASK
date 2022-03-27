import Axios from "axios";

const BaseApi = Axios.create({
  headers: {
    "Content-Type": " application/json",
    Accept: "application/json",
  },
});

export default BaseApi;
