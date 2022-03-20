import React, { useState } from 'react'
import axios from 'axios';

function UpdateStudent(props) {
    const [data, setData] = useState({
        "id": "",
        "name": "",
        "course": "",
        "year": ""
    })

    const handle = (e) =>{
        const newData = {...data};
        // console.log(newData);
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const url = "http://localhost:8080/students/" + data.id;
        console.log(url);
        axios.put(url,{
            "id": parseInt(data.id),
            "name": data.name,
            "course": data.course,
            "year": parseInt(data.year)
        }).then((res)=>{
            console.log(res.data);
        })
        props.showAlert("Record has been updated Successfully!");
    }

  return (
    <>
    <div className="container w-50">
    <form method="POST" onSubmit={(e) => submitHandler(e)}>
    <h2 className ="my-3 text-success">{props.heading}</h2>
    <div className="mb-3">
        <label htmlFor="studentId" className="form-label">Student Id</label>
        <input onChange={(e) => handle(e)} value={data.id} type="number"  className="form-control" id="id" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="studentName" className="form-label">Student Name</label>
        <input onChange={(e) => handle(e)} value={data.name} type="text" className="form-control" id="name" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="studentCourse" className="form-label">Course</label>
        <input onChange={(e) => handle(e)} value={data.course} type="text" className="form-control" id="course" required />
    </div>
    <div className="mb-3">
        <label htmlFor="Year" className="form-label">Graduation Year</label>
        <input onChange={(e) => handle(e)} value={data.year} type="number" className="form-control" id="year" required/>
    </div>

    <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    
    </>
  )
}

export default UpdateStudent