import "./Card.scss";
import axios from "axios";
import { format } from 'timeago.js';


function Card({ data, editHandler, activateTrigger}) {

  const CardEditHandler = () => {
    editHandler(data.id, data.task);
  }

  const CardDeleteHandler = async() => {
    try {
      await axios.delete("http://localhost:3000/deleteTask", {data : {dId: data.id}});
      activateTrigger();
    } catch (error) {
      console.log(error);
    }
  }

  const CardStatusHandler = async() => {
    try {
      await axios.patch("http://localhost:3000/updateStatus", {dId: data.id, status: data.status == "Active" ? "Completed" : "Active"});  
      activateTrigger();
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
      <div className="card">
        <div className="left">
          <p className="title">{data.task}</p>
          <p className="time">{format(data.date)}</p>
          <p className="status">Status: {data.status}</p>
        </div>
        <div className="right">
          <button className="edit" onClick={CardEditHandler}>Edit</button>
          <button className="delete" onClick={CardDeleteHandler}>Delete</button>
          <button className="complete" onClick={CardStatusHandler} style={{ color : data.status == "Active" ? "green" : "#EB8317"}}>{data.status == "Active" ? "Complete" : "Activate"}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
