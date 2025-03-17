"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <footer className=" text-black border-t-2 border-gray">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-black ">
            <Link href="/">
              <h2 className=" font-medium  text-2xl items-center   flex">
                <Image src="/logo.png" width={20} height={20} alt="Logo" />{" "}
                <span className="mt-1 ml-1 pb-1 text-black">
                  {" "}
                  Photoshoot 4u
                </span>{" "}
              </h2>
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-black">
            {t("mission")}
          </p>
          <ul className="mt-12 flex flex-wrap justify-center text-black gap-6 md:gap-8 lg:gap-12">
            <Link href="/Privacy">Privacypolicy</Link>
            <Link href="/Terms">Terms</Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
