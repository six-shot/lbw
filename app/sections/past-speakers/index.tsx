import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import React from "react";

const SPEAKERS = [
  { name: "Ashley Emmanuel", role: "CEO, Her Economy | Offline Remittance" },
  { name: "Mr. Benito Elisa", role: "CEO BANANGA A.G. | Softvet" },
  { name: "Victoria Adedugo", role: "Lead Analyst, NXP" },
];

const PastSpeakers = () => {
  return (
    <section className="relative bg-[linear-gradient(90deg,rgba(0,20,4,0.72)_0%,rgba(0,37,7,0.72)_100%)] py-12 lg:py-[50px]">
      {" "}
      <div className="absolute inset-0 bg-[url('/icon/mask.svg')] bg-cover bg-center bg-no-repeat" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden rounded-[18px] px-4 py-8 sm:px-6 lg:px-14 lg:py-10">
        <div className="relative z-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[2.8px] text-surface/85">
            THE BEST OF THE BEST ACROSS INDUSTRIES
          </p>
          <h2 className="mt-4 text-[36px] leading-[40px] text-surface font-medium sm:text-[48px] sm:leading-[54px] lg:text-[64px] lg:leading-[72px]">
            Prestigious Past Speakers
          </h2>
        </div>

        <div className="relative z-10 mt-8 flex w-full items-center justify-between gap-4 lg:gap-6">
          {/* <button
            aria-label="Previous speakers"
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-tertiary/30 bg-tertiary/10 text-[42px] text-tertiary"
          >
            ‹
          </button> */}

          <div className="mt-0 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[47px] lg:flex">
            <Image
              src="/speaker-1.svg"
              alt="Speaker 1"
              width={370}
              height={326}
              className="h-auto w-full lg:w-[370px]"
            />
            <Image
              src="/speaker-1.svg"
              alt="Speaker 1"
              width={370}
              height={326}
              className="h-auto w-full lg:w-[370px]"
            />
            <Image
              src="/speaker-1.svg"
              alt="Speaker 1"
              width={370}
              height={326}
              className="h-auto w-full sm:col-span-2 lg:w-[370px]"
            />
          </div>

          {/* <button
            aria-label="Next speakers"
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-tertiary/30 bg-tertiary/10 text-[42px] text-tertiary"
          >
            ›
          </button> */}
        </div>

        <p className="relative z-10 mt-8 text-center text-base leading-6 text-surface/70 sm:text-lg lg:mt-10 lg:text-[24px] lg:leading-[30px]">
          Interested in speaking at the Lagos Blockchain Week 2026?
        </p>
        <div className="relative z-10 mt-5 flex w-full justify-center lg:mt-6">
          <Button size="xl" className="w-full sm:w-auto sm:min-w-[284px]">
            Become a Speaker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PastSpeakers;
