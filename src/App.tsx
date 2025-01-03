import { DemoCard } from "./Calendar/DemoCard";

function App() {
  return (
    <div className="w-screen text-white">
      <div className="w-[960px] mx-auto h-screen ">
        <div className="p-8 pt-20">
          <h1 className="font-medium text-3xl">Calendar Demos</h1>
          <p className="text-gray-400 text-lg">
            Explore different calendar types and features in action.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-16 p-8">
          <DemoCard
            type="single"
            title="Single Date Selection"
            description="Select a single date using this calendar."
          />

          <DemoCard
            type="range"
            title="Date Range Selection"
            description="Pick a start and end date for your selection range."
          />

          <DemoCard
            type="colors"
            title="Color Customization"
            description="Customize the calendar’s primary and text colors."
            color="#AC3FFF"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
