import { gregorianMonths, getDays, validateYear } from "../utils/dateUtils";
import qenjs from "qenjs.js";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import React Icons for Add (+) and Subtract (-)

export default function GregorianDateCalculator() {
  const currentDate = new Date();

  const [gregorianDate, setGregorianDate] = useState({
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
  });
  const [dateCalculator, setDateCalculator] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  const [calculatorResult, setCalculatorResult] = useState("");
  const [operation, setOperation] = useState("add");

  const handleDateCalculator = () => {
    const greDate = qenjs.gregorian(
      gregorianDate.year,
      gregorianDate.month,
      gregorianDate.day
    );
    console.log(greDate);
    if (operation == "add") {
      const addDaysResult = greDate.addDays(dateCalculator.day);
      const addMonthResult = addDaysResult.addMonths(dateCalculator.month);
      const addYearResult = addMonthResult.addYears(dateCalculator.year);
      const dateString = qenjs.format(addYearResult.$d, "DDDD, MMMM dd, YYYY");
      setCalculatorResult(dateString);
    } else if (operation == "subtract") {
      const addDaysResult = greDate.subtractDays(dateCalculator.day);
      const addMonthResult = addDaysResult.subtractMonths(dateCalculator.month);
      const addYearResult = addMonthResult.subtractYears(dateCalculator.year);
      const dateString = qenjs.format(addYearResult.$d, "DDDD, MMMM dd, YYYY");
      setCalculatorResult(dateString);
    }
  };

  return (
    <div className="w-1/2 p-6 bg-white border flex flex-col items-center relative">
      <div className="absolute top-0 left-0 right-0 py-2 text-center bg-gray-200">
        <h2 className="font-bold text-slate-600">
          Ethiopian Date Calculator: Add or Subtract
        </h2>
      </div>
      <div className="space-y-4 pt-8 pb-20">
        <div className="flex space-x-4 justify-center items-center">
          <div className="w-1/8">
            <label className="block text-sm font-medium">Day</label>
            <select
              className="w-full p-3 h-12 border rounded-md"
              value={gregorianDate.day}
              onChange={(e) =>
                setGregorianDate({
                  ...gregorianDate,
                  day: Number(e.target.value),
                })
              }
            >
              {getDays(gregorianDate.month, gregorianDate.year).map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2.5">
            <label className="block text-sm font-medium">Month</label>
            <select
              className="w-full p-3 h-12 border rounded-md"
              value={gregorianDate.month}
              onChange={(e) =>
                setGregorianDate({
                  ...gregorianDate,
                  month: Number(e.target.value),
                })
              }
            >
              {gregorianMonths.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/6">
            <label className="block text-sm font-medium">Year</label>
            <input
              type="number"
              className="w-full p-3 h-12 border rounded-md"
              value={gregorianDate.year}
              onChange={(e) =>
                setGregorianDate({
                  ...gregorianDate,
                  year: validateYear(Number(e.target.value)),
                })
              }
            />
          </div>
        </div>

        {/* Add/Subtract select dropdown with icons */}
        <div className="flex justify-center items-center mt-4">
          <div className="w-1/9">
            <select
              className="border rounded px-2 py-1"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="add">+</option>
              <option value="subtract">-</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex  space-x-4 justify-center items-center">
            {/* Day Input */}
            <div className="w-1/8">
              <label className="block text-sm font-medium">Day</label>
              <input
                type="number"
                className="w-full p-3 h-12 border rounded-md"
                value={dateCalculator.day}
                min={0}
                max={1000}
                onChange={(e) =>
                  setDateCalculator({
                    ...dateCalculator,
                    day: Number(e.target.value),
                  })
                }
              />
            </div>

            {/* Month Input */}
            <div className="w-1/8">
              <label className="block text-sm font-medium">Month</label>
              <input
                type="number"
                className="w-full p-3 h-12 border rounded-md"
                value={dateCalculator.month}
                min={0}
                max={100}
                onChange={(e) =>
                  setDateCalculator({
                    ...dateCalculator,
                    month: Number(e.target.value),
                  })
                }
              />
            </div>

            {/* Year Input */}
            <div className="w-1/8">
              <label className="block text-sm font-medium">Year</label>
              <input
                type="number"
                className="w-full p-3 h-12 border rounded-md"
                value={dateCalculator.year}
                min={0}
                max={50}
                onChange={(e) =>
                  setDateCalculator({
                    ...dateCalculator,
                    year: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handleDateCalculator}
            className="p-3 bg-color-1 text-white rounded-md"
          >
            Calculate
          </button>
        </div>

        {/* Display Result */}
        {calculatorResult && (
          <div
            className="absolute left-0 right-0 text-center text-green-600 text-2xl"
            style={{
              opacity: calculatorResult ? 1 : 0,
              visibility: calculatorResult ? "visible" : "hidden",
              transition: "opacity 0.3s ease, visibility 0.3s ease",
            }}
          >
            {calculatorResult}
          </div>
        )}
      </div>
    </div>
  );
}
