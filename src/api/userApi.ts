import config from "../config";
import axios from "./axios";

export const loginApi = async (credentials: {}) => {
  try {
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

export const signupApi = async (credentials: {}) => {
  try {
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/auth/signup`,
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

export const logoutApi = async () => {
  try {
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/auth/logout`,
      data: "",
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

export const linkUserToZoom = async () => {
  try {
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/auth/zoom/link-account`,
      data: "",
    };
    const res = await axios(axiosConfig);
    const data = await res.data;
    if (data) return data;
    else return null;
  } catch (err) {
    return null;
  }
};

export const getAllStudentsPerInstructor = async (id: string) => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/students/instructor/${id}`,
    };
    const res = await axios(axiosConfig);
    const { users } = res.data;
    return users;
  } catch (err) {
    return null;
  }
};
