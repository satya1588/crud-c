
import NavBar from "./components/NavBar"
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Data from "./components/Data";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
