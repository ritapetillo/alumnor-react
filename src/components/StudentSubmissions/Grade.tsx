import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillCheckSquare } from "react-icons/ai";
import { useParams } from "react-router";
import { editSubmission } from "../../api/courseApi";

const Grade = ({
  grade,
  submissionId,
}: {
  grade: any;
  submissionId: string;
}) => {
  const [edit, setEdit] = useState(false);
  const [graded, setGraded] = useState<string | undefined>();
  const params: { id: string } = useParams();

  useEffect(() => {
    setGraded(grade);
  }, []);
  const handleSubmitGrade = async () => {
    const data = {
      grade: graded,
    };
    const submitGrade = await editSubmission(params.id, submissionId, data);
    if (submitGrade) {
      setEdit(!edit);
    }
  };

  return (
    <th>
      {graded}{" "}
      {!edit ? (
        <AiFillEdit onClick={() => setEdit(!edit)} />
      ) : (
        <>
          <input type="text" onChange={(e) => setGraded(e.target.value)} />
          <AiFillCheckSquare onClick={handleSubmitGrade} />
        </>
      )}
    </th>
  );
};

export default Grade;
