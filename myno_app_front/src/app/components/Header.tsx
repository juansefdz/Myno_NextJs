import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="#"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600"
        >
          Myno APP
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            Log in
          </Link>
          <Link
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
          >
            Sign up
          </Link>
        </div>

       
      </div>
    </div>
  );
}
