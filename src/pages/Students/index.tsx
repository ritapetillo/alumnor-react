import React, { useEffect, useState } from "react";
import { getAllStudentsPerInstructor } from "../../api/userApi";
import StudentsTable from "../../components/StudentsTable";
import withDashSidebar from "../../HOC/withDashSidebar";
import IUser from "../../interfaces/IUser";
import { StudentsWrap } from "./students.elements";

const Students = () => {
  const [students, setStudents] = useState<IUser[] | undefined>();
  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    const students = await getAllStudentsPerInstructor("me");
    setStudents(students);
  };
  return (
    <StudentsWrap>
      {students && <StudentsTable students={students} />}
    </StudentsWrap>
  );
};

export default withDashSidebar(Students);
