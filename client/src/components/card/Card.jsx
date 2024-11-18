import { useState } from "react";
import "./Card.scss";

function Card({ data }) {
  return (
    <div>
      <div className="card">
        <div className="left">
          <p className="title">{data.task}</p>
          <p>{data.date}</p>
          <p>Status: {data.status}</p>
        </div>
        <div className="right">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
          <button className="complete">Complete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
