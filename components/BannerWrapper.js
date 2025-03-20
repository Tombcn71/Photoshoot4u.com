// components/BannerWrapper.js (or components/BannerWrapper.tsx) - Client Component
"use client";

import { usePathname } from "next/navigation";
import Banner from "./Banner";
import { useState, useEffect } from "react";

export default function BannerWrapper() {
  const pathname = usePathname();
  const excludePaths = ["/login", "/register"];
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    setShowBanner(!excludePaths.includes(pathname));
  }, [pathname, excludePaths]);

  return <>{showBanner && <Banner />}</>;
}
