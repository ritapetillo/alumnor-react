import axios from "./axios";
import config from "../config";

export const createNewFeed = async (courseId: string, data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/feeds/${courseId}/new`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { feed } = await resp.data;
    return feed;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAllFeedByCourseId = async (courseId: string) => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/feeds/course/${courseId}`,
    };
    const resp = await axios(axiosConfig);
    const { feeds } = await resp.data;
    return feeds;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const editFeed = async (id: string, courseId: string, data: {}) => {
  try {
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/feeds/${courseId}/edit/${id}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { feed } = await resp.data;
    return feed;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const deleteFeed = async (id: string, courseId: string) => {
  try {
    const axiosConfig: {} = {
      method: "delete",
      url: `${config.BE_URI}/feeds/${courseId}/delete/${id}`,
    };
    const resp = await axios(axiosConfig);
    const { feed } = await resp.data;
    return feed;
  } catch (err) {
    console.log(err);
    return null;
  }
};
