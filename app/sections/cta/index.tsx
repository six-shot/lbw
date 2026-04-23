import { Button } from "@/app/components/ui/button";
import React from "react";

const Cta = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-[148px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6">
        <div className="relative h-auto overflow-hidden rounded-[20px] border border-tertiary/10 bg-[linear-gradient(90deg,rgba(0,20,4,0.86)_0%,rgba(0,37,7,0.86)_100%)] px-4 py-8 text-center sm:rounded-[28px] sm:px-6 sm:py-10 lg:h-[392px] lg:rounded-[36px] lg:pt-16">
          <div className="absolute inset-0 bg-[url('/icon/mask.svg')] bg-cover bg-center bg-no-repeat" />
          <div className="relative z-10">
            <h2 className="text-[34px] leading-[34px] text-white sm:text-[48px] sm:leading-[44px] lg:text-[64px] lg:leading-[48px]">
              Secure your place at LBW 2026
            </h2>
            <p className="mx-auto mt-5 max-w-[730px] text-sm text-ivory/80 sm:mt-7 sm:text-base lg:mt-8">
              Developers, designers, founders, creatives, and every blockchain enthusiast. Now is
              the time to join ecosystem players across Web3, fintech, AI, and the government to
              connect, learn and showcase your businesses and company. Be there!
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:mt-[39px]">
              <Button size="xl" className="w-full sm:w-auto sm:min-w-[285px]">
                Explore Packages
              </Button>
              <Button size="xl" variant="secondary" className="w-full sm:w-auto sm:min-w-[285px]">
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
