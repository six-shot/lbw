import React from "react";

const PHOTO_CARDS = [
  {
    note: "Asides meeting and chatting with industry leaders, The food is amazing!",
    rotation: "-rotate-[10deg]",
    position: "left-6 top-16",
  },
  {
    note: "Happy, brilliant minds, intelligent conversations.",
    rotation: "rotate-[8deg]",
    position: "right-14 top-16",
  },
  {
    note: "Seasoned speakers imparting knowledge.",
    rotation: "-rotate-[6deg]",
    position: "left-10 bottom-16",
  },
  {
    note: "Join the happy throng of excited participants!",
    rotation: "rotate-[8deg]",
    position: "right-14 bottom-16",
  },
  {
    note: "",
    rotation: "rotate-[2deg]",
    position: "left-1/2 top-20 -translate-x-1/2",
  },
  {
    note: "",
    rotation: "-rotate-[2deg]",
    position: "left-1/2 bottom-12 -translate-x-1/2",
  },
];

const PastLbw = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-14">
      <div className="mx-auto h-[720px] w-full max-w-[1440px]">
        {PHOTO_CARDS.map((card, idx) => (
          <div
            key={`${card.position}-${idx}`}
            className={`absolute ${card.position} ${card.rotation}`}
          >
            <div className="h-[180px] w-[280px] rounded-2xl border border-surface/10 bg-[linear-gradient(160deg,#173324_0%,#08170f_100%)] p-3 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_top,#2d5a45_0%,#11261b_48%,#09130d_100%)]" />
            </div>
            {card.note && (
              <div className="absolute -right-8 -top-5 w-[220px] rounded-lg border border-surface/10 bg-fog/90 px-3 py-2 text-sm leading-[18px] text-surface backdrop-blur-md">
                {card.note}
              </div>
            )}
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h2 className="text-center text-[58px] leading-[70px] text-surface">
            What past LBWs
            <br />
            looked like...
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PastLbw;
