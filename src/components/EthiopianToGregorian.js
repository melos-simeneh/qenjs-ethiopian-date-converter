import qenjs from "qenjs";
import { useState } from "react";
import { ethiopianMonths, getDays, validateYear } from "../utils/dateUtils";

export default function EthiopianToGregorian() {
  const curr_eth_date = qenjs();

  const [ethiopianDate, setEthiopianDate] = useState({
    day: curr_eth_date.Day,
    month: curr_eth_date.Month,
    year: curr_eth_date.Year,
  });
  const [ethiopianConversionResult, setEthiopianConversionResult] =
    useState("");

  const handleEthiopianToGregorianConversion = () => {
    const ethDate = qenjs(
      ethiopianDate.year,
      ethiopianDate.month,
      ethiopianDate.day
    );
    const date = ethDate.getGregorianDateTime();
    const dateString = qenjs.format(date, "DDDD, MMMM dd, YYYY");
    setEthiopianConversionResult(`${dateString}`);
  };

  return (
    <div className="w-1/2 p-6 bg-white border flex flex-col items-center relative">
      <div className="absolute top-0 left-0 right-0 py-2 text-center bg-gray-200">
        <h2 className="font-bold text-slate-600">Ethiopian to Gregorian</h2>
      </div>
      <div className="space-y-4 pt-14 pb-16">
        <div className="flex space-x-4 justify-center items-center">
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

          <div className="w-1/6">
            <label className="block text-sm font-medium">ዓመት</label>
            <input
              type="number"
              className="w-full p-3 h-12 border rounded-md"
              value={ethiopianDate.year}
              onChange={(e) =>
                setEthiopianDate({
                  ...ethiopianDate,
                  year: validateYear(Number(e.target.value)),
                })
              }
            />
          </div>
          <button
            onClick={handleEthiopianToGregorianConversion}
            className="p-3 mt-5 bg-color-1 text-white rounded-md"
          >
            Convert
          </button>
        </div>
        {ethiopianConversionResult && (
          <div
            className="absolute left-0 right-0 text-center text-green-600 text-2xl"
            style={{
              opacity: ethiopianConversionResult ? 1 : 0,
              visibility: ethiopianConversionResult ? "visible" : "hidden",
              transition: "opacity 0.3s ease, visibility 0.3s ease",
            }}
          >
            {ethiopianConversionResult}
          </div>
        )}
      </div>
    </div>
  );
}
