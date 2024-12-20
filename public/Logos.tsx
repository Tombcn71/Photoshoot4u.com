import Image from "next/image";

export default () => {
  return (
    <div className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-2xl">
            Wear worlds most exclusive brands in iconic cities like Paris,
            Barcelona, Rome, New York.
          </h3>
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
            {/* LOGO 1 */}
            <li>
              <Image
                src="/Chanel.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                src="/Louis.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </li>

            {/* LOGO 3 */}
            <li>
              <Image
                src="/Hermes.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </li>

            {/* LOGO 4 */}
            <li>
              <Image
                src="/Burberry.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                src="/Dior.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                src="/Balenciaga.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </li>

            {/* LOGO 3 */}
            <li>
              <Image
                src="/Armani.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </li>

            {/* LOGO 4 */}
            <li>
              <Image
                src="/Gucci.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
