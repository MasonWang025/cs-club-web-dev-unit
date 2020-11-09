import React, { useState } from "react";
import AddItem from "./AddItem";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  let [items, updateItems] = useState([
    // { id: 1, completed: false, name: "Calc HW" },
    // { id: 2, completed: false, name: "APCS HW" },
    // { id: 3, completed: true, name: "History HW" },
  ]);

  let toggleItem = (id) => {
    console.log("toggling " + id);
    // updateItems
    let updated = items.map((item) => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });

    updateItems(updated);
  };

  let addItem = (name) => {
    updateItems([...items, { id: uuidv4(), completed: false, name: name }]);
  };

  return (
    <div className="row justify-content-center py-2">
      <div className="col-12 col-md-6">
        <ul className="list-group text-left">
          <li className="list-group-item active">
            <b>{props.title}</b>
          </li>
          <AddItem addItem={addItem} />
          {items.map((item) => (
            <TodoItem
              key={item.id}
              name={item.name}
              id={item.id}
              completed={item.completed}
              toggleItem={toggleItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
