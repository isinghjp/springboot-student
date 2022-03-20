import React, { useState } from 'react'
import axios from 'axios'


function SpringApi() {
    const [data, setData] = useState([]);

    const ApiCall =() =>{
      console.log("Api");
      axios.get("http://localhost:8080/students/").then((response)=>{
        console.log(response);
      });
      
    }

  return (
    <>
    <button type="button" className="btn btn-primary my-3" onClick={ApiCall}>Get all students</button>
    </>
  )
}

export default SpringApi