
import React, { useState } from "react";
import Task from "./component/Task";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Project",
      completed: false,
    },
    {
      id: 2,
      title: "Learn CSS Design",
      completed: false,
    },
    {
      id: 3,
      title: "Practice JavaScript",
      completed: false,
    },
  ]);

  const [title, setTitle] = useState("");

  const createTask = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: title,
        completed: false,
      },
    ]);

    setTitle("");
  };


  const completedtask = (id) => {

    const newArray = tasks.map((task) => {

      if (task.id !== id) {
        return task;
      }

      return {
        ...task,
        completed: !task.completed,
      };

    });

    setTasks(newArray);
  };


  const deletetask = (id) => {

    const newArray = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(newArray);
  };


  return (

    <div className="app">

      <div className="todo-card">

        <h1>✨ TO DO LIST</h1>

        <p className="count">
          Total Tasks : {tasks.length}
        </p>


        <form onSubmit={createTask}>

          <input
            type="text"
            placeholder="Enter new task..."
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <button>
            Add Task
          </button>

        </form>


        <ul>

          {tasks.map((task)=>(

            <Task
              key={task.id}
              task={task}
              completedtask={completedtask}
              deletetask={deletetask}
            />

          ))}

        </ul>

      </div>

    </div>

  );
}


export default App;