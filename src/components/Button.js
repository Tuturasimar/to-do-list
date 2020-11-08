import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ tasks, setTasks }) => {
  return (
    <div className="list">
      {tasks.map((list, index) => {
        // On parcourt le tableau tasks, chaque objet aura un index
        return (
          <div key={index} className="task">
            <button
              className="coche"
              style={{ backgroundColor: list.status && "#3B88FD" }}
              onClick={() => {
                const oldTask = [...tasks];
                const newTab = oldTask.splice(index, 1);
                // Quand on clic sur le bouton, on supprime l'objet associé à l'index dans le tableau

                {
                  !list.status
                    ? oldTask.push({ name: list.name, status: true }) // On restitue l'objet supprimé à la fin du tableau en changeant son status
                    : oldTask.unshift({ name: list.name, status: false }); // On restitue l'objet au début du tableau en enlevant le trait
                }

                setTasks(oldTask);
              }}
            ></button>
            <p
              key={index}
              style={{
                textDecoration: list.status && "line-through",
              }} // Si le status est true --> on raye le texte
            >
              {list.name}
            </p>
            {/* {console.log(tasks)} */}
            <FontAwesomeIcon
              className="trash"
              icon="trash"
              onClick={() => {
                const otherTab = [...tasks];
                const deleteOne = otherTab.splice(index, 1);
                // On supprime l'objet associé à l'index
                setTasks(otherTab);
                // On renvoie cette fois le tableau sans l'objet supprimé
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Button;
