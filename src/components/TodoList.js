import React, { useState, useEffect } from "react";
import firebase, { db } from "../util/firebase";
import { child, ref, get, onValue } from "firebase/database";
import Todo from "./Todo";

export default function TodoList() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    if (!todoList) {
      const todoRef = ref(db, "Todo");

      onValue(todoRef, (snapshot) => {
        const todos = snapshot.val();
        
        const todoList = [];
        for (let id in todos) {
          todoList.push({ id, ...todos[id] });
        }
        
        setTodoList(todoList);
      });
    } else {
      todoList;
    }
  });

  console.log(todoList);

  return (
    <div>
      {todoList
        ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
        : ""}
    </div>
  );
}
