import React, { useMemo, useState } from "react";
import { getMonthDays } from "../utils/string";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export type MonthProps = {
  type: "single" | "range";
  month: number; // 0-based index for the month
  year: number;
  onDateSelect?: (date: string | null) => void;
  onDateRangeSelect?: (start: string | null, end: string | null) => void;
  selectedDate?: string | null;
  selectedRange?: { start: string | null; end: string | null };
  color: string; // Primary color (e.g., #3498db)
  textColor?: string;
};

export const Month = ({
  type,
  month,
  year,
  onDateSelect,
  onDateRangeSelect,
  selectedDate,
  selectedRange,
  color,
  textColor = "white",
}: MonthProps) => {
  const { lastDate, firstDay, prevMonthLastDate } = useMemo(
    () =>
      getMonthDays(
        new Date(0, month).toLocaleString("default", { month: "short" }),
        `${year}`
      ),
    [month, year]
  );

  const [hoverDate, setHoverDate] = useState<string | null>(null);

  const dates = useMemo(() => {
    const emptyDatesBefore = Array.from(
      { length: firstDay - 1 },
      (_, i) => prevMonthLastDate - (firstDay - 2) + i
    ).map((day) => ({ day, isCurrentMonth: false, type: "prev" }));

    const currentMonthDates = Array.from({ length: lastDate }, (_, i) => ({
      day: i + 1,
      isCurrentMonth: true,
      type: "current",
    }));

    const emptyDatesAfter = Array.from(
      { length: 42 - (emptyDatesBefore.length + lastDate) },
      (_, i) => i + 1
    ).map((day) => ({ day, isCurrentMonth: false, type: "next" }));

    return [...emptyDatesBefore, ...currentMonthDates, ...emptyDatesAfter];
  }, [firstDay, lastDate, prevMonthLastDate]);

  const getDateKey = (day: number, type: string): string => {
    if (type === "prev") {
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      return `${prevYear}-${String(prevMonth + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
    }

    if (type === "next") {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
      return `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
    }

    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const handleDateClick = (date: { day: number; type: string }) => {
    const key = getDateKey(date.day, date.type);
    if (type === "single") {
      onDateSelect?.(key);
    } else if (type === "range") {
      if (!selectedRange?.start || selectedRange.end) {
        onDateRangeSelect?.(key, null);
      } else {
        onDateRangeSelect?.(selectedRange.start, key);
      }
    }
  };

  const handleMouseEnter = (date: { day: number; type: string }) => {
    const key = getDateKey(date.day, date.type);
    setHoverDate(key);
  };

  const handleMouseLeave = () => {
    setHoverDate(null);
  };

  const isDateInRange = (key: string): boolean => {
    if (!selectedRange?.start || !selectedRange.end) return false;
    return (
      new Date(key) >= new Date(selectedRange.start) &&
      new Date(key) <= new Date(selectedRange.end)
    );
  };

  const isDateInHoverRange = (key: string): boolean => {
    if (!hoverDate || !selectedRange?.start || selectedRange.end) return false;
    const start = new Date(selectedRange.start);
    const hover = new Date(hoverDate);
    const current = new Date(key);
    return (
      current >= (start < hover ? start : hover) &&
      current <= (start > hover ? start : hover)
    );
  };

  const getDateStyle = (
    key: string,
    isCurrentMonth: boolean
  ): React.CSSProperties => {
    if (type === "range") {
      if (selectedRange?.start === key) {
        return {
          backgroundColor: color,
          borderRadius: "0.375rem 0 0 0.375rem",
          color: textColor,
        };
      }

      if (selectedRange?.end === key) {
        return {
          backgroundColor: color,
          borderRadius: "0 0.375rem 0.375rem 0", // Left-side rounded
          color: textColor,
        };
      }

      if (isDateInRange(key)) {
        return {
          backgroundColor: `${color}80`, // Transparent range
          borderRadius: "0", // Left-side rounded
          color: textColor,
        };
      }

      if (isDateInHoverRange(key)) {
        return {
          backgroundColor: `${color}40`, // Transparent hover range
          borderRadius: "0", // Left-side rounded
          color: textColor,
        };
      }
    }

    if (type === "single" && selectedDate === key) {
      return { backgroundColor: color, color: textColor }; // Selected date
    }

    return isCurrentMonth
      ? { color: textColor }
      : {
          opacity: 0.5,
          pointerEvents: "none",
          cursor: "disabled",
          color: textColor,
        }; // Default non-current month
  };

  return (
    <div>
      <div className="grid grid-cols-7 text-center gap-1 font-semibold">
        {days.map((day) => (
          <div key={day} style={{ color: textColor }}>
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center">
        {dates.map((date) => {
          const key = getDateKey(date.day, date.type);
          return (
            <div
              key={key}
              className={`p-2 rounded-md cursor-pointer`}
              style={getDateStyle(key, date.isCurrentMonth)}
              onClick={() => date.isCurrentMonth && handleDateClick(date)}
              onMouseEnter={() => date.isCurrentMonth && handleMouseEnter(date)}
              onMouseLeave={handleMouseLeave}
            >
              {date.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};
