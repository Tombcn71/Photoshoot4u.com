import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  const data = [
    {
      link: "add link here",
      image: "/m3.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/m1.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/m4.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/m8.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
  ];
  return (
    <>
      <div className="pt-0 ">
        <div className="p-6 container mx-auto">
          <div className="container m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {data.map((x) => {
              return (
                <>
                  <article
                    key={x.comment}
                    className="   rounded-2xl cursor-pointer">
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={600}
                        className="max-h-100 rounded-2xl w-full object-cover "
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
