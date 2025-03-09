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
        {t("pricing1")}
      </h2>
      <p className="text-center text-lg">{t("pricingsub")}</p>
      <div className="flex flex-wrap justify-center lg:space-x-4 space-y-4 lg:space-y-0 items-stretch">
        <div className="flex flex-col border rounded-lg p-4 w-full lg:w-1/4 bg-white">
          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-semibold text-center">
              {t("1 photoshoot key")}
            </h3>
            <p className="text-4xl font-extrabold text-center mb-2">29€</p>
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
              <Button className="border rounded-full h-12 px-6 m-2 text-lg">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg p-4 w-full lg:w-1/4 bg-blue-50">
          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-semibold text-center">
              {t("3 photoshoots key")}
            </h3>
            <p className="text-4xl font-extrabold text-center mb-2">59€</p>
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
              <Button className="border rounded-full h-12 px-6 m-2 text-lg">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg p-4 w-full lg:w-1/4 bg-white">
          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-semibold text-center">
              {t("5 photoshoots key")}
            </h3>
            <p className="text-4xl font-extrabold text-center mb-2">99€</p>
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
              <Button className="border rounded-full h-12 px-6 m-2 text-lg">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
