export default function Home() {
  return (
    <div className=" bg-slate-600 min-h-screen flex items-center justify-center p-2">
      <div className="w-1/3 bg-red-600 h-full flex flex-col justify-center p-4">
        <h1 className="text-center text-white">Zone Add Tasks</h1>
      </div>
      <div className="w-2/3 bg-blue-600 h-full flex flex-col justify-center p-4">
        <div className="text-center mb-4 text-white">Zone Show Tasks</div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex-1 bg-yellow-500 p-4">All Task</div>
          <div className="flex-1 bg-orange-500 p-4">Calendar</div>
        </div>
      </div>
    </div>
  );
}
