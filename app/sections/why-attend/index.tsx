import React from "react";

type BenefitCard = {
  title: string;
  description: string;
  badge: string;
};

const LEFT_BENEFITS: BenefitCard[] = [
  {
    title: "Access",
    description:
      "One conversation here can unlock a deal, a partner, a job, or funding. LBW is built for that.",
    badge: "A",
  },
  {
    title: "Partnership",
    description:
      "Team up with builders, partner with founders, and participate in investor sessions.",
    badge: "P",
  },
];

const RIGHT_BENEFITS: BenefitCard[] = [
  {
    title: "Strategic Positioning",
    description:
      "This is not a sit-down event. It is a pull-up and prove what you are building environment.",
    badge: "S",
  },
  {
    title: "Exhibition & Visibility",
    description:
      "Anyone can build. LBW is the room where the right people finally see you.",
    badge: "E",
  },
];

const BenefitBlock = ({ title, description, badge }: BenefitCard) => {
  return (
    <article className="h-[224px] w-[320px] rounded-2xl border border-surface/20 bg-primary/60 p-6 backdrop-blur-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary/15 text-xl font-semibold text-tertiary">
        {badge}
      </div>
      <h3 className="mt-6 text-[38px] leading-[46px] text-surface">{title}</h3>
      <p className="mt-3 text-[32px] leading-[38px] text-surface/80">{description}</p>
    </article>
  );
};

const WhyAttend = () => {
  return (
    <section className="bg-primary py-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[2.8px] text-surface/90">
            WHAT IS IN IT FOR YOU
          </p>
          <h2 className="mt-2 text-[76px] leading-[90px] text-surface">
            Why You Should Attend LBW&apos;26
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-[320px_1fr_320px] items-center gap-8">
          <div className="flex flex-col gap-8">
            {LEFT_BENEFITS.map((item) => (
              <BenefitBlock key={item.title} {...item} />
            ))}
          </div>

          <div className="h-[456px] rounded-3xl border border-surface/20 bg-[linear-gradient(160deg,#c6d2ff_0%,#6f89cf_45%,#324f9f_100%)] p-3">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-[linear-gradient(160deg,#c7d8ff_0%,#8ca1df_38%,#526fba_100%)] p-6">
              <div className="h-14 w-14 rounded-full bg-surface/35" />
              <p className="max-w-[440px] text-[34px] leading-[42px] text-white/95">
                Builder stories, insight sessions, and practical opportunities in one room.
              </p>
              <div className="h-3 rounded-full bg-primary/50" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {RIGHT_BENEFITS.map((item) => (
              <BenefitBlock key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
