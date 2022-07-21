import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Forms from "./components/Forms";

import TodoList from "./components/TodoList";
import Title from "./components/Title";


function App() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Title />
          </div>
          <div>
            <Forms />
          </div>
          <div>

            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* <>
                {loadList.map((todo, index) => (
                  <Todo todo={todo} key={index} />
                ))}
              </> */
}

// {!resetlist ? (
//   <>
//   <TodoList
//     setLoadList={setLoadList}
//     setResetList={setResetList}
//     resetlist={resetlist}
//   />
// </>
// ) : (

// )}
