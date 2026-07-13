import { useState, useEffect } from "react";
import { useTasks } from "../hooks/useTasks";

function TaskForm({ editingTask, cancelEdit }) {
  const { createTask, editTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
      setCategory(editingTask.category || "Work");
      setPriority(editingTask.priority || "Medium");
      setDeadline(editingTask.deadline || "");
    } else {
      resetForm();
    }
  }, [editingTask]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory("Work");
    setPriority("Medium");
    setDeadline("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      category,
      priority,
      deadline,
    };

    try {
      if (editingTask) {
        await editTask(editingTask.id, taskData);
        cancelEdit();
      } else {
        await createTask(taskData);
      }

      resetForm();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Title */}
        <input
          type="text"
          placeholder="Task Title"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Deadline */}
        <input
          type="date"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        {/* Description */}
        <textarea
          rows="4"
          placeholder="Task Description"
          className="border rounded-lg p-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Category */}
        <select
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Shopping">Shopping</option>
        </select>

        {/* Priority */}
        <select
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <div className="md:col-span-2 flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            {editingTask ? "Update Task" : "+ Add Task"}
          </button>

          {editingTask && (
            <button
              type="button"
              onClick={() => {
                cancelEdit();
                resetForm();
              }}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;