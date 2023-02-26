import axios from "axios";

const instance = axios.create({
  baseURL: "https://gondwanarecords-frontend.herokuapp.com/",
});

export default instance;
