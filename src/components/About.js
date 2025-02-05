import qenjs from "qenjs";
import { getDays, gregorianMonths, validateYear } from "../utils/dateUtils";
import { useState } from "react";

export default function About() {
  return (
    <div className="w-full max-w-4xl mx-auto px-10 bg-white  border border-gray-200 relative">
      <div className="absolute top-0 left-0 right-0 py-2 text-center bg-gray-200">
        <h2 className="font-bold text-slate-600">About Us</h2>
      </div>
      <div className="space-y-8 pt-14 pb-16">
        <p className="text-lg text-gray-700 mb-4">
          Our application is dedicated to providing seamless date conversions
          between the Ethiopian and Gregorian calendars. With a user-friendly
          interface and reliable accuracy, we make it easier for individuals and
          businesses to navigate these two calendar systems.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you are seeking a simple date conversion, a calculator, or a
          formatter tool, our platform offers these features in a professional
          and accessible way. We strive to provide the most accurate and
          intuitive experience for our users.
        </p>
        <p className="text-lg text-gray-700">
          We are committed to making your interactions with our application as
          simple and effective as possible, ensuring precise conversions and
          smooth functionality.
        </p>
      </div>
    </div>
  );
}
