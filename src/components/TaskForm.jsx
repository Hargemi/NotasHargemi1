import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../TaskForm.css";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Crea Tus Tareas</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="form-input"
        />
        <textarea
          placeholder="Descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={descripcion}
          className="form-textarea"
        ></textarea>
        <button className="submit-btn">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
