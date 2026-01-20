
"use client";
import { useEffect } from "react";
import Aos from "aos";

export default function ClientProviders({ children }) {
    useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);
  return children;
}
