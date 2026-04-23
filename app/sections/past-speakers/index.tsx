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
    <section className="relative bg-[linear-gradient(90deg,rgba(0,20,4,0.72)_0%,rgba(0,37,7,0.72)_100%)] py-[50px]">
      {" "}
      <div className="absolute inset-0 bg-[url('/icon/mask.svg')] bg-cover bg-center bg-no-repeat" />
      <div className="relative mx-auto w-full max-w-[1440px]  flex flex-col items-center justify-center overflow-hidden rounded-[18px] px-14 py-10">
        <div className="relative z-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[2.8px] text-surface/85">
            THE BEST OF THE BEST ACROSS INDUSTRIES
          </p>
          <h2 className="mt-4 text-[64px] leading-[72px] text-surface font-medium">
            Prestigious Past Speakers
          </h2>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-6">
          {/* <button
            aria-label="Previous speakers"
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-tertiary/30 bg-tertiary/10 text-[42px] text-tertiary"
          >
            ‹
          </button> */}

          <div className="flex gap-4 mt-[47px]">
            <Image
              src="/speaker-1.svg"
              alt="Speaker 1"
              width={370}
              height={326}
            />
            <Image
              src="/speaker-1.svg"
              alt="Speaker 1"
              width={370}
              height={326}
            />
            <Image
              src="/speaker-1.svg"
              alt="Speaker 1"
              width={370}
              height={326}
            />
          </div>

          {/* <button
            aria-label="Next speakers"
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-tertiary/30 bg-tertiary/10 text-[42px] text-tertiary"
          >
            ›
          </button> */}
        </div>

        <p className="relative z-10 mt-10 text-center text-[24px] leading-[30px] text-surface/70">
          Interested in speaking at the Lagos Blockchain Week 2026?
        </p>
        <div className="relative z-10 mt-6 flex justify-center">
          <Button size="xl" className="min-w-[284px]">
            Become a Speaker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PastSpeakers;
