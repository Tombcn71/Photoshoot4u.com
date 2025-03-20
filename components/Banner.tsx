"use client";

import { useTranslation } from "react-i18next";
import { Megaphone } from "lucide-react";

interface BannerProps {
  show?: boolean;
}

const Banner = ({ show = true }: BannerProps) => {
  const { t } = useTranslation();

  if (!show) return null;

  return (
    <div className="bg-blue-600">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white md:px-8">
        <div className="flex gap-x-4">
          <div className="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
            <Megaphone className="w-6 h-6" />
          </div>
          <p className="py-2 font-medium">{t("Banner")}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
