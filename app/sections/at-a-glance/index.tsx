import React from "react";

const AtAGlance = () => {
  return (
    <section className="py-[144px]">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="text-center mb-[42px]">
          <p className="text-sm font-medium uppercase tracking-[2.8px] text-white">
            SEE WHAT PREVIOUS EVENTS LOOKED LIKE (IN PICTURES)
          </p>
          <h2 className="mt-4 text-[64px] leading-[48px] text-surface font-midnight font-medium">
            Lagos Blockchain Week at a glance...
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1440px] grid-cols-12 gap-4">
          <article className="col-span-4 col-start-1 row-start-1 h-[200px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#394a45_0%,#14231d_100%)]" />
          <article className="col-span-3 col-start-5 row-start-1 h-[200px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#4f4a3f_0%,#1d241f_100%)]" />
          <article className="col-span-3 col-start-8 row-start-1 h-[200px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#5f5a4f_0%,#202620_100%)]" />
          <article className="col-span-2 col-start-11 row-span-2 row-start-1 h-[413px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#5a4f45_0%,#1f211e_100%)]" />

          <article className="col-span-2 col-start-1 row-start-2 h-[200px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#5d5a4f_0%,#20251f_100%)]" />
          <article className="col-span-3 col-start-3 row-span-2 row-start-2 h-[413px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#5f6462_0%,#1d2622_100%)]" />
          <article className="col-span-3 col-start-6 row-span-2 row-start-2 h-[413px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#4e5755_0%,#17211d_100%)]" />
          <article className="col-span-2 col-start-9 row-span-2 row-start-2 h-[413px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#594f61_0%,#1f1c26_100%)]" />

          <article className="col-span-2 col-start-1 row-start-3 h-[200px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#4b4742_0%,#1f201e_100%)]" />
          <article className="col-span-2 col-start-11 row-start-3 h-[200px] rounded-3xl border border-surface/10 bg-[linear-gradient(145deg,#3f4744_0%,#18201d_100%)]" />
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;
