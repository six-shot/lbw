import { Button } from "@/app/components/ui/button";
import React from "react";

const Cta = () => {
  return (
    <section className="py-[148px] ">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="relative  overflow-hidden rounded-[36px] pt-16 border border-tertiary/10 bg-[linear-gradient(90deg,rgba(0,20,4,0.86)_0%,rgba(0,37,7,0.86)_100%)] h-[392px] text-center">
          <div className="absolute inset-0 bg-[url('/icon/mask.svg')] bg-cover bg-center bg-no-repeat" />
          <div className="relative z-10">
            <h2 className="text-[64px] leading-[48px]  text-white">
              Secure your place at LBW 2026
            </h2>
            <p className="mx-auto mt-8 max-w-[730px] text-ivory/80  ">
              Developers, designers, founders, creatives, and every blockchain enthusiast. Now is
              the time to join ecosystem players across Web3, fintech, AI, and the government to
              connect, learn and showcase your businesses and company. Be there!
            </p>

            <div className="mt-[39px] flex justify-center gap-4">
              <Button size="xl" className="min-w-[285px]">
                Explore Packages
              </Button>
              <Button size="xl" variant="secondary" className="min-w-[285px]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
