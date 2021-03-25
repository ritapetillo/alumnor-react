import config from "../config";
import axios from "./axios";

export const loginApi = async (credentials: {}) => {
  try {
    console.log(config);
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/auth/login`,
      data: credentials,
    };
    const res = await axios(axiosConfig);
    const data = await res.data;
    if (data) return data;
    else return null;
  } catch (err) {
    return null;
  }
};

export const getCurrentUserApi = async () => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/users/me`,
    };
    const res = await axios(axiosConfig);
    const data = await res.data;
    if (data) return data.user;
    else return null;
  } catch (err) {
    return null;
  }
};

export const getCurrentUrl = async (currentUrl: string) => {
  try {
    const url = { url: currentUrl };
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/users/current-url`,
      data: url,
    };
    const res = await axios(axiosConfig);
    const data = await res.data;
    if (data) return data;
    else return null;
  } catch (err) {
    return null;
  }
};
