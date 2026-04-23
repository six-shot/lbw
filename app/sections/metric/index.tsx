import React from "react";

const METRIC_CARDS = [
  { value: "8k+", label: "Registrations" },
  { value: "5k+", label: "Previous physical attendees" },
  { value: "30+", label: "Speakers" },
];

const SUPPORTING_STATS = ["2.2M+ Impressions", "7.2K Livestream Viewers"];

const Metric = () => {
  return (
    <section className="relative h-[456px] overflow-hidden bg-[linear-gradient(90deg,rgba(0,20,4,0.40)_0%,rgba(0,37,7,0.40)_100%)] py-[54px]">
      <div className="absolute inset-0 bg-[url('/icon/mask.svg')] bg-cover bg-center bg-no-repeat" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center">
        <div className="flex flex-col items-center">
          <h5 className="text-sm font-medium leading-5 tracking-[2.8px] uppercase text-surface">
            PREVIOUS YEARS WERE GREAT!
          </h5>
          <h2 className="mt-1 text-[56px] leading-[68px] text-surface font-midnight">
            The Conference
          </h2>
        </div>

        {/* <div className="mt-6 flex items-center gap-6">
          {METRIC_CARDS.map((card) => (
            <div
              key={card.label}
              className="flex h-[128px] w-[280px] flex-col items-center justify-center rounded-[8px] border border-surface/15 bg-fog backdrop-blur-[2px]"
            >
              <p className="text-[46px] leading-[50px] text-surface">{card.value}</p>
              <p className="mt-1 text-[27px] leading-[31px] text-surface/85">
                {card.label}
              </p>
            </div>
          ))}
        </div> */}

        {/* <div className="mt-5 flex items-center gap-7 text-surface/65">
          {SUPPORTING_STATS.map((item, idx) => (
            <div key={item} className="flex items-center gap-2">
              {idx === 0 && <span className="text-[#39B5E8]">x</span>}
              <span className="text-[22px] leading-[26px]">{item}</span>
            </div>
          ))}
        </div>

        <button className="mt-6 text-[22px] font-medium leading-[26px] text-tertiary">
          See 2025 Recap <span aria-hidden>→</span>
        </button> */}
      </div>
    </section>
  );
};

export default Metric;
