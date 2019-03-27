import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
        <img alt={props.name} src={props.image} id={props.id} onClick={ () => props.handleImgClick(props.id)} />
    </div>
  );
}

export default Card;
