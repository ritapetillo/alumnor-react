import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import config from "../config";

const zoomAxios = axios.create();
// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest: any) =>
  zoomAxios.post(`${config.BE_URI}/auth/zoom/refresh`);

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(zoomAxios, refreshAuthLogic);

zoomAxios.defaults.withCredentials = true;

export default zoomAxios;
