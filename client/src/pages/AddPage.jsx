import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import axios from "axios"
const AddPage = () => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  const [form, setForm] = useState("");
  const changetitle = (e) => {
    setTitle(e.target.value);
  };
  const changeIcon = (e) => {
    setIcon(e.target.value);
  };
  const changeColor = (e) => {
    setColor(e.target.value);
  };
  const changeForm = (e) => {
    setForm(e.target.value);
  };
 const Data ={
  title:title,
  icon:icon,
  color:color,
  form:form
 }
 
 const addPage = async (e) => {
  e.preventDefault();
  axios.post("http://localhost:8000/api/page",Data)
  .then((res) => {
    console.log(res.data)
  })
  .catch((error))
 }
  return (
    <div className="container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName4">Title</label>
            <input
              type="text"
              class="form-control"
              id="inputName4"
              placeholder="Name"
              onChange={changetitle}
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputState">Icon</label>
            <select id="inputState" class="form-control" onChange={changeIcon}>
              <option selected>Choose...</option>
              <option value="EmailIcon">
                <EmailIcon /> Mail Icon
              </option>
              <option value="CalendarTodayIcon">
                <CalendarTodayIcon /> Calender Icon
              </option>
              <option value="PersonIcon">
                <PersonIcon /> Person Icon
              </option>
              <option value="TrackChangesIcon">
                <TrackChangesIcon /> Traker Icon{" "}
              </option>
              <option value="PersonAddAlt1Icon">
                <PersonAddAlt1Icon /> Person Icon{" "}
              </option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">color</label>
            <select id="inputState" class="form-control" onChange={changeColor}>
              <option selected>Choose...</option>
              <option value="#9f98fa">yellow</option>
              <option value="#ebb134">blue</option>
              <option value="#6bcc6a">green</option>
              <option value="#7bc7e3">light blue</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">form</label>
            <select id="inputState" class="form-control" onChange={changeForm}>
              <option selected>Choose...</option>
              <option value="rounded-circle">Rounded</option>
              <option value="rounded-4">Square</option>
            </select>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default AddPage;
