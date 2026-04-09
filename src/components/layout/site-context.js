"use client";

import { createContext, useContext } from "react";

export const SiteChromeContext = createContext(null);

export function useSiteChrome() {
  const value = useContext(SiteChromeContext);
  if (!value) {
    throw new Error("useSiteChrome must be used within SiteChromeContext");
  }
  return value;
}
