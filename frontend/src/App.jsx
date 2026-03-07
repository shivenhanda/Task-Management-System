import { Link, Route, Routes } from "react-router-dom";
import AddTask from "./AddTask";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import ViewTask from "./ViewTask";
import './App.css'

export default function App(){
  return(
    <>
    <div className="header">
    <Link to="/" className="a">Home</Link>
    <Link to="/addtask" className="a">Add Task</Link>
    <Link to="/updatetask" className="a">Update Task</Link>
    <Link to="/deletetask" className="a">Delete Task</Link>
    </div>
    <div className="content">
    <Routes>
        <Route path="/" element={<ViewTask/>}/>
        <Route path="/addtask" element={<AddTask/>}/>
        <Route path="/updatetask" element={<UpdateTask/>}/>
        <Route path="/deletetask" element={<DeleteTask/>}/>
    </Routes>
    </div>
    </>
  )
}