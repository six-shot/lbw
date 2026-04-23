import Navbar from "@/app/components/layout/navbar";
import { Button } from "@/app/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="flex min-h-[760px] flex-col bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat lg:min-h-[860px] xl:min-h-[900px] 2xl:h-[950px]">
      <Navbar />
      <div className="mt-6 px-4 sm:px-6 md:mt-10 lg:mt-[70px] lg:px-10 xl:px-[56px] 2xl:mt-[88px]">
        <div className="mx-auto flex w-full max-w-[1440px]">
          <div className="flex w-full flex-col items-center justify-center rounded-[20px] border border-accent/10 bg-tertiary/3 px-4 py-8 backdrop-blur-[7px] sm:px-6 md:py-10 lg:min-h-[560px] lg:px-10 xl:min-h-[620px] xl:rounded-[40px] 2xl:min-h-[698px]">
            <h1 className="font-midnight text-center text-[46px] leading-[44px] sm:text-[56px] sm:leading-[52px] md:text-[68px] md:leading-[62px] lg:text-[108px] lg:leading-[95px] xl:text-[140px] xl:leading-[120px] 2xl:text-[160px] 2xl:leading-[131px]">
              Lagos Blockchain Week ‘26
            </h1>
            <p className="mt-5 max-w-[833px] text-center text-sm leading-6 sm:text-base sm:leading-7 lg:text-lg xl:text-xl xl:leading-[29px]">
              One week. One city. The Lagos Blockchain Week is the flagship
              chapter of Nigeria Blockchain Week, a national movement building
              city-level blockchain weeks across Nigeria.{" "}
            </p>
            <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Secure My Place at LBW 2026
              </Button>
              <Button size="xl" variant="secondary" className="w-full sm:w-auto sm:px-[73px]">
                Become a Sponsor
              </Button>
            </div>
            <p className="mt-8 text-base leading-6 text-white sm:text-lg lg:mt-10 lg:text-2xl lg:leading-[29px]">
              Date: July 13–19, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
