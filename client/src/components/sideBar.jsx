import React ,{useState,useEffect}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios"
import "./sideBar.css";
import Page from "../pages/Page";

const SideBar = () => {
  const [data,setData] = useState([])
 useEffect(() => {
  getTasks()
 }, [])
 
  const getTasks = () => {
    axios
    .get("http://localhost:8000/api/page/all")
    .then((res) => {
      //console.log(res.data)
      setData(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-auto min-vh-100 border border-3 border-light">
          <p className="text-center fw-semibold" style={{ color: "#7bc7e3" }}>
            Tools
          </p>
           <div className="d-flex justify-content-end ">
            <a href="/add"><AddIcon/></a>
           </div>

          <ul>
          {data.map((task,key)=>{
            const CostumTag = `${task.icon}`  
            console.log(CostumTag) 
            return(

            <li>
                    

                <div
                  className={`p-3 ${task.form}`}
                  style={{ backgroundColor:` ${task.color}` }}
                  >
                  <CostumTag
                    sx={{ fontSize: "40px" }}
                    style={{ color: "white" }}
                    />
              </div>
            </li>
            )     
                     })} 

            <li>
              <div
                className="p-3  rounded-4"
                style={{ backgroundColor: "#9f98fa" }}
              >
                <CalendarTodayIcon
                  sx={{ fontSize: "40px" }}
                  style={{ color: "white" }}
                />
              </div>
            </li>
            <li>
              <div
                className="p-3  rounded-circle "
                style={{ backgroundColor: "#7bc7e3" }}
              >
                <TrackChangesIcon
                  sx={{ fontSize: "40px" }}
                  style={{ color: "white" }}
                />
              </div>
            </li>
            <li>
              <div
                className="p-3  rounded-circle"
                style={{ backgroundColor: "#7bc7e3" }}
              >
                <PersonIcon
                  sx={{ fontSize: "40px" }}
                  style={{ color: "white" }}
                />
              </div>
            </li>
            <li>
              <div
                className="p-3  rounded-circle"
                style={{ backgroundColor: "#6bcc6a" }}
              >
                <PersonAddAlt1Icon
                  sx={{ fontSize: "40px" }}
                  style={{ color: "white" }}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="col">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
