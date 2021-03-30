import Quill from "quill";
import { Linkify } from "quill-linkify";
import ImageUploader from "quill-image-uploader";

Quill.register("modules/linkify", Linkify);
Quill.register("modules/imageUploader", ImageUploader);
const { REACT_APP_IMGBB_API_URI } = process.env;

export const modules = {
  linkify: true,
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  imageUploader: {
    upload: (file: any) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("image", file);

        fetch(REACT_APP_IMGBB_API_URI!, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            resolve(result.data.url);
          })
          .catch((error) => {
            reject("Upload failed");
            console.error("Error:", error);
          });
      });
    },
  },
};

export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
