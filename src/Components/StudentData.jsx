import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function StudentData(props) {
    const [student, setStudent] = useState([]);

    const ApiCall = () =>{
      axios.get("http://localhost:8080/students/").then((response)=>{
        console.log(response);
        setStudent(response.data);
        props.showAlert("Record has been fetched Successfully!");
      });
    }

  return (
    
    <>
    <div className="container mt-50 w-50 my-3">
      <h2 className="text-success">{props.heading}</h2>
    <button type="button" className="btn btn-success my-3" onClick={ApiCall}>Get all students</button>
    <div onLoad={ApiCall}>
    <table className="table ">
  <thead className = "table-success">
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">Graduation Year</th>
    </tr>
  </thead>
  {
      student.map((value)=>{
          return(
            <tbody>
                <tr>
                <th scope="row">{value.id}</th>
                <td>{value.name}</td>
                <td>{value.course}</td>
                <td>{value.year}</td>
                </tr>
            </tbody>
          )
      })
  }
</table>
    </div>

    </div>
    
    </>
  )
}

export default StudentData