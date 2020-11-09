import React from "react";

export default function TodoItem(props) {
  let itemStyle = { textDecoration: props.completed ? "line-through" : "none" };
  return (
    <div>
      <li style={itemStyle} className="list-group-item">
        <input
          onChange={() => {
            console.log("need to toggle " + props.id);
            // props.completed = !props.completed; // true/false switch
            props.toggleItem(props.id);
          }}
          checked={props.completed}
          type="checkbox"
          className="mr-2"
        />
        {props.name} <small className="text-secondary">ID of {props.id}</small>
      </li>
    </div>
  );
}
