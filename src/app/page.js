"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import EthiopianToGregorian from "@/components/EthiopianToGregorian";
import GregorianToEthiopian from "@/components/GregorianToEthiopian";
import Footer from "@/components/Footer";
import EthiopianDateCalculator from "@/components/EthiopianDateCalculator";
import GregorianDateCalculator from "@/components/GregorianDateCalculator";
import EDFormatter from "@/components/EDFormatter";
import GDFormatter from "@/components/GDFormatter";
import About from "@/components/About";
import Contact from "@/components/Contact";

const MENU_ITEMS = {
  CONVERTER: "converter",
  CALCULATOR: "calculator",
  FORMATTER: "formatter",
  ABOUT: "about",
  CONTACT: "contact",
};

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS.CONVERTER);

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar setActiveMenu={setActiveMenu} MENU_ITEMS={MENU_ITEMS} />
      <main className="flex-grow flex flex-col lg:flex-row justify-center items-start p-5 lg:p-10 space-y-10 lg:space-y-0 lg:space-x-10">
        {activeMenu === MENU_ITEMS.CONVERTER && (
          <>
            <EthiopianToGregorian />
            <GregorianToEthiopian />
          </>
        )}
        {activeMenu === MENU_ITEMS.CALCULATOR && (
          <>
            <EthiopianDateCalculator />
            <GregorianDateCalculator />
          </>
        )}
        {activeMenu === MENU_ITEMS.FORMATTER && (
          <>
            <EDFormatter />
            <GDFormatter />
          </>
        )}
        {activeMenu === MENU_ITEMS.ABOUT && <About />}
        {activeMenu === MENU_ITEMS.CONTACT && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
