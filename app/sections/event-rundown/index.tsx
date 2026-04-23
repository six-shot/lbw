"use client";

import { CaretdownIcon, CaretRightIcon, ClockIcon, CodeIcon, Staricon } from "@/app/components/ui/icons";
import React, { useState } from "react";

type EventDay = {
  day: string;
  month: string;
  tag: string;
  title: string;
  details: string;
};

const PHASE_ONE_DAYS: EventDay[] = [
  {
    day: "Mon 13 Jul",
    month: "08:30 AM",
    tag: "Core",
    title: "Main Summit: Panels on DeFi, NFTs & Creative Economy",
    details: "Check in, collect badges, find your team and get set up for the week.",
  },
  {
    day: "Tue 14 Jul",
    month: "08:30 AM",
    tag: "Keynote",
    title: "Blockchain for Governance, AI, Web3, Regulatory",
    details: "Hands-on workshop exploring how to build and deploy agents on Layer 2 blockchains.",
  },
  {
    day: "Wed 15 Jul",
    month: "08:30 AM",
    tag: "Hackathon",
    title: "Hackathon & Builders Track, Demo",
    details: "Meet the sponsors and track leads. The 48-hour build sprint officially kicks off.",
  },
  {
    day: "Thu 16 Jul",
    month: "08:30 AM",
    tag: "Summit",
    title: "Book Launch, Creators Day, Award",
    details: "Break into workshop options then build and deploy AI agents on Layer 2 blockchain.",
  },
  {
    day: "Fri 17 Jul",
    month: "08:30 AM",
    tag: "Event",
    title: "Exhibitors & Startup Showcase",
    details: "Show your product, pitch to partners, and connect with buyers and builders.",
  },
];

const PHASE_TWO_DAYS: EventDay[] = [
  {
    day: "Sat 18 Jul",
    month: "10:00 AM",
    tag: "Expo",
    title: "Conference Expo & Investor Meetups",
    details:
      "Product showcases, startup booths, investor rooms, and partner activations across venues.",
  },
  {
    day: "Sun 19 Jul",
    month: "06:00 PM",
    tag: "Awards",
    title: "Awards Night, Mixer & Closing Celebration",
    details:
      "Community recognition, speaker awards, closing keynote, and networking mixer to wrap the week.",
  },
];

const EventRundown = () => {
  const [openPhase, setOpenPhase] = useState<"phase1" | "phase2">("phase1");

  const togglePhase = (phase: "phase1" | "phase2") => {
    if (openPhase === phase) {
      setOpenPhase(phase === "phase1" ? "phase2" : "phase1");
      return;
    }
    setOpenPhase(phase);
  };

  return (
    <section className="pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-[282px] lg:pt-[176px]">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[18px] px-4 sm:px-6 lg:px-14">
        <div className="relative z-10 mx-auto max-w-[1168px]">
          <div className="text-center">
            <h2 className="font-midnight text-[30px] leading-[30px] text-white sm:text-[44px] sm:leading-[40px] lg:text-[64px] lg:leading-[48px]">
              The Intelligent Economy
            </h2>
            <p className="mt-2 text-[11px] text-surface sm:mt-4 sm:text-[15px]">
              Powering Nigeria&apos;s Next Wave of Innovation Across Industries
            </p>
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => togglePhase("phase1")}
              className="flex h-[56px] w-full items-center justify-between border-b border-[#1F431330] text-left"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <CodeIcon />
                <div>
                  <p className="text-sm uppercase tracking-[1px] text-white sm:text-base lg:text-lg">
                    Phase 1 — The Build & Workshop
                  </p>
                  <p className="text-[12px] text-[#99A1AF] sm:text-[14px]">
                    Mon 13 Jul - Fri 17 Jul
                  </p>
                </div>
              </div>
              {openPhase === "phase1" ? <CaretdownIcon /> : <CaretRightIcon />}
            </button>

            {openPhase === "phase1" && (
              <div className="mt-4 space-y-3 sm:space-y-4">
                {PHASE_ONE_DAYS.map((event) => (
                  <article
                    key={event.day}
                    className="grid grid-cols-1 gap-3 rounded-[16px] border border-surface/10 bg-primary/50 px-4 py-4 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-5 sm:px-5 sm:py-4 lg:h-[102px] lg:py-0"
                  >
                    <div className="">
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] font-semibold leading-[22px] text-tertiary">
                          {event.day}
                        </p>
                        <span className="inline-flex rounded-full bg-fog/70 px-2 ph-[21px] text-xs text-surface/80">
                          {event.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon />
                        <p className="mt-2 text-sm text-surface/70">
                          {event.month}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base leading-5 text-[#F4FFF1] sm:text-[20px] sm:leading-[24px] lg:text-[22px] lg:leading-[28px]">
                        {event.title}
                      </h3>
                      <p className="mt-3 text-[13px]  text-[#99A1AF]">
                        {event.details}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          <div className="mt-5">
            <button
              type="button"
              onClick={() => togglePhase("phase2")}
              className="flex h-[56px] w-full items-center justify-between border-b border-[#1F431330] text-left"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Staricon />
                <div>
                  <p className="text-sm uppercase tracking-[1px] text-white sm:text-base lg:text-lg">
                    Phase 2 — Conference & Expo, Mixer & Awards Night
                  </p>
                  <p className="text-[12px] text-[#99A1AF] sm:text-[14px]">Sat 18 Jul - Sun 19 Jul</p>
                </div>
              </div>
              {openPhase === "phase2" ? <CaretdownIcon /> : <CaretRightIcon />}
            </button>
            {openPhase === "phase2" && (
              <div className="mt-4 space-y-3 sm:space-y-4">
                {PHASE_TWO_DAYS.map((event) => (
                  <article
                    key={event.day}
                    className="grid grid-cols-1 gap-3 rounded-[16px] border border-surface/10 bg-primary/50 px-4 py-4 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-5 sm:px-5 sm:py-4 lg:h-[102px] lg:py-0"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] font-semibold leading-[22px] text-tertiary">
                          {event.day}
                        </p>
                        <span className="inline-flex rounded-full bg-fog/70 px-2 ph-[21px] text-xs text-surface/80">
                          {event.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon />
                        <p className="mt-2 text-sm text-surface/70">{event.month}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base leading-5 text-[#F4FFF1] sm:text-[20px] sm:leading-[24px] lg:text-[22px] lg:leading-[28px]">
                        {event.title}
                      </h3>
                      <p className="mt-3 text-[13px] text-[#99A1AF]">
                        {event.details}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRundown;
