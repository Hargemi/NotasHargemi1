import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../TaskCard.css"; // Importamos el CSS

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="task-card">
      <h1 className="task-title">{task.title}</h1>
      <p className="task-description">{task.description}</p>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
