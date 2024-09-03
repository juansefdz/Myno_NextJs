export default function NotesSidebar() {
  return (
    <div className="md:w-72 md:h-screen flex items-center p-2 bg-slate-200">
      <ul className="w-full">
        <li className="p-4 w-full">
          <button className="w-full bg-blue-400 shadow-lg hover:bg-blue-500 text-white font-bold py-3 rounded inline-flex items-center justify-center">
            Show Notes
          </button>
        </li>

        <li className="p-4 w-full">
          <button className="w-full bg-green-400 shadow-lg hover:bg-green-500 text-white font-bold py-3 rounded inline-flex items-center justify-center">
            Add Notes
          </button>
        </li>
        <li className="p-4 w-full">
          <button className="w-full bg-red-400 shadow-lg hover:bg-red-500 text-white font-bold py-3 rounded inline-flex items-center justify-center">
            Delete Notes
          </button>
        </li>
        <li className="p-4 w-full">
          <button className="w-full bg-yellow-400 shadow-lg hover:bg-yellow-500 text-white font-bold py-3 rounded inline-flex items-center justify-center">
            Update Notes
          </button>
        </li>
      </ul>
    </div>
  );
}
