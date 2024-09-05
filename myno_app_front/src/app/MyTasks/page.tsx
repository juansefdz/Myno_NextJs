"use client";
import { useEffect, useState } from "react";

interface Task {
  id: number;
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
        setHasMore(data.content.length === size); // Ajusta esto según la respuesta de tu API
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, [page, size]);

  return (
    <div className="flex flex-col  p-5 bg-slate-100 overflow-auto">
      <h1 className="text-2xl font-bold mb-5">My Tasks</h1>
      <div className="flex-grow flex items-center justify-center">
        {loading ? (
          <p className="text-lg">Loading tasks...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {task.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{task.descriptionNote}</p>
                  <div className="flex flex-col space-y-1 text-gray-500 text-sm">
                    <p>
                      Created At:{" "}
                      <span className="font-medium">
                        {new Date(task.createdAt).toLocaleDateString()}
                      </span>
                    </p>
                    <p>
                      Date Note:{" "}
                      <span className="font-medium">
                        {new Date(task.dateNote).toLocaleDateString()}
                      </span>
                    </p>
                    <p
                      className={`font-medium ${
                        task.isActived ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      Status: {task.isActived ? "Active" : "Inactive"}
                    </p>
                  </div>
                </div>
                <div className="p-2 border-t border-gray-200 flex gap-2">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300">
                    Delete
                  </button>
                  <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-300">
                    Update
                  </button>
                  <button className="bg-green-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300">
                    Active
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center items-center space-x-4">
        <button
          onClick={() => setPage((page) => Math.max(page - 1, 1))}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Previous Page
        </button>
        <span className="text-lg font-medium mx-4">Page {page}</span>
        <button
          onClick={() => setPage((page) => page + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          disabled={!hasMore}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
