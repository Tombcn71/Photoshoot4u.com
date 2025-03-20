"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Gallery from "./gallery";
import { Button } from "./ui/button";
import Heroic from "/public/Heroic.png";
export default () => {
  const { t } = useTranslation();
  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];

  return (
    <div className="flex flex-col items-center pt-4 lg:pt-16">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 p-4 lg:p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-3 lg:space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold">{t("header")}✨</h1>
          <p className="text-lg">{t("subheader")}</p>

          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button className="w-full lg:w-1/2">{t("button")}</Button>
            </Link>
            <p className="text-sm text-gray-500 italic">
              Trusted by professionals worldwide. Quick and efficient.
            </p>
            <div className="mt-4 text-gray-500">
              <span>Already a member? </span>
              <Link className="text-blue-600 hover:underline" href="/login">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <img
            src={Heroic.src}
            alt="AI Headshot Illustration"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
