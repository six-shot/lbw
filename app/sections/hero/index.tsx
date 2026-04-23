import Navbar from "@/app/components/layout/navbar";
import { Button } from "@/app/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[1026px] bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat flex flex-col">
      <Navbar />
      <div className="max-w-[1440px] mx-auto w-full flex-1 flex items-center justify-center">
        <div className="h-[698px] w-full bg-tertiary/3 border border-accent/10 rounded-[40px] backdrop-blur-[7px] flex flex-col justify-center items-center">
          <h1 className=" font-midnight text-[160px] leading-[131px] text-center">
            Lagos Blockchain Week ‘26
          </h1>
          <p className="w-[833px] text-center text-xl leading-[29px] mt-6">
            One week. One city. The Lagos Blockchain Week is the flagship
            chapter of Nigeria Blockchain Week, a national movement building
            city-level blockchain weeks across Nigeria.{" "}
          </p>
          <div className="mt-8 flex gap-4 items-center">
            <Button size="lg">Secure My Place at LBW 2026</Button>
            <Button size="xl" variant="secondary" className="px-[73px]">
              Become a Sponsor
            </Button>
          </div>
          <p className="text-2xl leading-[29px] text-white mt-10">Date: July 13–19, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
