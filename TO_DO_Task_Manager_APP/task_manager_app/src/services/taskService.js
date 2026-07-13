import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const tasksRef = collection(db, "tasks");

// Add Task
export const addTask = async (task) => {
  await addDoc(tasksRef, task);
};

// Update Task
export const updateTask = async (id, updatedTask) => {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, updatedTask);
};

// Delete Task
export const deleteTask = async (id) => {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
};

// Real-time Tasks
export const subscribeToTasks = (uid, callback) => {
  const q = query(tasksRef, where("userId", "==", uid));

  return onSnapshot(q, (snapshot) => {
    const tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(tasks);
  });
};