import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import config from "../config";
const axiosC = axios.create();
// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest: any) =>
  axiosC.post(`${config.BE_URI}/auth/refresh`);

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(axiosC, refreshAuthLogic);

axiosC.defaults.withCredentials = true;

export default axiosC;
