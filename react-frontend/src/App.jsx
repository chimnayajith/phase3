import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import AttendancePage from './components/AttendancePage';
import AdminPanel from './components/AdminPanel';
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/adminpanel" element={<AdminPanel/>}/>
      <Route path="/attendancepage" element={<AttendancePage/>}/>
      <Route path="/register" element={<Register/>}/>
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  );
}


export default App
