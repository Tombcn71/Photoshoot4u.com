"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export default function PricingSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-6xl mt-16 mb-16 p-8 rounded-lg space-y-8">
      <h2 id="Pricing" className="text-4xl w-full  font-bold text-center mb-8">
        🎉 {t("pricing1")}
      </h2>
      <p className="text-center text-lg"> {t("pricing0")}</p>
      <div className="flex flex-wrap justify-center lg:space-x-4 space-y-4 lg:space-y-0 items-stretch">
        <div className="flex flex-col border rounded-lg p-4 w-full lg:w-1/4 bg-white">
          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-semibold text-center">
              {t("1 photoshoot key")}
            </h3>{" "}
            <div className=" flex items-center justify-center">
              <div className="rounded-xl shadow-lg text-center">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-gray-500 line-through text-2xl font-medium">
                    29€
                  </span>
                  <span className="text-green-500 font-bold text-4xl">19€</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center">{t("1 AI photoshoot ")}</p>
            <ul className="space-y-2 mb-4 pl-4">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("1 photoshoot key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("40 HD photo's key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("More then 20 styles key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("Done in 60 minutes key")}</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 text-center">
            <Link href="/login">
              {" "}
              <Button className="w-3/4">choose</Button>
            </Link>
          </div>{" "}
        </div>
        <div className="flex flex-col border rounded-lg p-4 w-full lg:w-1/4 bg-blue-50">
          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-semibold text-center">
              {t("3 photoshoots key")}
            </h3>
            <div className="flex items-center justify-center">
              <div className=" rounded-xl  text-center">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-gray-500 line-through text-2xl font-medium">
                    59€
                  </span>
                  <span className="text-green-600 font-bold text-4xl">49€</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center">{t("3 AI photoshoots")} </p>
            <ul className="space-y-2 mb-4 pl-4">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("3 photoshoots key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("40 HD photo's key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("More then 20 styles key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("Done in 60 minutes key")}</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 text-center">
            <Link href="/login">
              {" "}
              <Button className="w-3/4">choose</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg p-4 w-full lg:w-1/4 bg-white">
          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-semibold text-center">
              {t("5 photoshoots key")}
            </h3>
            <div className=" text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="text-gray-500 line-through text-2xl font-medium">
                  99€
                </span>
                <span className="text-green-600 font-bold text-4xl">89€</span>
              </div>
            </div>
            <p className="text-sm text-center">{t("5 photoshoots")} </p>
            <ul className="space-y-2 mb-4 pl-4">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("5 photoshoots key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("40 HD photo's key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("More then 20 styles key")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{t("Done in 60 minutes key")}</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 text-center">
            <Link href="/login">
              {" "}
              <Button className="w-3/4">choose</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
