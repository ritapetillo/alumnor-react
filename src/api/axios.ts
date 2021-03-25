import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import config from "../config";

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest: any) =>
  axios.post(`${config.BE_URI}/auth/refresh`);

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(axios, refreshAuthLogic);

axios.defaults.withCredentials = true;

export default axios;
