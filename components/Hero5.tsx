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
    <div className="flex flex-col items-center pt-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold">
            {" "}
            {t("header")}
            <br />
            {t("header2")}✨
          </h1>
          <p className="text-lg">
            {t("subheader")} <br />
            {t("subheaderbr")}
          </p>

          <div className="flex flex-col space-y-2">
            <Link href="/login">
              {" "}
              <button
                className="bg-blue-600 
           text-white font-bold py-4 px-6 rounded-3xl hover:scale-105 transition-transform ">
                {t("button")}
              </button>
            </Link>{" "}
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
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
