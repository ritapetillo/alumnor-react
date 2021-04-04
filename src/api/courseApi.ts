import { FormatAlignCenter, FormatShapes } from "@material-ui/icons";
import axios from "./axios";
import config from "../config";
import zoomAxios from "./zoomAxios";

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

export const deleteCourse = async (courseId: string) => {
  try {
    const axiosConfig: {} = {
      method: "delete",
      url: `${config.BE_URI}/courses/delete/${courseId}`,
    };
    const resp = await axios(axiosConfig);
    const { course } = await resp.data;
    return course;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const uploadCoursePicture = async (
  courseId: string,
  upload: FormData
) => {
  try {
    const axiosConfig: {} = {
      method: "put",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `${config.BE_URI}/courses/picture/${courseId}`,
      data: upload,
    };
    const resp = await axios(axiosConfig);
    const { picture } = await resp.data;
    return picture;
  } catch (err) {
    console.log(err);
    return null;
  }
};

////////////SECTIONS

export const editSectionById = async (
  courseId: string,
  id: string,
  data: {}
) => {
  try {
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/sections/${courseId}/edit/${id}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { section } = await resp.data;
    return section;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteSection = async (courseId: string, id: string) => {
  try {
    const axiosConfig: {} = {
      method: "delete",
      url: `${config.BE_URI}/sections/${courseId}/delete/${id}`,
    };
    const resp = await axios(axiosConfig);
    const { section } = await resp.data;
    return section;
  } catch (err) {
    console.log(err);
    return null;
  }
};

////////////ACTIVIVITIES
export const createANewActivity = async (
  courseId: string,
  sectionId: string,
  data: {}
) => {
  try {
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/activities/${courseId}/${sectionId}/`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { activity } = await resp.data;
    return activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getActivityById = async (id: string) => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/activities/${id}`,
    };
    const resp = await axios(axiosConfig);
    console.log(resp);
    const { activity } = await resp.data;
    return activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getActivitiesByQuery = async (courseId: string, query: string) => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/activities/${courseId}?${query}`,
    };
    const resp = await axios(axiosConfig);
    const { activities } = await resp.data;
    return activities;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const editActivityById = async (
  courseId: string,
  id: string,
  data: {}
) => {
  try {
    console.log(data);
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/activities/${courseId}/edit/${id}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { activity } = await resp.data;
    return activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const deleteActivity = async (courseId: string, id: string) => {
  try {
    const axiosConfig: {} = {
      method: "delete",
      url: `${config.BE_URI}/activities/${courseId}/delete/${id}`,
    };
    const resp = await axios(axiosConfig);
    const activity = await resp.data;
    return activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const editLiveActivityById = async (
  courseId: string,
  id: string,
  data: {}
) => {
  try {
    console.log(data);
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/activities/${courseId}/edit-live/${id}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { activity } = await resp.data;
    return activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const uploadDocumentsActivity = async (
  courseId: string,
  id: string,
  uploads: FormData
) => {
  try {
    // @ts-ignore
    for (let key of uploads.entries()) {
      console.log(key);
    }

    const axiosConfig: {} = {
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `${config.BE_URI}/activities/${courseId}/${id}/upload`,
      data: uploads,
    };
    const resp = await axios(axiosConfig);
    const { activity } = await resp.data;
    return activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteFileFromActivity = async (
  courseId: string,
  id: string,
  data: {}
) => {
  try {
    const axiosConfig: {} = {
      method: "put",
      url: `${config.BE_URI}/activities/${courseId}/${id}/file/delete`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { activity } = await resp.data;
    return activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const generateLiveLink = async (
  courseId: string,
  id: string,
  data: {}
) => {
  try {
    console.log(data);
    const axiosConfig: {} = {
      method: "post",
      url: `${config.BE_URI}/activities/${courseId}/${id}/zoom-link`,
      data,
    };
    const resp = await zoomAxios(axiosConfig);
    const { link } = await resp.data;
    return link;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const submitAssignment = async (
  courseId: string,
  assignmentId: string,
  data: {}
) => {
  try {
    const axiosConfig: {} = {
      method: "post",

      url: `${config.BE_URI}/submissions/${courseId}/${assignmentId}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { submission } = await resp.data;
    return submission;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const uploadSubmissionDocuments = async (
  courseId: string,
  submissionId: string,
  uploads: FormData
) => {
  try {
    const axiosConfig: {} = {
      method: "put",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `${config.BE_URI}/submissions/${courseId}/upload/${submissionId}`,
      data: uploads,
    };
    const resp = await axios(axiosConfig);
    const { activity } = await resp.data;
    return activity;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const editSubmission = async (
  courseId: string,
  submissionId: string,
  data: {}
) => {
  try {
    const axiosConfig: {} = {
      method: "put",

      url: `${config.BE_URI}/submissions/${courseId}/edit/${submissionId}`,
      data,
    };
    const resp = await axios(axiosConfig);
    const { submission } = await resp.data;
    return submission;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAllSubmissionByCourse = async (courseId: string) => {
  try {
    const axiosConfig: {} = {
      method: "get",

      url: `${config.BE_URI}/submissions/${courseId}`,
    };
    const resp = await axios(axiosConfig);
    const { submissions } = await resp.data;
    return submissions;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAllActivitiesCurrentStudent = async () => {
  try {
    const axiosConfig: {} = {
      method: "get",
      url: `${config.BE_URI}/activities/student/me`,
    };
    const resp = await axios(axiosConfig);
    const { activities } = await resp.data;
    return activities;
  } catch (err) {
    console.log(err);
    return null;
  }
};
