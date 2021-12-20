//axios is a very famous fetch library it allows us to interact with the apis
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-b76ce/us-central1/api", //the api url (cloud funtion)
});
export default instance;
