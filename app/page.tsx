"use client";

import "./globals.css";

import { ScrollSection } from "./components/ScrollSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-brandBlue bg-noise-bg fixed top-0 left-0 w-full h-full"></div>
      <ScrollSection />
    </main>
  );
}
