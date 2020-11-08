import React from "react";

const NewTask = ({ task, setTask, tasks, setTasks }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // empêche le rafraichissement de la page
  };
  return (
    <div className="newTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="new task"
          status="false"
          onChange={(event) => {
            setTask(event.target.value);
          }} // status sera utilisé pour rayer le texte quand il sera "true"
        ></input>
      </form>
      <button
        onClick={() => {
          const tab = [...tasks];
          // console.log(task);
          // On duplique tasks puis on rajoute au début du tableau un objet
          tab.unshift({ name: task, status: false });
          setTasks(tab);
          // tasks a maintenant été mis à jour avec un nouvel objet
          //   console.log(tab);
        }}
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
