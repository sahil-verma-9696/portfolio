"use client";

import { useState } from "react";

export default function Clock() {
  const date = new Date();
  const [time, setTime] = useState(date.toLocaleTimeString().toUpperCase());
  setTimeout(() => {
    setTime(new Date().toLocaleTimeString().toUpperCase());
  }, 1000);
  return <span>{time}</span>;
}
