import { Button } from "@/app/components/ui/button";
import React from "react";

const SPONSOR_NAMES = [
  "Kleros",
  "Solana",
  "StreamETH",
  "ChainUp",
  "Nodo",
  "NCAIR",
  "Women In DeFi",
  "Ethereum Nigeria",
  "Surdatics",
  "Zone",
  "cNGN",
  "SFI",
  "SIBAN",
  "Asset Chain",
  "Lisk Africa",
  "Flare",
  "DAO Africa",
  "Bchain Africa",
  "Block 24Seven",
  "Ubuntu Tribe",
  "Nigeria Blockchain Week",
  "Anambra Web3 Community",
  "NITDA",
  "VASPA",
  "Web3Lagos",
  "Soar on Technologies",
  "NCAIR Labs",
  "Chain Guild",
  "Build Africa",
  "CryptHub",
];

const Partners = () => {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="text-center">
          <h2 className="text-[64px] leading-[74px] text-surface">
            See our Previous Partners and Sponsors
          </h2>
          <p className="mx-auto mt-4 max-w-[780px] text-[28px] leading-[34px] text-surface/70">
            These companies believed in our vision at LBW and brought many new eyes to their brand.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1240px] grid-cols-6 gap-4">
          {SPONSOR_NAMES.map((name) => (
            <div
              key={name}
              className="flex h-[84px] items-center justify-center rounded-xl border border-surface/10 bg-fog/40 px-4 text-center"
            >
              <span className="text-[28px] leading-[32px] text-surface/90">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg">Become a LBW&apos;26 Sponsor</Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
