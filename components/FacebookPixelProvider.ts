"use client";

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

export function FacebookPixelProvider() {
  useEffect(() => {
    // Initialize Facebook Pixel
    ReactPixel.init(
      "625546493283016",
      {
        ct: "",
        country: "",
        db: "",
        em: "",
        fn: "",
        ge: "",
        ln: "",
        ph: "",
        st: "",
        zp: "",
      },
      {
        autoConfig: true,
        debug: process.env.NODE_ENV === "development",
      }
    );

    // Track initial page view
    ReactPixel.pageView();
  }, []);

  return null;
}
