import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NewTask from "./components/NewTask";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faList, faTrash);
// Importation nécessaire pour utiliser les icones
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  return (
    <>
      <div className="header">
        <FontAwesomeIcon icon="list" />
        <h1>Todo List</h1>
      </div>
      <div>
        <Button tasks={tasks} setTasks={setTasks} />
      </div>
      <div>
        <NewTask
          tasks={tasks}
          setTasks={setTasks}
          task={task}
          setTask={setTask}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
