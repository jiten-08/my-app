import { useState } from "react";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';
import "./AddTask.css";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [info, setInfo] = useState("");
    const [date, setDate] = useState("");
    const history = useNavigate();

    const header = "Access-Control-Allow-Origin: *";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://66963a720312447373c1a2d2.mockapi.io/p1/project1", {
            title: title,
            info: info,
            date: date,
            header
        })
            .then(() => {
                history("/tasklist"); // Navigate to task list after successful submission
            })
            .catch(error => {
                console.error("Error adding task: ", error);
            });
    }

    return (
            <>
            <form className="form-container">
                <div className="form-segment">
                    <h1>Add Task</h1>
                </div>
                <div className="label-element">
                    <input type="text" className="input-element" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="label-element">
                    <input type="date" className="input-element" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="label-element">
                    <textarea className="input-element" id="floatingTextarea" onChange={(e) => setInfo(e.target.value)}></textarea>
                </div>
                <button type="submit" className="button-element" onClick={handleSubmit}><ion-icon name="add-outline"></ion-icon></button>
              
            </form>
            </>
    );
}

export default AddTask;
