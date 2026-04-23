"use client";

import React from "react";
import Marquee from "react-fast-marquee";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Lagos Blockchain Week exceeded my expectations; connecting with diverse professionals, exchanging knowledge, and building valuable networks for a dynamic future.",
    name: "Demilade Johnson",
    role: "Digital Marketer",
  },
  {
    quote:
      "Lagos Blockchain Week exceeded my expectations; connecting with diverse professionals, exchanging knowledge, and building valuable networks for a dynamic future.",
    name: "Grace Joseph",
    role: "Blockchain Developer",
  },
  {
    quote:
      "Lagos Blockchain Week exceeded my expectations; connecting with diverse professionals, exchanging knowledge, and building valuable networks for a dynamic future.",
    name: "Kauther Abubakar",
    role: "Content Creator",
  },
  {
    quote:
      "Lagos Blockchain Week exceeded my expectations; connecting with diverse professionals, exchanging knowledge, and building valuable networks for a dynamic future.",
    name: "Paul Timothy",
    role: "Business Developer",
  },
  {
    quote:
      "Lagos Blockchain Week exceeded my expectations; connecting with diverse professionals, exchanging knowledge, and building valuable networks for a dynamic future.",
    name: "Favour Ekemini",
    role: "AI and Data Engineer",
  },
  {
    quote:
      "Lagos Blockchain Week exceeded my expectations; connecting with diverse professionals, exchanging knowledge, and building valuable networks for a dynamic future.",
    name: "Tumilara Omobolane",
    role: "Web3 Product Designer",
  },
  {
    quote:
      "Lagos Blockchain Week exceeded my expectations; connecting with diverse professionals, exchanging knowledge, and building valuable networks for a dynamic future.",
    name: "Chioma Adanne",
    role: "Smart Contract Developer",
  },
  {
    quote:
      "Lagos Blockchain Week exceeded my expectations; connecting with diverse professionals, exchanging knowledge, and building valuable networks for a dynamic future.",
    name: "Comfort Adelegan",
    role: "Graphics Designer",
  },
];

const TestimonialCard = ({ quote, name, role }: Testimonial) => (
  <article className="h-[204px] w-[330px] rounded-2xl border border-surface/10 bg-primary/65 p-5 backdrop-blur-sm">
    <p className="text-[16px] leading-[24px] text-surface/70">"{quote}"</p>
    <h4 className="mt-4 text-[24px] leading-[28px] text-surface">{name}</h4>
    <p className="mt-1 text-[18px] leading-[22px] text-surface/65">{role}</p>
  </article>
);

const Community = () => {
  return (
    <section className="overflow-x-hidden pt-[144px]">
      <div className="mb-12 overflow-x-hidden">
        <h2 className="mb-8 text-center text-[48px] leading-[40px] text-white font-midnight">
          Hear from the community...
        </h2>

        <Marquee gradient={false} speed={35} pauseOnHover className="overflow-x-hidden">
          <div className="flex gap-4 pr-4">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Marquee>

        <Marquee
          gradient={false}
          speed={35}
          direction="right"
          pauseOnHover
          className="mt-4 overflow-x-hidden py-2"
        >
          <div className="flex gap-4 pr-4">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-reverse`} {...testimonial} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Community;
