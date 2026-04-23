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
      "col-span-4 col-start-1 row-start-1 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[0],
  },
  {
    className:
      "col-span-3 col-start-5 row-start-1 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[1],
  },
  {
    className:
      "col-span-3 col-start-8 row-start-1 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[2],
  },
  {
    className:
      "col-span-2 col-start-11 row-span-2 row-start-1 h-[436px] rounded-[24px]",
    src: GALLERY_IMAGES[3],
  },
  {
    className:
      "col-span-2 col-start-1 row-start-2 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[4],
  },
  {
    className:
      "col-span-3 col-start-3 row-span-2 row-start-2 h-[436px] rounded-[24px]",
    src: GALLERY_IMAGES[5],
  },
  {
    className:
      "col-span-3 col-start-6 row-span-2 row-start-2 h-[436px] rounded-[24px]",
    src: GALLERY_IMAGES[6],
  },
  {
    className:
      "col-span-2 col-start-9 row-span-2 row-start-2 h-[436px] rounded-[24px]",
    src: GALLERY_IMAGES[7],
  },
  {
    className:
      "col-span-2 col-start-1 row-start-3 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[8],
  },
  {
    className:
      "col-span-2 col-start-11 row-start-3 h-[210px] rounded-[24px]",
    src: GALLERY_IMAGES[1],
  },
];

const AtAGlance = () => {
  return (
    <section className="py-[144px]">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="text-center mb-[42px]">
          <p className="text-sm font-medium uppercase tracking-[2.8px] text-white">
            SEE WHAT PREVIOUS EVENTS LOOKED LIKE (IN PICTURES)
          </p>
          <h2 className="mt-4 text-[64px] leading-[48px] text-surface font-midnight font-medium">
            Lagos Blockchain Week at a glance...
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1440px] grid-cols-12 gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <article
              key={`gallery-tile-${index}`}
              className={`relative overflow-hidden border border-surface/10 ${item.className}`}
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
