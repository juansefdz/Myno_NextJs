"use client";

import { FormEvent, useState } from "react";

export default function Form() {
  const [formState, setFormState] = useState({
    title: "",
    dateNote: "",
    descriptionNote: "",
    isActived: true,
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const createdAt = new Date().toISOString();

    const formattedDateNote = new Date(formState.dateNote).toISOString();

    const requestBody = {
      title: formState.title,
      dateNote: formattedDateNote,
      descriptionNote: formState.descriptionNote,
      isActived: formState.isActived,
      createdAt: createdAt,
    };

    console.log(requestBody);

    fetch("http://localhost:8080/api/v1/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Note created successfully:", data);
        setSuccessMessage("Note created successfully!");

        setFormState({
          title: "",
          dateNote: "",
          descriptionNote: "",
          isActived: true,
        });

        setTimeout(() => setSuccessMessage(null), 3000);
      })
      .catch((error) => {
        console.error("Error creating note:", error);
      });
  }

  return (
    <div className="flex flex-col gap-6 p-10 mx-auto max-w-md items-center">
      <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="title" className="font-bold text-gray-700">
            Title of the note
          </label>
          <input
            type="text"
            id="title"
            className="w-full h-12 px-4 py-1 rounded border border-gray-200 shadow-xl focus:outline-none"
            value={formState.title}
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="dateNote" className="font-bold text-gray-700">
            Date of the note
          </label>
          <input
            type="datetime-local"
            id="dateNote"
            className="w-full h-12 px-4 py-1 rounded border border-gray-200 shadow-xl focus:outline-none"
            value={formState.dateNote}
            onChange={(e) =>
              setFormState({ ...formState, dateNote: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="descriptionNote" className="font-bold text-gray-700">
            Description of the note
          </label>
          <input
            type="text"
            id="descriptionNote"
            className="w-full h-20 rounded border border-gray-200 shadow-xl focus:outline-none"
            value={formState.descriptionNote}
            onChange={(e) =>
              setFormState({ ...formState, descriptionNote: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-400 max-w-full w-full py-2 rounded-lg text-white font-semibold"
        >
          Create MyNote
        </button>
      </form>

      {successMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded-lg">
          {successMessage}
        </div>
      )}
    </div>
  );
}
