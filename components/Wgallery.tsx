import Image from "next/image";
import Link from "next/link";
import React from "react";
const WGallery = () => {
  const data = [
    {
      link: "add link here",
      image: "/lora0.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/lora1.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/lora2.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/lora3.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/lora4.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/lora5.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/lora6.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/lora7.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/1lora0.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/1lora1.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/1lora2.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/1lora3.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/1lora4.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/1lora5.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/1lora6.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/1lora7.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2lora0.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2lora1.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2lora2.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2lora3.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2lora4.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2lora5.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2lora6.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2lora7.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },

    {
      link: "add link here",
      image: "/3lora0.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/3lora1.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/3lora2.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/3lora3.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/3lora4.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/3lora5.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/3lora6.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/3lora7.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4lora0.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4lora1.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4lora2.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4lora3.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4lora4.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4lora5.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4lora6.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4lora7.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
  ];
  return (
    <>
      <div className="content-center "></div>
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

export default WGallery;
