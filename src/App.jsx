import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  return (
    <main className="app-container">
      <div className="app-content">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
