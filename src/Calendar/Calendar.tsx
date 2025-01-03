import { useState } from "react";
import { Month } from "./Month";
import { Year } from "./Year";
import { CalendarHeader } from "./CalendarHeader";

export type CalendarProps = {
  type?: "single" | "range";
  initialYear?: string;
  initialMonth?: string;
  onDateChange?: (date: string | null) => void;
  onDateRangeChange?: (start: string | null, end: string | null) => void;
  color?: string;
  textColor?: string;
};

export const Calendar = ({
  type = "single",
  initialYear = "2025",
  initialMonth = "Jan",
  onDateChange,
  onDateRangeChange,
  color = "#007BFF",
  textColor = "white",
}: CalendarProps) => {
  const [mode, setMode] = useState<"month" | "year">("month");
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date(initialMonth + " 01").getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    parseInt(initialYear, 10)
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState<{
    start: string | null;
    end: string | null;
  }>({ start: null, end: null });

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleDateSelect = (date: string | null) => {
    setSelectedDate(date);
    onDateChange?.(date);
  };

  const handleDateRangeSelect = (start: string | null, end: string | null) => {
    setSelectedRange({
      start: start && end && new Date(start) > new Date(end) ? end : start,
      end: start && end && new Date(start) > new Date(end) ? start : end,
    });
    if (start && end) onDateRangeChange?.(start, end);
  };

  const currentMonthName = new Date(0, currentMonth).toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="p-4 w-[300px] md:w-[350px] lg:w-[400px] min-w-[300px] border border-white/50 rounded-md">
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        color={color}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onToggleMode={() => setMode(mode === "month" ? "year" : "month")}
        mode={mode}
        textColor={textColor}
      />
      <div>
        {mode === "month" ? (
          <Month
            type={type}
            month={currentMonth}
            year={currentYear}
            color={color}
            onDateSelect={handleDateSelect}
            onDateRangeSelect={handleDateRangeSelect}
            selectedDate={selectedDate}
            selectedRange={selectedRange}
          />
        ) : (
          <Year
            selectedMonth={currentMonthName}
            onMonthChange={(newMonth) =>
              setCurrentMonth(new Date(newMonth + " 01").getMonth())
            }
            color={color}
          />
        )}
      </div>
    </div>
  );
};
