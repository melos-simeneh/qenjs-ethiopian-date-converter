import { ethiopianMonths, getDays, validateYear } from "../utils/dateUtils";
import qenjs from "qenjs";
import { useState } from "react";

export default function EDFormatter() {
  const curr_eth_date = qenjs();

  const [ethiopianDate, setEthiopianDate] = useState({
    day: curr_eth_date.Day,
    month: curr_eth_date.Month,
    year: curr_eth_date.Year,
  });
  const [format, setFormat] = useState("DDDD, MMMM d YYYY");
  const [formatResult, setFormatResult] = useState("");

  const handleFormatter = () => {
    const ethDate = qenjs(
      curr_eth_date.Year,
      curr_eth_date.Month,
      curr_eth_date.Day
    );
    setFormatResult(ethDate.format(format));
  };

  return (
    <div className="w-1/2 p-6 bg-white border flex flex-col items-center relative">
      <div className="absolute top-0 left-0 right-0 py-2 text-center bg-gray-200">
        <h2 className="font-bold text-slate-600">Ethiopian Date Formatter</h2>
      </div>
      <div className="space-y-4 pt-14 pb-16">
        <div className="flex space-x-4 justify-center items-center">
          <div className="w-1/8">
            <label className="block text-sm font-medium">ቀን</label>
            <select
              className="w-full p-3 h-12 border rounded-md"
              value={ethiopianDate.day}
              onChange={(e) =>
                setEthiopianDate({
                  ...ethiopianDate,
                  day: Number(e.target.value),
                })
              }
            >
              {getDays(ethiopianDate.month, ethiopianDate.year, true).map(
                (day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="w-1/2.5">
            <label className="block text-sm font-medium">ወር</label>
            <select
              className="w-full p-3 h-12 border rounded-md"
              value={ethiopianDate.month}
              onChange={(e) =>
                setEthiopianDate({
                  ...ethiopianDate,
                  month: Number(e.target.value),
                })
              }
            >
              {ethiopianMonths.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/6">
            <label className="block text-sm font-medium">ዓመት</label>
            <input
              type="number"
              className="w-full p-3 h-12 border rounded-md "
              value={ethiopianDate.year}
              onChange={(e) =>
                setEthiopianDate({
                  ...ethiopianDate,
                  year: validateYear(Number(e.target.value)),
                })
              }
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex  space-x-1 justify-center items-center">
            <input
              className="p-3 h-12 border rounded-md text-gray-600"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              placeholder="Enter output Format"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handleFormatter}
            className="p-3 bg-color1 text-white rounded-md"
          >
            Format
          </button>
        </div>

        {/* Display Result */}
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
