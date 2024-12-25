import Image from "next/image";
export default () => {
  const faqsList = [
    {
      q: "Can this replace a real photo shoot?",
      a: "Yes, the AI ​​technology we use is professional quality and is almost indistinguishable from a photo by a real photographer. You can take your AI portrait photos anywhere with use confidence where you would use a real photo.",
    },
    {
      q: "How do i download my photos?",
      a: "Doubleclick on the photos will place your photos in a downloadfolder on your computer, on your phone: touch the photo and follow your phones instructions",
    },
    {
      q: "How many good photos can I expect?",
      a: "Just like a real photo session, not every photo is a winner. Where you get 1 to 2 good photos during a traditional photo session, we can guarantee you 10 to 18. We will send you the whole batch of it Showing 40 photos so you can choose the best one yourself.",
    },
    {
      q: "What kind of clothes do I wear to the results?",
      a: "We trained our AI model with blazers, suits, dressshirts and blouses",
    },
    {
      q: "What kind of background do my photos have?",
      a: "We use a gray background as in a studio and backgrounds from offices, trendy workspaces, blurred city lights and more",
    },
    {
      q: "Do i have the rights to use the photos anywhere?",
      a: "Yes you have all the commercial and personal rights to your photos",
    },
    {
      q: "What happens with my photos?",
      a: "We do not store training photos on the server, your results will be automatically deleted after 30 days.",
    },
    {
      q: "Are my payment details safe?",
      a: "Yes, we use Stripe as a payment platform and we never store payment details.",
    },
    {
      q: "How do I get in touch with you?",
      a: "Send us a message via the live chat, if not immediately We will contact you via the email address you provided via the email address chat you entered.",
    },
  ];

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
            {faqsList.map((item, idx) => (
              <li className="py-5" key={idx}>
                <summary className="flex items-center justify-between font-semibold text-gray-700">
                  {item.q}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="mt-3 text-gray-600 leading-relaxed"></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
