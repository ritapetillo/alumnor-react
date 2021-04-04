import axios from "./axios";
import config from "../config";

export const getPublicCourseById = async (id: string) => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/courses/${id}/public`,
    };
    const resp = await axios(axiosConfig);
    const { course } = await resp.data;
    return course;
  } catch (err) {
    console.log(err);
    return null;
  }
};


export const getAllCourses= async () => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/courses/`,
    };
    const resp = await axios(axiosConfig);
    const { courses } = await resp.data;
    return courses;
  } catch (err) {
    console.log(err);
    return null;
  }
};

