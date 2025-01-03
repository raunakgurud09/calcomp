type CalendarHeaderProps = {
  currentMonth: number;
  currentYear: number;
  color: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToggleMode: () => void;
  mode: "month" | "year";
  textColor: string;
};

export const CalendarHeader = ({
  currentMonth,
  currentYear,
  onPrevMonth,
  onNextMonth,
  onToggleMode,
  textColor,
}: CalendarHeaderProps) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonthName = monthNames[currentMonth] || "Jan";

  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={onPrevMonth}
        className="p-2 px-4 text-lg font-bold bg-transparent"
        style={{ color: textColor }}
      >
        ◀
      </button>
      <div className="text-center">
        <button
          style={{ color: textColor }}
          onClick={onToggleMode}
          className="p-4 text-xl font-semibold bg-transparent"
        >
          {currentMonthName} {currentYear}
        </button>
      </div>
      <button
        onClick={onNextMonth}
        className="p-2 px-4 text-lg font-bold bg-transparent"
        style={{ color: textColor }}
      >
        ▶
      </button>
    </div>
  );
};
