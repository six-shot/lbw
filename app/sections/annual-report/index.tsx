import { Button } from "@/app/components/ui/button";
import React from "react";

const AnnualReport = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6">
        <div className="mx-auto max-w-[1200px] rounded-[18px]">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium uppercase tracking-[2.8px] text-tertiary">
                Annual Report
              </p>
              <h2 className="font-midnight text-[36px] leading-[40px] text-white font-medium sm:text-[52px] sm:leading-[56px] lg:text-[64px] lg:leading-[72px]">
                LBW 2025 Report
              </h2>
              <p className="text-sm text-surface/80 sm:text-base">
                A full recap of Lagos Blockchain Week 2025 - highlights,
                numbers, and impact.
              </p>
            </div>

            <Button size="lg" className="w-full sm:w-auto sm:min-w-[284px]">
              View Report (PDF)
            </Button>
          </div>

          <div className="mt-7 h-[220px] rounded-[16px] border border-tertiary/5 bg-fog/5 sm:h-[320px] sm:rounded-[20px] lg:h-[440px] lg:rounded-[24px]" />
        </div>
      </div>
    </section>
  );
};

export default AnnualReport;
