import { useTasks } from "../hooks/useTasks";

function TaskCard({ task, onEdit }) {
  const { editTask, removeTask } = useTasks();

  const toggleComplete = async () => {
    try {
      await editTask(task.id, {
        ...task,
        completed: !task.completed,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await removeTask(task.id);
    } catch (error) {
      console.error(error);
    }
  };

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  const borderColor = {
    High: "border-red-500",
    Medium: "border-yellow-500",
    Low: "border-green-500",
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
        borderColor[task.priority] || "border-blue-500"
      }`}
    >
      {/* Header */}

      <div className="flex justify-between items-start">

        <div className="flex-1">

          <h2
            className={`text-2xl font-bold ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {task.description}
          </p>

        </div>

        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
          className="w-6 h-6 cursor-pointer"
        />

      </div>

      {/* Tags */}

      <div className="flex flex-wrap gap-3 mt-5">

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          📂 {task.category}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            priorityColor[task.priority]
          }`}
        >
          🚩 {task.priority}
        </span>

        {task.deadline && (
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            📅 {task.deadline}
          </span>
        )}

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {task.completed ? "✅ Completed" : "⏳ Pending"}
        </span>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap justify-end gap-3 mt-6">

        <button
          onClick={toggleComplete}
          className={`px-4 py-2 rounded-lg text-white transition ${
            task.completed
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => onEdit(task)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;