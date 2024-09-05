"use client";
import { useEffect, useState } from "react";
import Card from "./components/TaskCard";

interface Task {
  idNote: number;
  title: string;
  descriptionNote: string;
  createdAt: Date;
  dateNote: Date;
  isActived: boolean;
}

export default function MyTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/v1/notes?page=${page}&size=${size}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data.content);
        setHasMore(data.content.length === size);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, [page, size]);

  const DeleteTask = async (idNote: number) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/notes/${idNote}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task.idNote !== idNote)
        );
        console.log("Task deleted successfully");
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const UpdateTask = async (idNote: number, updatedTask: Partial<Task>) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/notes/${idNote}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTask),
        }
      );

      if (response.ok) {
        const updatedTaskFromServer = await response.json();

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.idNote === idNote
              ? { ...task, ...updatedTaskFromServer }
              : task
          )
        );
        console.log("Task updated successfully");
      } else {
        console.error("Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const ChangeStatusTask = async (idNote: number) => {
    try {
      const taskToToggle = tasks.find((task) => task.idNote === idNote);

      if (!taskToToggle) return;

      const updatedTask = { isActived: !taskToToggle.isActived };

      const response = await fetch(
        `http://localhost:8080/api/v1/notes/${idNote}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTask),
        }
      );

      if (response.ok) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.idNote === idNote
              ? { ...task, isActived: !task.isActived }
              : task
          )
        );
        console.log("Task status toggled successfully");
      } else {
        console.error("Failed to toggle task status");
      }
    } catch (error) {
      console.error("Error toggling task status:", error);
    }
  };

  return (
    <div className="flex flex-col p-5 bg-slate-100 overflow-auto">
      <h1 className="text-2xl font-bold mb-5">My Tasks</h1>
      <div className="flex-grow flex items-center justify-center">
        {loading ? (
          <p className="text-lg">Loading tasks...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <Card
                key={task.idNote}
                task={task}
                DeleteTask={DeleteTask}
                UpdateTask={UpdateTask}
                ChangeStatusTask={ChangeStatusTask}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center items-center space-x-4">
        <button
          onClick={() => setPage((page) => Math.max(page - 1, 1))}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300  disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous Page
        </button>
        <span className="text-lg font-medium mx-4">Page {page}</span>
        <button
          onClick={() => setPage((page) => page + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300  disabled:opacity-50 "
          disabled={!hasMore}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
