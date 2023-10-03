import { useState } from "react";

import "./App.css";
import Addtodo from "./Todo/components/Addtodo";

function App() {
  return (
    <>
      <div className="list">
        <h1>Todo App With Redux-Toolkit</h1>
        <Addtodo />
      </div>
    </>
  );
}

export default App;
