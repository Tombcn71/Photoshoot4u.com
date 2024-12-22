"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Gallery from "./gallery";

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];

  return (
    <>
      <section className="mt-14 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center pb-4 space-y-4">
          <h2 className="text-4xl text-slate-800 font-extrabold mx-auto md:text-5xl">
            Generate Professional Headshots with AI{" "}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Elevate Your Digital Presence with AI-Generated Headshots. Ideal for
            social profiles, resumes, and professional portfolios.
          </p>
        </div>
        <div>
          <p className="text-center pb-4 ">
            <Link href="/login">
              {" "}
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-3xl">
                Get your headshots{" "}
              </button>
            </Link>
          </p>
        </div>{" "}
        <div></div>
      </section>
    </>
  );
};
