import Navbar from "@/app/components/layout/navbar";
import { Button } from "@/app/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="flex min-h-[860px] flex-col bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat xl:min-h-[1026px]">
      <Navbar />
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-center justify-center px-6 pb-8 pt-6 xl:px-0 xl:pb-0">
        <div className="flex w-full flex-col items-center justify-center rounded-[28px] border border-accent/10 bg-tertiary/3 px-6 py-12 backdrop-blur-[7px] lg:min-h-[560px] lg:px-10 xl:min-h-[698px] xl:rounded-[40px]">
          <h1 className="font-midnight text-center text-[72px] leading-[68px] lg:text-[108px] lg:leading-[95px] xl:text-[140px] xl:leading-[120px] 2xl:text-[160px] 2xl:leading-[131px]">
            Lagos Blockchain Week ‘26
          </h1>
          <p className="mt-6 max-w-[833px] text-center text-base leading-7 lg:text-lg xl:text-xl xl:leading-[29px]">
            One week. One city. The Lagos Blockchain Week is the flagship
            chapter of Nigeria Blockchain Week, a national movement building
            city-level blockchain weeks across Nigeria.{" "}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">Secure My Place at LBW 2026</Button>
            <Button size="xl" variant="secondary" className="px-[73px]">
              Become a Sponsor
            </Button>
          </div>
          <p className="mt-10 text-xl leading-7 text-white lg:text-2xl lg:leading-[29px]">
            Date: July 13–19, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
