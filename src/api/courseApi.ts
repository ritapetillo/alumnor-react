import axios from "axios";
import config from "../config";

export const createNewCourse = async (data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/courses/new`,
      data,
    };
    const resp = await axios(axiosConfig);
    const course = await resp.data.course;
    return course._id;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getCurrentUserCoursesAsInstructor = async () => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/courses/instructor/me`,
    };
    const resp = await axios(axiosConfig);
    const courses = await resp.data.courses;
    return courses;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getCourseById = async (id: string) => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/courses/${id}`,
    };
    const resp = await axios(axiosConfig);
    const course = await resp.data.course;
    return course;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createANewSession = async (courseId: string, data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/sections/${courseId}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { section } = await resp.data;
    return section._id;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const reorderCourseSection = async (courseId: string, data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/courses/reorder/${courseId}/sections`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { course } = await resp.data;
    return course;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const editCourse = async (courseId: string, data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/courses/edit/${courseId}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { course } = await resp.data;
    return course;
  } catch (err) {
    console.log(err);
    return null;
  }
};
