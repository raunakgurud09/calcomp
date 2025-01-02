import { useState } from "react";
import { Calendar } from "./Calendar/Calendar";

function App() {
  const [date, setState] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDayClick = (...args: any[]) => {
    console.log(`Selected Date: ${args}`);
    setState(JSON.stringify(args));
  };

  return (
    <div className="w-screen h-screen bg-">
      <div>{JSON.stringify(date, null, 2)}</div>
      <Calendar
        initialYear="2025"
        type="range"
        onDateChange={handleDayClick}
        color="#AC3fff"
        // color="#3498db"
        // color="orange"
        // textColor="black"
        onDateRangeChange={handleDayClick}
      />
    </div>
  );
}

export default App;
