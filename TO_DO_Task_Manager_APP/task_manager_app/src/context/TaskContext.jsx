import { createContext, useEffect, useReducer } from "react";
import { useAuth } from "../hooks/useAuth";
import { initialState, taskReducer } from "../reducers/taskReducer";
import {
  addTask,
  updateTask,
  deleteTask,
  subscribeToTasks,
} from "../services/taskService";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const { currentUser } = useAuth();

  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    if (!currentUser) return;

    dispatch({ type: "LOADING" });

    const unsubscribe = subscribeToTasks(currentUser.uid, (tasks) => {
      dispatch({
        type: "SET_TASKS",
        payload: tasks,
      });
    });

    return unsubscribe;
  }, [currentUser]);

  const createTask = async (task) => {
    await addTask({
      ...task,
      completed: false,
      userId: currentUser.uid,
      createdAt: new Date(),
    });
  };

  const editTask = async (id, task) => {
    await updateTask(id, task);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        createTask,
        editTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}