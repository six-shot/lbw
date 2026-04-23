import BlurImage from "@/app/components/miscellaneous/blur-image";
import React from "react";

const GALLERY_IMAGES = [
  "/gallery/image-2.jpg",
  "/gallery/image-1.jpg",
  "/gallery/image-3.jpg",
  "/gallery/image-4.jpg",
  "/gallery/image-5.jpg",
  "/gallery/image-6.jpg",
  "/gallery/image-7.jpg",
  "/gallery/image7.jpg",
  "/gallery/12f11fb907eba203dd70e6c462ae26485c0b096f.jpg",
];

const DESKTOP_GALLERY_ITEMS = [
  {
    className: "col-span-4 col-start-1 row-start-1 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[0],
  },
  {
    className: "col-span-3 col-start-5 row-start-1 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[1],
  },
  {
    className: "col-span-3 col-start-8 row-start-1 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[2],
  },
  {
    className: "col-span-2 col-start-11 row-span-2 row-start-1 h-[436px] rounded-[24px]",
    src: GALLERY_IMAGES[3],
  },
  {
    className: "col-span-2 col-start-1 row-start-2 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[4],
  },
  {
    className: "col-span-3 col-start-3 row-span-2 row-start-2 h-[436px] rounded-[24px]",
    src: GALLERY_IMAGES[5],
  },
  {
    className: "col-span-3 col-start-6 row-span-2 row-start-2 h-[436px] rounded-[24px]",
    src: GALLERY_IMAGES[6],
  },
  {
    className: "col-span-2 col-start-9 row-span-2 row-start-2 h-[436px] rounded-[24px]",
    src: GALLERY_IMAGES[7],
  },
  {
    className: "col-span-2 col-start-1 row-start-3 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[8],
  },
  {
    className: "col-span-2 col-start-11 row-start-3 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[1],
  },
];

const AtAGlance = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-[144px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-[42px]">
          <p className="text-sm font-medium uppercase tracking-[2.8px] text-white">
            SEE WHAT PREVIOUS EVENTS LOOKED LIKE (IN PICTURES)
          </p>
          <h2 className="mt-4 font-midnight text-[34px] leading-[32px] text-surface font-medium sm:text-[48px] sm:leading-[42px] lg:text-[64px] lg:leading-[48px]">
            Lagos Blockchain Week at a glance...
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1440px] grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          {DESKTOP_GALLERY_ITEMS.map((item, index) => (
            <article
              key={`gallery-mobile-tile-${index}`}
              className="relative col-span-1 h-[160px] overflow-hidden rounded-[16px] border border-surface/10 sm:h-[210px] sm:rounded-[24px]"
            >
              <BlurImage
                src={item.src}
                alt="LBW gallery moment"
                fill
                className="object-cover object-center"
              />
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 hidden max-w-[1440px] grid-cols-12 gap-4 lg:grid">
          {DESKTOP_GALLERY_ITEMS.map((item, index) => (
            <article
              key={`gallery-desktop-tile-${index}`}
              className={`relative overflow-hidden border border-surface/10 ${item.className}`}
            >
              <BlurImage
                src={item.src}
                alt="LBW gallery moment"
                fill
                className="object-cover object-center"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;
