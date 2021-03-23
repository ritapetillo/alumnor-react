import React, { useState } from "react";
import ReactQuill from "react-quill"; // Typescript
import { Row } from "../../styles/grid";
import "react-quill/dist/quill.snow.css"; // ES6

const Materials = () => {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    console.log(e);
  };
  return (
    <Row>
      <ReactQuill value={text} onChange={(e) => handleChange(e)} />
    </Row>
  );
};

export default Materials;
