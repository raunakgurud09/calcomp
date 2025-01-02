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
  textColor,
}: YearProps) => {
  console.log(selectedMonth);

  return (
    <div className="grid grid-cols-3 gap-4">
      {months.map((month) => (
        <button
          key={month}
          style={{
            color: textColor,
            backgroundColor: month === selectedMonth ? color : "none",
          }}
          className={`p-2 rounded-md  text-center`}
          onClick={() => onMonthChange(month)}
        >
          {month.slice(0, 3)}
        </button>
      ))}
    </div>
  );
};
