"use client"
import { useState } from "react";
import { useTasks } from "./lib/UseTask";
import TaskCard from "./components/TaskCard";
import ModalUpdateTask from "./components/ModalUpdateTask";
import { Task } from "./lib/UseTask";

export default function MyTasks() {
  const {
    tasks,
    page,
    loading,
    hasMore,
    setPage,
    deleteTask,
    updateTask,
    changeStatusTask,
  } = useTasks();

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const handleUpdateTask = async (updatedTask: Partial<Task>) => {
    if (selectedTask) {
      await updateTask(selectedTask.idNote, updatedTask);
      closeModal();
    }
  };

  return (
    <div className="flex flex-col p-5 min-h-screen max-w-full bg-slate-100">
      <h1 className="text-2xl font-bold mb-5">My Tasks</h1>
      <div className="flex-grow flex flex-col items-center justify-around">
        {loading ? (
          <p className="text-lg">Loading tasks...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskCard
                key={task.idNote}
                task={task}
                DeleteTask={deleteTask}
                UpdateTask={updateTask}
                ChangeStatusTask={changeStatusTask}
                OpenModal={openModal}
              />
            ))}
          </div>
        )}
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous Page
          </button>
          <span className="text-lg font-medium mx-4">Page {page}</span>
          <button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
            disabled={!hasMore}
          >
            Next Page
          </button>
        </div>
      </div>

      <ModalUpdateTask isOpen={isModalOpen} onClose={closeModal}>
        {selectedTask && (
          <div>
            <h1 className="text-xl font-bold mb-4">Update Task</h1>

            <button
              onClick={() => handleUpdateTask({ title: "Updated Title" })}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Save Changes
            </button>
          </div>
        )}
      </ModalUpdateTask>
    </div>
  );
}
