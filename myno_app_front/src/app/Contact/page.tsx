import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Github Profile</h1>
        <div className="flex items-center mb-4">
          <div className="ml-4">
            <h2 className="text-xl font-semibold"></h2>
            <Link
              href="https://github.com/juansefdz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 text-2xl hover:underline"
            >
              Juan Sebastián Fernández Montoya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
