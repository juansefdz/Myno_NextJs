"use client";
import React from "react";

interface Task {
  idNote: number;
  title: string;
  descriptionNote: string;
  createdAt: Date;
  dateNote: Date;
  isActived: boolean;
}

interface TaskCardProps {
  task: Task;
  DeleteTask: (idNote: number) => void;
  UpdateTask: (idNote: number, updatedTask: Partial<Task>) => void;
  ChangeStatusTask: (idNote: number) => void;
  OpenModal: (task: Task) => void;
}

export default function TaskCard({
  task,
  DeleteTask,
  UpdateTask,
  ChangeStatusTask,
  OpenModal,
}: TaskCardProps) {
  return (
    <div
      className={`${
        task.isActived ? "bg-white" : "bg-gray-300"
      } shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{task.title}</h2>
        <p className="text-gray-600 mb-4">{task.descriptionNote}</p>
        <div className="flex flex-col space-y-1 text-gray-500 text-sm">
          <p>
            Created on:{" "}
            <span className="font-medium">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </p>
          <p>
            Date of Note:{" "}
            <span className="font-medium">
              {new Date(task.dateNote).toLocaleDateString()}
            </span>
          </p>
          <p
            className={`font-medium ${
              task.isActived ? "text-green-600" : "text-red-600"
            }`}
          >
            State: {task.isActived ? "Available" : "Done"}
          </p>
        </div>
      </div>
      <div className="p-2 border-t border-gray-200 flex gap-2">
        <button
          onClick={() => DeleteTask(task.idNote)}
          aria-label={`Eliminar tarea ${task.idNote}`}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
        >
          Delete
        </button>
        <button
          aria-label={`Update task ${task.idNote}`}
          className={`${
            !task.isActived
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500"
          } text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-300`}
          disabled={!task.isActived}
          onClick={() => OpenModal(task)}
        >
          Update
        </button>
        <button
          onClick={() => ChangeStatusTask(task.idNote)}
          aria-label={`change status of the task ${task.idNote}`}
          className={`${
            task.isActived ? "bg-green-400 hover:bg-green-500" : "bg-gray-400"
          } text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-300`}
          disabled={!task.isActived}
        >
          {task.isActived ? "End Task" : "Complete"}
        </button>
      </div>
    </div>
  );
}
