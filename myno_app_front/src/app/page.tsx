"use client";
import CalendarComponent from "./HomePage/components/CalendarComponent"; 
import ClockComponent from "./HomePage/components/ClockComponent"; 
import Form  from "./HomePage/components/FormComponent"; 

export default function Home() {
  return (
    <div className="min-h-screen max-w-full bg-slate-100 flex flex-col justify-start">
      <div className="flex flex-row gap-2 my-20 px-20">
        <div className="w-2/3 flex items-center justify-center">
          <Form />
        </div>
        <div className="w-1/3 flex items-center flex-col gap-2 justify-center p-4 text-gray-800">
          <ClockComponent />
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
}
