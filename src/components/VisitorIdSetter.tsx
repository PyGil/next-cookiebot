"use client";

import { useEffect } from "react";

function generateVisitorId() {
  return String(Date.now() + Math.random()).replace(".", "");
}

export default function VisitorIdSetter() {
  useEffect(() => {
    const visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      const newVisitorId = generateVisitorId();
      localStorage.setItem("visitorId", newVisitorId);
    }
  }, []);

  return null;
}
