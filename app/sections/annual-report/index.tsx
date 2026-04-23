import { Button } from "@/app/components/ui/button";
import React from "react";

const AnnualReport = () => {
  return (
    <section className=" ">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="mx-auto max-w-[1200px] rounded-[18px] ">
          <div className="flex items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium uppercase tracking-[2.8px] text-tertiary">
                Annual Report
              </p>
              <h2 className=" text-[64px] leading-[72px] text-white font-midnight">LBW 2025 Report</h2>
              <p className=" text-surface/80">
                A full recap of Lagos Blockchain Week 2025 - highlights, numbers, and impact.
              </p>
            </div>

            <Button size="lg" className="min-w-[284px]">
              View Report (PDF)
            </Button>
          </div>

          <div className="mt-7 h-[440px] rounded-[24px] border border-tertiary/5 bg-fog/5" />
        </div>
      </div>
    </section>
  );
};

export default AnnualReport;
