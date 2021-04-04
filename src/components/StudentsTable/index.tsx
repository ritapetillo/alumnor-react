import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import IUser from "../../interfaces/IUser";
import { SpanLink, Table } from "../../styles/uiKit";

interface IStudentsTable {
  students: IUser[];
}

const StudentsTable = ({ students }: IStudentsTable) => {
  return (
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
  );
};

export default StudentsTable;
