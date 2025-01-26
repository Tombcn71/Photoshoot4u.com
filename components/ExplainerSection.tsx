"use client";
import { useTranslation } from "react-i18next";

import voorbeeld1 from "/public/voorbeeld1.png";
import wazig1 from "/public/wazig1.png";
import resultaat1 from "/public/resultaat1.png";

export default function ExplainerSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-6xl mt-16 p-8 bg-white rounded-lg space-y-8">
      <h2 id="How" className="text-3xl font-bold text-center mb-8">
        {t("explainersection")}{" "}
      </h2>

      {/* Step 1: Upload your images */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          {" "}
          <div className="text-3xl font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
            1
          </div>
          <h3 className="text-2xl font-semibold">{t("1upload")}</h3>
        </div>
        <p className="text-lg text-gray-600 text-center">
          <br /> {t("1text")}
          <br />
          {t("howline2")} <br /> {t("howline3")}
        </p>
        <img
          src={voorbeeld1.src}
          alt="AI Headshot example"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>

      {/* Step 2: Train your model */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
            2
          </div>
          <h3 className="text-2xl font-semibold"> {t("2text")}</h3>
        </div>
        <p className="text-lg text-gray-600 text-center">{t("2textbr")} </p>
        <img
          src={wazig1.src}
          alt="AI Headshot blur"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>

      {/* Step 3: Generate images */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
            3
          </div>
          <h3 className="text-2xl font-semibold">{t("view")}</h3>
        </div>
        <p className="text-lg text-gray-600 text-center">
          {t("3textbr1")} <br />
          {t("3textbr2")} <br />
          {t("3textbr3")}{" "}
        </p>

        <img
          src={resultaat1.src}
          alt="AI Headshot result"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>
    </div>
  );
}
