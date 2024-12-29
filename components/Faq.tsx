"use client";
import { useTranslation } from "react-i18next";

import Image from "next/image";

export default () => {
  const { t } = useTranslation();

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg mb-10">
            <h3 id="Faq" className="font-semibold text-indigo-600">
              Frequently asked questions
            </h3>
            <p className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
              All information you need to know
            </p>
          </div>
          <Image
            src="/m6.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="flex-1 mt-12 md:mt-0">
          <ul className="space-y-4 divide-y">
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                Can this replace a real photo shoot?{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a1")} </p>
            </li>
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {t("q2")}{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a2")}</p>
            </li>
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {t("q3")}{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a3")}</p>
            </li>
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {t("q4")}{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a4")}</p>
            </li>
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {t("q5")}{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a5")}</p>
            </li>
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {t("q6")}{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a6")}</p>
            </li>
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {t("q7")}{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a7")}</p>
            </li>
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {t("q8")}{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a8")}</p>
            </li>
            <li className="py-5">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {t("q9")}{" "}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{t("a9")}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
