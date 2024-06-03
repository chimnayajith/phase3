import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Profile from './components/Profile';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route path="/login" element={<Login />} />
      <Route path="/profile" element={Profile}/>
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  );
}


export default App
