import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useParams } from "react-router";
import { getAllStudentsPerCourse } from "../../api/userApi";
import IUser from "../../interfaces/IUser";
import { SpanLink, Table } from "../../styles/uiKit";
import { CoursePartecipantsWrapper } from "./ coursepartecipants.elements";
const CoursePartecipants = () => {
  const params: { id: string } = useParams();
  const [students, setStudents] = useState<IUser[] | undefined>();

  useEffect(() => {
    getAllStudents();
  }, [params]);

  const getAllStudents = async () => {
    const students = await getAllStudentsPerCourse(params.id);
    setStudents(students);
  };

  return (
    <CoursePartecipantsWrapper>
      <h2>Students</h2>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Enrollments</th>
            <th></th>
          </tr>
        </thead>
        {students &&
          students.map((student: IUser, i: number) => (
            <tr>
              <th>{i + 1}</th>
              <th>{student.firstName}</th>
              <th>{student.lastName}</th>
              <th>{student.email}</th>
              <th>
                {student.enrollments.map((enrollment: any) => (
                  <>
                    {" "}
                    <SpanLink>{enrollment.courseId.title}</SpanLink>{" "}
                  </>
                ))}
              </th>
              <th>
                <AiOutlineMail />
              </th>
            </tr>
          ))}
      </Table>
    </CoursePartecipantsWrapper>
  );
};

export default CoursePartecipants;
