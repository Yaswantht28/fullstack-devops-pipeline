import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const API_URL = "http://localhost:3000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const getTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await axios.post(`${API_URL}/tasks`, {
      title,
    });

    setTitle("");
    getTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/tasks/${id}`);
    getTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(`${API_URL}/tasks/${task._id}`, {
      completed: !task.completed,
    });

    getTasks();
  };

  return (
    <div className="container">
      <div className="card">

        <h1>📋 Task Manager</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>

        <div className="task-list">

          {tasks.length === 0 ? (
            <p className="empty">No tasks available.</p>
          ) : (
            tasks.map((task) => (
              <div className="task-card" key={task._id}>

                <span
                  className={task.completed ? "completed" : ""}
                >
                  {task.title}
                </span>

                <div className="actions">

                  <button
                    className="complete-btn"
                    onClick={() => toggleTask(task)}
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default App;