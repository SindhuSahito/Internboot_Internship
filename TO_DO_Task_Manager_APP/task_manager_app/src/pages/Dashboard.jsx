import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const { tasks = [] } = useTasks();

  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title?.toLowerCase().includes(search.toLowerCase()) ||
      task.description?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      task.category === categoryFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    return matchesSearch && matchesCategory && matchesPriority;
  });

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div>

            <h1 className="text-3xl font-bold">
              Task Manager
            </h1>

            <p className="text-blue-100">
              Welcome,
              {" "}
              {currentUser?.displayName || currentUser?.email}
            </p>

          </div>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-gray-500">
              Total Tasks
            </h3>

            <h1 className="text-4xl font-bold mt-2">
              {tasks.length}
            </h1>

          </div>

          <div className="bg-green-500 text-white rounded-xl shadow p-6">

            <h3>
              Completed
            </h3>

            <h1 className="text-4xl font-bold mt-2">
              {completedTasks}
            </h1>

          </div>

          <div className="bg-yellow-500 text-white rounded-xl shadow p-6">

            <h3>
              Pending
            </h3>

            <h1 className="text-4xl font-bold mt-2">
              {pendingTasks}
            </h1>

          </div>

        </div>

        {/* Task Form */}

        <TaskForm
          editingTask={editingTask}
          cancelEdit={() => setEditingTask(null)}
        />

        {/* Search + Filters */}

        <div className="bg-white rounded-xl shadow p-5 mb-8">

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="border rounded-lg p-3"
            />

            <select
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(e.target.value)
              }
              className="border rounded-lg p-3"
            >
              <option>All</option>
              <option>Work</option>
              <option>Personal</option>
              <option>Study</option>
              <option>Shopping</option>
            </select>

            <select
              value={priorityFilter}
              onChange={(e) =>
                setPriorityFilter(e.target.value)
              }
              className="border rounded-lg p-3"
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

          </div>

        </div>

        {/* Task List */}

        <TaskList
          tasks={filteredTasks}
          onEdit={setEditingTask}
        />

      </div>

    </div>
  );
}

export default Dashboard;