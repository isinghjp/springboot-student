import React, { useState } from 'react'
import axios from 'axios'

function FindById(props) {
    const [data , setData] = useState("");

    const handle = (e) =>{
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        if(data.id === undefined){
            props.showAlert("No record found!");
        }
        else{
            const endpoint ="http://localhost:8080/students/" + data.id;
            axios.get(endpoint).then((res)=>{
            // console.log(res.data)
                if(res.data === null){
                    props.showAlert("No record found!");
                    setData("");
                }
                else{
                    props.showAlert("Record has been fetched Successfully!");
                    setData(res.data);
                }
            });
        }
        
        
    }

  return (
    <>
    <div className="container w-50 my-3">
    <form onSubmit={(e) => submitHandler(e)}>
            <h2 className ="my-3 text-success">{props.heading}</h2>
            <div className="mb-3">
            <label htmlFor="studentId" className="form-label">Student Id</label>
        <   input onChange={(e) => handle(e)} value={data.id} type="number"  className="form-control" id="id" required/>
            </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    
    <div className="container mt-50 w-50">
    <div>
    <table className="table  my-3">
  <thead className = "table-success">
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">Graduation Year</th>
    </tr>
  </thead>
        <tbody>
            <tr>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.course}</td>
            <td>{data.year}</td>
            </tr>
        </tbody>
</table>
    </div>

    </div>
    
    </>
  )
}

export default FindById