import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateTask = () => {
  const [date, setDate] = useState("");
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState(""); // State to store task ID
  const history = useNavigate();

  useEffect(() => {
    // Fetch initial data from localStorage
    setDate(localStorage.getItem("date") || "");
    setInfo(localStorage.getItem("info") || "");
    setTitle(localStorage.getItem("title") || "");
    setId(localStorage.getItem("id") || ""); // Set the task ID from localStorage
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    // Make sure to replace {id} in the URL with the actual task ID
    axios
      .put(`https://66963a720312447373c1a2d2.mockapi.io/p1/project1/${id}`, {
        title: title,
        info: info,
        date: date,
      })
      .then(() => {
        console.log("Task updated successfully!");
        history("/tasklist"); // Navigate to task list after successful update
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        // Handle error state or show user-friendly message
      });
  };

  return (
    <>
    <div style={{paddingTop:"20px"}} className="form-segment">
          <h1>
            Update Task of {date}
          </h1>
        </div>
      <form className="form-container">
        <div className="label-element">
          <input
            type="text"
            className="input-element"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="label-element">
          <input
            type="date"
            className="input-element"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="label-element">
          <textarea
            className="input-element"
            id="floatingTextarea"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="button-element"
          onClick={handleUpdate}
        >
          <ion-icon name="add-outline"></ion-icon>
        </button>
        
      </form>
    </>
  );
};

export default UpdateTask;
