import "./TaskList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const getData = () => {
    axios
      .get("https://66963a720312447373c1a2d2.mockapi.io/p1/project1")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(
        `https://66963a720312447373c1a2d2.mockapi.io/p1/project1/${id}`,
        {}
      )
      .then(() => {
        getData();
      });
  };
  const setToLocalStorage = (date, id, info, title) => {
    localStorage.setItem("id", id);
    localStorage.setItem("date", date);
    localStorage.setItem("info", info);
    localStorage.setItem("title", title);
  };
  return (
    <div className="task-list-body">
      {tasks.map((task) => (
        <div key={task.id || task.title + task.date} className="task-card">
          <p className="task-date">{task.date}</p>
          <h2 className="task-title">{task.title}</h2>
          <p className="task-info">{task.info}</p>
          <button className="delete-btn" onClick={() => handleDelete(task.id)}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <Link to={"/updatetask"}>
            {" "}
            <button
              className="update-btn"
              onClick={() =>
                setToLocalStorage(task.date, task.id, task.info, task.title)
              }
            >
              <ion-icon name="create-outline"></ion-icon>{" "}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
