import React, { useState } from "react";
import firebase, { db } from "../util/firebase";
import { ref, set, push } from "firebase/database";
import { async } from "@firebase/util";

export default function Forms() {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = async (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 10000);

    const todo = {
      id,
      title,
      complete: false,
    };

    const todoRef = ref(db, "Todo");

    const newTask = push(todoRef);
    set(newTask, {
      title,
      complete: false,
    });

    setTitle("");
  };

  return (
    <form onSubmit={createTodo}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={title}
        required
        onChange={handleChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}
