import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar";
import Page from "./pages/Page";
import AddPage from "./pages/AddPage";

function App() {
  return (
   
      // <div>
      //   <SideBar />
      // </div>
    
    <Router>
      
      <Routes>
        <Route path="/" element={<SideBar/>}/>
        <Route path="/add" element={<AddPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
