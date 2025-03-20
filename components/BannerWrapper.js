// components/BannerWrapper.js (or components/BannerWrapper.tsx) - Client Component
"use client";

import { usePathname } from "next/navigation";
import Banner from "@/components/Banner"; // Adjust path as needed

export default function BannerWrapper() {
  const pathname = usePathname();
  const excludePaths = ["/login", "/overview/"];

  const shouldShowBanner = !excludePaths.includes(pathname);

  return <>{shouldShowBanner && <Banner />}</>;
}
