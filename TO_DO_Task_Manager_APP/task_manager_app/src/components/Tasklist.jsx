import TaskCard from "./TaskCard";
import { useTasks } from "../hooks/useTasks";

function TaskList({ tasks = [], onEdit }) {
  const { loading } = useTasks();

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-600">
          Loading Tasks...
        </h2>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-500">
          No Tasks Found
        </h2>

        <p className="text-gray-400 mt-2">
          Add your first task above.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;