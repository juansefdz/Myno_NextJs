import { useState, useEffect, useCallback } from "react";

export interface Task {
  idNote: number;
  title: string;
  descriptionNote: string;
  createdAt: Date;
  dateNote: Date;
  isActived: boolean;
}

export const useTasks = (initialPage: number = 1, pageSize: number = 10) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/v1/notes?page=${page}&size=${pageSize}`);
      if (!response.ok) throw new Error("Error fetching tasks");

      const data = await response.json();
      setTasks(data.content);
      setHasMore(data.content.length === pageSize);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const deleteTask = async (idNote: number) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/notes/${idNote}`, { method: "DELETE" });
      if (response.ok) setTasks((prevTasks) => prevTasks.filter((task) => task.idNote !== idNote));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTask = async (idNote: number, updatedTask: Partial<Task>) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/notes/${idNote}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        const updatedTaskFromServer = await response.json();
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.idNote === idNote ? { ...task, ...updatedTaskFromServer } : task))
        );
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const changeStatusTask = async (idNote: number) => {
    try {
      const taskToToggle = tasks.find((task) => task.idNote === idNote);
      if (!taskToToggle) return;

      const updatedTask = { isActived: !taskToToggle.isActived };
      const response = await fetch(`http://localhost:8080/api/v1/notes/${idNote}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.idNote === idNote ? { ...task, isActived: !task.isActived } : task))
        );
      }
    } catch (error) {
      console.error("Error toggling task status:", error);
    }
  };

  return { tasks, page, loading, hasMore, setPage, deleteTask, updateTask, changeStatusTask };
};