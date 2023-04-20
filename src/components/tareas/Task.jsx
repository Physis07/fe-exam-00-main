import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import "./tarea.css";

export function Task(props) {
  const { tarea, borrarTarea, onActualizar } = props;

  const [edit, setEdit] = useState(false);

  function EdicionActiv() {
    const [valor, setValor] = useState(tarea.tarea);

    function handleChange(e) {
      const text = e.target.value;
      setValor(text);
    }

    function handleClick(e) {
      e.preventDefault();

      onActualizar({ id: tarea.id, tarea: valor, completado: false });
      setEdit(false);
    }

    return (
      <>
        <input type="text" onChange={handleChange} value={valor} />
        <button className="refresh" id="save-task" onClick={handleClick}>
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
        <button onClick={() => borrarTarea(tarea.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </>
    );
  }

  function EdicionDesactiv() {
    return (
      <div className="tareas-container">
        <div>
          <p>{tarea.tarea}</p>
        </div>
        <div className="action-container">
          <button className="refresh" onClick={() => setEdit(true)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className="btn-delete" onClick={() => borrarTarea(tarea.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="list" id={tarea.id}>
      {edit ? <EdicionActiv /> : <EdicionDesactiv />}
    </div>
  );
}
