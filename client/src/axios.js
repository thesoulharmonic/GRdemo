import axios from "axios";

const instance = axios.create({
  baseURL: "http://gondwanarecords-frontend.herokuapp.com/",
});

export default instance;
