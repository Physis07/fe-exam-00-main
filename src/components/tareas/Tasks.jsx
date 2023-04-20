import React, { useEffect } from "react";
import { Task } from "./Task";

export const Tasks = ({ tareas = [], onActualizar, borrarTarea }) => {
  useEffect(() => {
    console.log(tareas);
  }, [tareas]);

  return (
    <div className="contenedor-tarea">
      <h4>Task</h4>
      <div className="contenido-tarea">
        {tareas.map((tarea) => (
          <Task
            key={tarea.id}
            id={tarea.id}
            tarea={tarea}
            onActualizar={onActualizar}
            borrarTarea={borrarTarea}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
