import React, { useState } from 'react'
import axios from 'axios'
import FindById from './FindById';

function DeleteStudent(props) {
    const [data , setData] = useState({
        "id": ""
    });

    const [alert, setAlert] = useState(null);
    const showAlert =(message)=>{
        setAlert({
            msg: message
        });
        setTimeout(()=>{
            setAlert(null);
        },1500);
    }
    const handle = (e) =>{
        const newData = {...data};
        // console.log(newData);
        newData[e.target.id] = e.target.value;
        setData(newData);
        
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        const endpoint ="http://localhost:8080/students/" + data.id;
        axios.delete(endpoint);
        props.showAlert("Student record has been deleted from the database!");
    }

  return (
    <>
    <FindById heading="Search Student" showAlert={showAlert}/>
    <div className="container w-50">
    <form onSubmit={(e) => submitHandler(e)}>
            <h2 className ="my-3 text-success">{props.heading}</h2>
            <div className="mb-3">
            <label htmlFor="studentId" className="form-label">Student Id</label>
        <   input onChange={(e) => handle(e)} value={data.id} type="number"  className="form-control" id="id" required/>
            </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    
    </>
  )
}

export default DeleteStudent