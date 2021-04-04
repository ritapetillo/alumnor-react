import axios from "./axios";
import config from "../config";

export const createNewEnrollment = async (data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/enrollments/new`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { enrollment } = await resp.data;
    return enrollment;
  } catch (err) {
    return null;
  }
};
