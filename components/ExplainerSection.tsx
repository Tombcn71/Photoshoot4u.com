"use client";
import { useTranslation } from "react-i18next";

import voorbeeld1 from "/public/voorbeeld1.png";
import wazig1 from "/public/wazig1.png";
import resultaat1 from "/public/resultaat1.png";

export default function ExplainerSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-6xl mt-16 p-8 bg-gray-100 rounded-lg space-y-8">
      <h2 id="How" className="text-3xl font-bold text-center mb-8">
        How It Works{" "}
      </h2>

      {/* Step 1: Upload your images */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          {" "}
          <div className="text-3xl font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
            1
          </div>
          <h3 className="text-2xl font-semibold">Upload your images</h3>
        </div>
        <p className="text-sm text-gray-600 text-center">
          Upload 10 high-quality images: Use some shoulders-up images. And some
          waist-up images.
          <br />
          Taken on different days, with different backgrounds and clothes,
          <br /> Looking at the camera, front facing, 1 person in frame, no
          sunglasses or hats.
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
          <h3 className="text-2xl font-semibold"> Our AI gets to work</h3>
        </div>
        <p className="text-sm text-gray-600 text-center">
          The AI magic takes ~60 minutes. You'll get an email when its ready!
        </p>
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
          <h3 className="text-2xl font-semibold">Get amazing headshots</h3>
        </div>
        <p className="text-sm text-gray-600 text-center">
          Click on the link in the email.
          <br />
          On the training page, click on the "finished" batch.
          <br />
          Now download your photos!
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
