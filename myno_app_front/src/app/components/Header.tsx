import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white shadow ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="#"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600"
        >
          Myno APP
        </Link>
        <div className=" w-full flex flex-row p-3 m-3 gap-3">
          <button className="w-full bg-blue-400 shadow-lg hover:bg-blue-500 text-white font-bold py-2 px-2 rounded inline-flex items-center justify-center">
            Show Notes
          </button>
          <button className="w-full bg-green-400 shadow-lg hover:bg-green-500 text-white font-bold py-2 rounded inline-flex items-center justify-center">
            Add Notes
          </button>
          <button className="w-full bg-red-400 shadow-lg hover:bg-red-500 text-white font-bold py-2 rounded inline-flex items-center justify-center">
            Delete Notes
          </button>
          <button className="w-full bg-yellow-400 shadow-lg hover:bg-yellow-500 text-white font-bold py-2 rounded inline-flex items-center justify-center">
            Update Notes
          </button>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              Log in
            </Link>
            <Link
              href="#"
              className="px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
