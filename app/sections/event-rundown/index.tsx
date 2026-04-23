"use client";

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
    if (phase === "phase2" && openPhase === "phase2") {
      setOpenPhase("phase1");
      return;
    }
    setOpenPhase(phase);
  };

  return (
    <section className="py-[100px]">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[18px]  px-8 py-12 lg:px-14">
        <div className="relative z-10 mx-auto max-w-[980px]">
          <div className="text-center">
            <h2 className="text-[58px] leading-[64px] text-surface">
              The Intelligent Economy
            </h2>
            <p className="mt-3 text-[16px] uppercase tracking-[1.8px] text-surface/65">
              Powering Nigeria&apos;s Next Wave of Innovation Across Industries
            </p>
          </div>

          <div className="group mt-10 rounded-2xl border border-surface/10 bg-primary/35 px-4 py-4">
            <button
              type="button"
              onClick={() => togglePhase("phase1")}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <div>
                <p className="text-base font-semibold uppercase tracking-[2.6px] text-tertiary">
                  Phase 1 — The Build & Workshop
                </p>
                <p className="mt-1 text-sm text-surface/70">Mon 13 Jul - Fri 17 Jul</p>
              </div>
              <span
                className={`text-[28px] text-tertiary transition-transform ${openPhase === "phase1" ? "rotate-90" : ""}`}
              >
                ›
              </span>
            </button>

            {openPhase === "phase1" && (
              <div className="mt-5 space-y-3">
                {PHASE_ONE_DAYS.map((event) => (
                  <article
                    key={event.day}
                    className="grid grid-cols-[180px_1fr] items-start gap-5 rounded-2xl border border-surface/10 bg-primary/50 px-5 py-4"
                  >
                    <div>
                      <p className="text-[18px] font-semibold leading-[22px] text-tertiary">
                        {event.day}
                      </p>
                      <p className="mt-2 text-sm text-surface/70">{event.month}</p>
                    </div>
                    <div>
                      <span className="inline-flex rounded-full bg-fog/70 px-2 py-1 text-xs text-surface/80">
                        {event.tag}
                      </span>
                      <h3 className="mt-2 text-[22px] leading-[28px] text-surface">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-[16px] leading-[22px] text-surface/65">
                        {event.details}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          <div className="group mt-5 rounded-2xl border border-surface/10 bg-primary/35 px-4 py-4">
            <button
              type="button"
              onClick={() => togglePhase("phase2")}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <div>
                <p className="text-base font-semibold uppercase tracking-[2.6px] text-tertiary">
                  Phase 2 — Conference & Expo, Mixer & Awards Night
                </p>
                <p className="mt-1 text-sm text-surface/70">Sat 18 Jul - Sun 19 Jul</p>
              </div>
              <span
                className={`text-[28px] text-tertiary transition-transform ${openPhase === "phase2" ? "rotate-90" : ""}`}
              >
                ›
              </span>
            </button>
            {openPhase === "phase2" && (
              <div className="mt-4 space-y-3">
                {PHASE_TWO_DAYS.map((event) => (
                  <article
                    key={event.day}
                    className="grid grid-cols-[180px_1fr] items-start gap-5 rounded-2xl border border-surface/10 bg-primary/50 px-5 py-4"
                  >
                    <div>
                      <p className="text-[18px] font-semibold leading-[22px] text-tertiary">
                        {event.day}
                      </p>
                      <p className="mt-2 text-sm text-surface/70">{event.month}</p>
                    </div>
                    <div>
                      <span className="inline-flex rounded-full bg-fog/70 px-2 py-1 text-xs text-surface/80">
                        {event.tag}
                      </span>
                      <h3 className="mt-2 text-[22px] leading-[28px] text-surface">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-[16px] leading-[22px] text-surface/65">
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
