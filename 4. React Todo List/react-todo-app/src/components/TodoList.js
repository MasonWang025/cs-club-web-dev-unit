import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import TodoItem from "./TodoItem";
import {addTodo, db, setTodo} from "../services/firebase";

export default function TodoList(props) {
  let [items, updateItems] = useState([
    // { id: 1, completed: false, name: "Calc HW" },
    // { id: 2, completed: false, name: "APCS HW" },
    // { id: 3, completed: true, name: "History HW" },
  ]);

  useEffect(() => {
    db.collection(props.id).get().then((querySnapshot)=> {
        let todos = [];
        querySnapshot.forEach((doc)=>{
          todos.push({
            name: doc.data().name,
            completed: doc.data().completed,
            id: doc.id,
            timestamp: doc.data().timestamp,
          })
        })
        todos.sort((a, b) => a.timestamp - b.timestamp);
        updateItems(todos);
    })
  }, [props.id])

  let toggleItem = (id) => {
    console.log("toggling " + id);
    // updateItems
    let updated = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        setTodo(props.id, id, item.completed);
      }
      return item;
    });

    updateItems(updated);
  };

  let addItem = (name) => {
    let uuid = addTodo(props.id, name);
    updateItems([...items, { id: uuid, completed: false, name: name }]);
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
