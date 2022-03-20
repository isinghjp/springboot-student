import './App.css';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import StudentData from './Components/StudentData';
import Alert from './Components/Alert';
import { useState } from 'react';
import DeleteStudent from './Components/DeleteStudent';
import FindById from './Components/FindById';
import UpdateStudent from './Components/UpdateStudent';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert =(message)=>{
      setAlert({
        msg: message
      });
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Alert alert={alert}/>
        <Routes>
            <Route exact path="/" element={<Registration heading ="Registration" showAlert={showAlert}/>}/>
            <Route exact path="/findbyId" element={<FindById heading="Search Student by Id" showAlert={showAlert}/>}/>
            <Route exact path="/findAll" element={<StudentData heading ="Get all the registered Students" showAlert={showAlert}/>}/>
            <Route exact path="/update" element={<UpdateStudent heading ="Update Student Details" showAlert={showAlert}/>}/>
            <Route exact path="/delete" element={<DeleteStudent heading="Delete Student Record from the Database" showAlert={showAlert}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

{/*   Without Routing:
      <Navbar/>
      <Alert alert={alert}/>
      <Registration heading ="Registration" showAlert={showAlert}/>
      <StudentData heading ="Get all the registered Students" showAlert={showAlert}/>
      <FindById heading="Search Student by Id" showAlert={showAlert}/>
      <UpdateStudent heading ="Update Student Details" showAlert={showAlert}/>
      <DeleteStudent heading="Delete Student Record from the Database" showAlert={showAlert}/> */}

export default App;
