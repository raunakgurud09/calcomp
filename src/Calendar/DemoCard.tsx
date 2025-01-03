import { useState } from "react";
import { cn } from "../utils/cn";
import { Calendar } from "./Calendar";

export type DemoCardProps = {
  type: "single" | "range" | "colors";
  title: string;
  description: string;
  color?: string;
  textColor?: string;
};

export const DemoCard = ({
  type,
  title,
  description,
  color = "#3498db",
  textColor = "white",
}: DemoCardProps) => {
  const [view, setView] = useState<"preview" | "code">("preview");

  const handleDateChange = (date: string | null) => console.log("Date:", date);

  const handleRangeChange = (start: string | null, end: string | null) =>
    console.log("Range:", { start, end });

  const codeSnippet = `
<Calendar
  initialYear="2025"
  type="${type}"
  ${type === "single" ? `onDateChange={(date) => console.log(date)}` : ""}
  ${
    type === "range"
      ? `onDateRangeChange={(start, end) => console.log(start, end)}`
      : ""
  }
  ${type === "colors" ? `color="${color}" textColor="${textColor}"` : ""}
  color="${color}"
  textColor="${textColor}"
/>`;

  return (
    <div className="p-6 bg-zinc-900 rounded-md shadow-md text-white w-full">
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="flex items-center gap-4 font-medium border-b border-b-gray-700 text-sm mb-4">
        <p
          className={cn("pb-1 w-20 text-center cursor-pointer", {
            "font-bold border-b-2 text-white": view === "preview",
            "text-gray-400": view !== "preview",
          })}
          onClick={() => setView("preview")}
        >
          Preview
        </p>
        <p
          className={cn("pb-1 w-20 text-center cursor-pointer", {
            "font-bold border-b-2 text-white": view === "code",
            "text-gray-400": view !== "code",
          })}
          onClick={() => setView("code")}
        >
          Code
        </p>
      </div>
      <div className="mt-4 w-full flex items-center justify-center ">
        {view === "preview" ? (
          <Calendar
            type={type === "single" ? "single" : "range"}
            color={color}
            textColor={textColor}
            initialYear="2025"
            onDateChange={type === "single" ? handleDateChange : undefined}
            onDateRangeChange={type === "range" ? handleRangeChange : undefined}
          />
        ) : (
          <pre className="p-4 w-full bg-zinc-950 rounded-md text-sm overflow-auto">
            <code>{codeSnippet}</code>
          </pre>
        )}
      </div>
    </div>
  );
};
