import { useState } from "react";
import Student from "./Student";

const Body = () => {
  const [studentInfo, setStudentInfo] = useState([
    { id: 1, name: "Akansha", sec: "D", Dept: "MCA" },
    { id: 2, name: "Rahul", sec: "A", Dept: "BTech" },
    { id: 3, name: "Priya", sec: "B", Dept: "BCA" },
    { id: 4, name: "Amit", sec: "C", Dept: "MBA" },
  ]);

  return (
    <>
    <div>
      <h2 className="bg-warning text-primary text-center">Student Information</h2>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Sec</th>
            <th>Dept</th>
          </tr>
        </thead>
        <tbody className="table-success">
          {studentInfo.map((student) => (
            <Student 
              key={student.id} 
              id={student.id} 
              name={student.name} 
              sec={student.sec} 
              Dept={student.Dept} 
            />
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Body;
