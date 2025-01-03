# Calendar Component Demo Library

This library provides a versatile and customizable calendar component supporting three main types of functionality: **single-date selection**, **range selection**, and **color customization**.

## Installation

To get started, follow these steps to install and use the Calendar component:

### Prerequisites

Ensure you have the following tools installed:

- Node.js: [Download](https://nodejs.org/)
- npm or yarn package manager.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/calendar-demo-library.git
   cd calendar-demo-library
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

The demo should now be running at [http://localhost:3000](http://localhost:3000).

---

## Usage

### Importing the Calendar Component

To use the **Calendar** component or its demo variants, import them as shown below:

```tsx
import { Calendar } from "./components/Calendar/Calendar";
import { DemoCard } from "./components/DemoCard";
```

---

### DemoCard Variants

#### 1. **Single-Date Selection**

- **Purpose**: Users can select a single date from the calendar.
- **Code Example**:

  ```tsx
  <DemoCard
    type="single"
    title="Single Date Picker"
    description="Select a single date."
    color="#3498db"
  />
  ```

---

#### 2. **Range Selection**

- **Purpose**: Users can select a date range by choosing start and end dates.
- **Code Example**:

  ```tsx
  <DemoCard
    type="range"
    title="Date Range Picker"
    description="Select a start and end date for a range."
    color="#2ecc71"
  />
  ```

---

#### 3. **Customizable Colors**

- **Purpose**: Showcases how the calendar's color theme can be customized.
- **Code Example**:

  ```tsx
  <DemoCard
    type="colors"
    title="Customizable Colors"
    description="Choose and display dates with custom colors and text colors."
    color="#e74c3c"
    textColor="#ffffff"
  />
  ```

---

### Direct Calendar Component Usage

To integrate the Calendar directly into your project without the `DemoCard` wrapper, you can use the following configurations:

#### Single Date Picker

```tsx
<Calendar
  type="single"
  initialYear="2025"
  onDateChange={(date) => console.log("Selected Date:", date)}
  color="#3498db"
  textColor="white"
/>
```

#### Date Range Picker

```tsx
<Calendar
  type="range"
  initialYear="2025"
  onDateRangeChange={(start, end) =>
    console.log("Selected Range:", { start, end })
  }
  color="#2ecc71"
/>
```

#### Customizable Colors

```tsx
<Calendar
  type="single"
  initialYear="2025"
  color="#e74c3c"
  textColor="#ffffff"
/>
```

---

## Features

- **Single-Date Selection**: Select and log a single date.
- **Date Range Selection**: Choose a start and end date for a range.
- **Color Customization**: Apply theme colors to the calendar components.
- **Dynamic Preview**: Switch between component preview and code views for demos.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
