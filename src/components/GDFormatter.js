import qenjs from "qenjs";
import { getDays, gregorianMonths, validateYear } from "../utils/dateUtils";
import { useState } from "react";

export default function GDFormatter() {
  const currentDate = new Date();

  const [gregorianDate, setGregorianDate] = useState({
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
  });

  const [format, setFormat] = useState("DDDD, MMMM dd, YYYY");
  const [formatResult, setFormatResult] = useState("");

  const handleDateFormatter = () => {
    const dateString = qenjs.format(currentDate, format);
    setFormatResult(dateString);
  };

  return (
    <div className="w-1/2 p-6 bg-white border flex flex-col items-center relative">
      <div className="absolute top-0 left-0 right-0 py-2 text-center bg-gray-200">
        <h2 className="font-bold text-slate-600">Gregorian Date Formatter</h2>
      </div>
      <div className="space-y-4 pt-14 pb-16">
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
          <div className="w-1/3">
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

        <div className="space-y-4">
          <div className="flex  space-x-1 justify-center items-center text-gray-600">
            <input
              className="p-3 h-12 border rounded-md"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              placeholder="Enter output Format"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handleDateFormatter}
            className="p-3 bg-color1 text-white rounded-md"
          >
            Format
          </button>
        </div>

        {formatResult && (
          <div
            className="absolute left-0 right-0 text-center text-green-600 text-2xl"
            style={{
              opacity: formatResult ? 1 : 0,
              visibility: formatResult ? "visible" : "hidden",
              transition: "opacity 0.3s ease, visibility 0.3s ease",
            }}
          >
            {formatResult}
          </div>
        )}
      </div>
    </div>
  );
}
