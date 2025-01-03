type YearProps = {
  selectedMonth: string;
  onMonthChange: (month: string) => void;
  color: string;
  textColor?: string;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Year = ({
  selectedMonth,
  onMonthChange,
  color,
  textColor = "white",
}: YearProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {months.map((month) => {
        const isSelected =
          month?.toLowerCase() === selectedMonth?.toLocaleLowerCase();
        return (
          <button
            key={month}
            style={{
              color: isSelected ? textColor : "inherit",
              backgroundColor: isSelected ? color : "transparent",
              fontWeight: isSelected ? "500" : "400",
            }}
            className={`p-2 rounded-md text-center transition-all duration-300`}
            onClick={() => onMonthChange(month)}
          >
            {month.slice(0, 3)}
          </button>
        );
      })}
    </div>
  );
};
