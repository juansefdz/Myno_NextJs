"use client";
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
}

export default function TaskCard({
  task,
  DeleteTask,
  UpdateTask,
  ChangeStatusTask,
}: TaskCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{task.title}</h2>
        <p className="text-gray-600 mb-4">{task.descriptionNote}</p>
        <div className="flex flex-col space-y-1 text-gray-500 text-sm">
          <p>
            Creado el:{" "}
            <span className="font-medium">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </p>
          <p>
            Fecha de la nota:{" "}
            <span className="font-medium">
              {new Date(task.dateNote).toLocaleDateString()}
            </span>
          </p>
          <p
            className={`font-medium ${
              task.isActived ? "text-green-600" : "text-red-600"
            }`}
          >
            Estado: {task.isActived ? "Activo" : "Inactivo"}
          </p>
        </div>
      </div>
      <div className="p-2 border-t border-gray-200 flex gap-2">
        <button
          onClick={() => DeleteTask(task.idNote)}
          aria-label={`Eliminar tarea ${task.idNote}`}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
        >
          Eliminar
        </button>
        <button
          onClick={() =>
            UpdateTask(task.idNote, {
              title: "Título Actualizado",
              descriptionNote: "Descripción Actualizada",
            })
          }
          aria-label={`Actualizar tarea ${task.idNote}`}
          className="bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed " disabled
        >
          Actualizar
        </button>
        <button
          onClick={() => ChangeStatusTask(task.idNote)}
          aria-label={`Cambiar estado de tarea ${task.idNote}`}
          className="bg-green-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled
        >
          {task.isActived ? "Desactivar" : "Activar"}
        </button>
      </div>
    </div>
  );
}
