import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllStudentsPerCourse } from "../../api/userApi";
import IUser from "../../interfaces/IUser";
import isInstructor from "../../libs/isInstructor";
import { RootStore } from "../../store";
import { SpanLink, Table } from "../../styles/uiKit";
import { CoursePartecipantsWrapper } from "./ coursepartecipants.elements";
const CoursePartecipants = () => {
  const params: { id: string } = useParams();
  const [students, setStudents] = useState<IUser[] | undefined>();
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const [isStudent, setIsStudent] = useState(true);
  useEffect(() => {
    getAllStudents();
    setIsStudent(!isInstructor(currentUser,currentCourse))
  }, [params,currentUser._id]);

  const getAllStudents = async () => {
    const students = await getAllStudentsPerCourse(params.id);
    setStudents(students);
  };

  return (
    <CoursePartecipantsWrapper>
      <h2>Course Partecipants</h2>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Last Name</th>
            {!isStudent &&<> <th>Email</th>
            <th>Enrollments</th></>}
            <th></th>
          </tr>
        </thead>
        {students &&
          students.map((student: IUser, i: number) => (
            <tr>
              <th>{i + 1}</th>
              <th>{student.firstName}</th>
              <th>{student.lastName}</th>
              {!isStudent && (
                <>
                  <th>{student.email}</th>
                  <th>
                    {student.enrollments.map((enrollment: any) => (
                      <>
                        {" "}
                        <SpanLink>{enrollment.courseId.title}</SpanLink>{" "}
                      </>
                    ))}
                  </th>
                </>
              )}
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
