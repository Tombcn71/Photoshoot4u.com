"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as fbq from "../lib/fpixel";

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Facebook Pixel when the component mounts
    fbq.init();
  }, []);

  useEffect(() => {
    // Track pageview on route change
    fbq.pageview();
  }, [pathname]);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
