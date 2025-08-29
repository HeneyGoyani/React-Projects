import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import StudentHeader from './Components/Header';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import Home from './Components/Home';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import StudentView from './Components/StudentView';

function App() {
   const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
      <StudentHeader onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
        <Route path="/students/view/:id" element={<StudentView />} />
        {/* <Route path="*" element={<h2>404 Page Not Found</h2>} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App

