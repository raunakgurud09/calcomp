type CalendarHeaderProps = {
  currentMonth: number;
  currentYear: number;
  color: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToggleMode: () => void;
  mode: "month" | "year";
};

export const CalendarHeader = ({
  currentMonth,
  currentYear,
  color,
  onPrevMonth,
  onNextMonth,
  onToggleMode,
}: CalendarHeaderProps) => {
  const currentMonthName = new Date(0, currentMonth).toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={onPrevMonth}
        className="text-lg font-bold"
        style={{ color }}
      >
        ◀
      </button>
      <div className="text-center">
        <button
          style={{ color }}
          onClick={onToggleMode}
          className="text-xl font-semibold"
        >
          {currentMonthName.slice(0, 3)} {currentYear}
        </button>
      </div>
      <button
        onClick={onNextMonth}
        className="text-lg font-bold"
        style={{ color }}
      >
        ▶
      </button>
    </div>
  );
};
