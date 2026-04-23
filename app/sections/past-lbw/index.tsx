import BlurImage from "@/app/components/miscellaneous/blur-image";
import React from "react";

const DEFAULT_PHOTO_CARD_SIZE = {
  width: "w-[280px]",
  height: "h-[180px]",
  noteWidth: "w-[220px]",
};

const PHOTO_CARDS = [
  {
    note: "Asides meeting and chatting with industry leaders, The food is amazing!",
    rotation: "-rotate-[6deg]",
    position: "left-6 top-16",
    width: "w-[318px]",
    height: "h-[407px]",
    noteWidth: "w-[240px]",
    src: "/gallery/meetings.jpg",
  },
  {
    note: "Happy, brilliant minds, intelligent conversations.",
    rotation: "rotate-[8deg]",
    position: "right-14 top-16",
    width: "w-[318px]",
    height: "h-[318px]",
    src: "/gallery/conversations.jpg",
  },
  {
    note: "Seasoned speakers imparting knowledge.",
    rotation: "rotate-[4.3deg]",
    position: "left-10 bottom-16",
    width: "w-[342px]",
    height: "h-[233px]",
    src: "/gallery/speakers.jpg",
  },
  {
    note: "Join the happy throng of excited participants!",
    rotation: "rotate-[7.8deg]",
    position: "right-14 bottom-3",
    width: "w-[318px]",
    height: "h-[407px]",
    noteWidth: "w-[407px]",
    src: "/gallery/participants.jpg",
  },
  {
    note: "",
    rotation: "-rotate-[2.74deg]",
    position: "left-1/2 top-20 -translate-x-1/2",
    width: "w-[342px]",
    height: "h-[233px]",
    src: "/gallery/food.jpg",
  },
  {
    note: "",
    rotation: "-rotate-[3.7deg]",
    position: "left-1/2 bottom-2 -translate-x-1/2",
    width: "w-[318px]",
    height: "h-[318px]",
    src: "/gallery/happy.jpg",
  },
];

const PastLbw = () => {
  return (
    <section className="overflow-hidden py-16 sm:py-20 lg:py-[140px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-0">
        <div className="mb-8 text-center lg:hidden">
          <h2 className="font-midnight text-[36px] leading-[38px] text-surface sm:text-[48px] sm:leading-[50px]">
            What past LBWs
            <br />
            looked like...
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {PHOTO_CARDS.map((card, idx) => (
            <div
              key={`mobile-${card.position}-${idx}`}
              className="rounded-[20px] bg-[#23672D26] p-1.5"
            >
              <div className="relative h-[220px] overflow-hidden rounded-[18px] sm:h-[260px]">
                <BlurImage
                  src={card.src}
                  alt="Past LBW moment"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mx-auto hidden h-[900px] w-full max-w-[1440px] overflow-hidden lg:block">
          {PHOTO_CARDS.map((card, idx) => (
            <div
              key={`${card.position}-${idx}`}
              className={`absolute rounded-[24px] bg-[#23672D26] p-1.5 ${card.position} ${card.rotation}`}
            >
              <div
                className={`${card.height ?? DEFAULT_PHOTO_CARD_SIZE.height} ${card.width ?? DEFAULT_PHOTO_CARD_SIZE.width} relative overflow-hidden rounded-[24px]`}
              >
                <BlurImage
                  src={card.src}
                  alt="Past LBW moment"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* {card.note && (
                <div
                  className={`absolute -right-8 -top-5 ${card.noteWidth ?? DEFAULT_PHOTO_CARD_SIZE.noteWidth} rounded-lg border border-surface/10 bg-fog/90 px-3 py-2 text-sm leading-[18px] text-surface backdrop-blur-md`}
                >
                  {card.note}
                </div>
              )} */}
            </div>
          ))}

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h2 className="font-midnight text-center text-[64px] leading-[67px] text-surface">
              What past LBWs
              <br />
              looked like...
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastLbw;
