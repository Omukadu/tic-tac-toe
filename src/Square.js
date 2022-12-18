import React from "react";

function Square(props) {
  return (
    <div className="square" onClick={props.onClick}>
      <h1>{props.value}</h1>
    </div>
  );
}

export default Square;
