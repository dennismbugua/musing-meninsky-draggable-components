import React from "react";
import ReactDOM from "react-dom";

import TaskList from "./App";
import { TASKS } from "./json";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TaskList tasks={TASKS} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
