import axios from "./axios";
import config from "../config";

export const createNewCategory = async (data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/categories/new`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { category } = await resp.data;
    return category;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const editCategory = async (id: string, data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/categories/edit/${id}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { category } = await resp.data;
    return category;
  } catch (err) {
    console.log(err);
    return null;
  }
};
