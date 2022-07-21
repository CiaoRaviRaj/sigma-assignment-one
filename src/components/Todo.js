import React, { useState } from "react";
import firebase, { db } from "../util/firebase";

import { ref, set, remove } from "firebase/database";
import { async } from "@firebase/util";


export default function Todo({ todo }) {
  const [newTitle, setNewTitle] = useState("");
  const todoReff = ref(db, "Todo" + todo.id);

  const deleteTodo = async() => {
    await remove(ref(db, "Todo/" + todo.id));
  };
  const completeTodo = async () => {
    await set(ref(db, "Todo/" + todo.id), {
      complete: !todo.complete,
    })
      .then(() => {
        console.log(todo.complete);
      })
      .catch((error) => {
        console.log(err);
      });
  };

  const editTodo = async () => {
    const todoRef = ref(db, "Todo/" + todo.id);
    await set(todoRef, {
      title: newTitle,
    }).then(() => {
      console.log("successfully edit.");
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  {
    todo.complete ? "complete" : "list-item";
  }
  return (
    <li className={todo.complete ? "complete" : "list-item"}>
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />

      {/* <h1 className={todo.complete ? "complete" : ""}>{todo.title}</h1> */}
      <div>
        {/* <button onClick={deleteTodo}>Delete</button>
        <button onClick={completeTodo}>Complete</button> */}

        <button className="button-complete task-button" onClick={completeTodo}>
          <i className="fa fa-check-circle"></i>
        </button>
        <button className="button-edit task-button" onClick={editTodo}>
          <i className="fa fa-edit"></i>
        </button>
        <button className="button-delete task-button" onClick={deleteTodo}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
