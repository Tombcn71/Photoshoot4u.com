"use client";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'

export default () => {
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
                <div>
                    {" "}
                    <p className="text-md text-center pb-4 text-gray-500 italic">
                        Build for professionals worldwide. Quick and efficient.
                    </p>
                </div>
                <div className="text-center pb-4 space-y-4">
                    <h2 className="text-4xl text-slate-800 font-bold mx-auto md:text-5xl">
                        ✨AI Headshot Examples: Portfolio Showcase
                    </h2>
                    <p className="text-lg">
                        You wear professional clothing in the shoot such as blazers, suits, etc.<br />The shoots have professional backgrounds, studio-like gray backgrounds and various backgrounds such as offices and trendy workplaces.
                    </p>
                </div>
                <div>

                    <p className="text-center pb-4 ">
                        <Link href="/login">
                            {" "}
                            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-3xl">
                                Create your headshots now
                            </button>
                        </Link>
                    </p>
                </div>{" "}
                <div></div>
            </section>
        </>
    );
};
