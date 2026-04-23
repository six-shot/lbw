import Image from "next/image";
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

const GALLERY_ITEMS = [
  {
    className:
      "lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:h-[210px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[0],
  },
  {
    className:
      "lg:col-span-3 lg:col-start-5 lg:row-start-1 lg:h-[210px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[1],
  },
  {
    className:
      "lg:col-span-3 lg:col-start-8 lg:row-start-1 lg:h-[210px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[2],
  },
  {
    className:
      "lg:col-span-2 lg:col-start-11 lg:row-span-2 lg:row-start-1 lg:h-[436px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[3],
  },
  {
    className:
      "lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:h-[210px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[4],
  },
  {
    className:
      "lg:col-span-3 lg:col-start-3 lg:row-span-2 lg:row-start-2 lg:h-[436px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[5],
  },
  {
    className:
      "lg:col-span-3 lg:col-start-6 lg:row-span-2 lg:row-start-2 lg:h-[436px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[6],
  },
  {
    className:
      "lg:col-span-2 lg:col-start-9 lg:row-span-2 lg:row-start-2 lg:h-[436px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[7],
  },
  {
    className:
      "lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:h-[210px] lg:rounded-[24px]",
    src: GALLERY_IMAGES[8],
  },
  {
    className:
      "lg:col-span-2 lg:col-start-11 lg:row-start-3 lg:h-[210px] lg:rounded-[24px]",
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

        <div className="mx-auto mt-8 grid max-w-[1440px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
          {GALLERY_ITEMS.map((item, index) => (
            <article
              key={`gallery-tile-${index}`}
              className={`relative col-span-1 h-[160px] overflow-hidden rounded-[16px] border border-surface/10 sm:h-[210px] sm:rounded-[24px] lg:h-auto lg:rounded-none ${item.className}`}
            >
              <Image
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
