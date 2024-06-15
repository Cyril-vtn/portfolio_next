"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { NavigationButton } from "./components/NavigationButton";
import { Button } from "./components/Button";
import { FaGithub } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24 bg-brandBlue bg-noise-bg">
      <div
        className={`fixed top-0 left-0 right-0 py-8 transition-colors duration-300 ease-in-out z-50  ${
          isScrolled ? " bg-brandBlue" : ""
        }`}
      >
        <div className="m-auto max-w-7xl px-8">
          <div className="flex items-center w-full justify-center md:justify-between">
            <div className="flex items-center gap-4">
              <button className=" absolute right-10 md:hidden">
                <HiMenuAlt3 z={200} size={24} className="text-brandOffwhite" />
              </button>
              <div className="flex items-center">
                <a
                  className="text-2xl font-marlin-bold md:ml-4 text-brandOffwhite select-none hover:scale-105 cursor-pointer transition"
                  href="/"
                >
                  Cyril.
                </a>
              </div>
              <nav className="hidden md:flex">
                <ul className="flex space-x-2 font-marlin-medium text-brandOffwhite tracking-tight text-sm">
                  <NavigationButton text="Accueil" />
                  <NavigationButton text="Projets" />
                  <NavigationButton text="Contact" />
                </ul>
              </nav>
            </div>
            <a href="https://github.com/Cyril-vtn" className=" hidden md:block">
              <Button text="Github" icon={<FaGithub size={18} />} />
            </a>
          </div>
        </div>
        <div className={`transition-opacity absolute bottom-0 top-[90px] w-full h-full duration-300 ease-in-out ${isScrolled ? "opacity-100": "opacity-0"}`} style={{backgroundImage: `url('/header-pattern.svg')`, backgroundSize: "contain", backgroundRepeat: 'repeat-x'}}></div>
      </div>
      <div className="h-full flex justify-center items-center" style={{ minHeight: "calc(100vh - 192px)" }}>
        <h1 style={{ fontSize: "clamp(2rem, 11vw, 20rem)" }} className="font-marlin-bold text-brandOffwhite text-center">
          Cyril Votion
        </h1>
      </div>
    </main>
  );
}