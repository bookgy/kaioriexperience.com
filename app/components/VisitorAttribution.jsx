"use client";

import { useEffect } from "react";
import { captureInitialAttribution } from "../lib/attribution";

export default function VisitorAttribution() {
  useEffect(() => {
    captureInitialAttribution();
  }, []);

  return null;
}
