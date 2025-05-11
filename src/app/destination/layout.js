// app/destination/layout.js
"use client";

import Navbar from "@/components/Navbar";

export default function DestinationLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
