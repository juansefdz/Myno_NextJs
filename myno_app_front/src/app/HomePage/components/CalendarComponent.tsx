"use client";
import React from "react";
import { Calendar } from "@nextui-org/calendar";
import type { DateValue } from "@react-types/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function CalendarComponent() {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState<DateValue>(defaultDate);

  return (
    <div className="w-full h-full p-2 m-2 rounded-xl flex items-center justify-center">
      <Calendar
        aria-label="Date (Controlled Focused Value)"
        focusedValue={focusedDate}
        value={defaultDate}
        onFocusChange={setFocusedDate}
        className="rounded-xl shadow-2xl p-4 m-4 min-w-full min-h-full flex items-center justify-center"
      />
    </div>
  );
}
