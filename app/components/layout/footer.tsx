import Link from "next/link";
import React from "react";
import {
  FOOTER_CONTACT,
  FOOTER_QUICK_LINKS,
  FOOTER_WATCH_LINKS,
} from "@/constants/footer";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 px-20">
      <div className="max-w-[1440px] mx-auto ">
        <div className="grid grid-cols-3 items-center h-[158px]">
          <div className="flex flex-col gap-6">
            <h5 className="text-tertiary text-[17px] font-inter leading-7">
              Quick Links
            </h5>
            <nav className="flex gap-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <Link key={link.label} className="text-mint font-roboto" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="text-tertiary text-[17px] font-inter leading-7">
              Contact Info
            </h5>
            <nav className="flex gap-3">
              <div className="flex items-center gap-5">
                <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
                <Link className="text-mint font-roboto" href={FOOTER_CONTACT.href}>
                  {FOOTER_CONTACT.label}
                </Link>
              </div>
            </nav>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="text-tertiary text-[17px] font-inter leading-7">
              Watch LBW
            </h5>
            <nav className="flex flex-col gap-4">
              {FOOTER_WATCH_LINKS.map((link) => (
                <Link key={link.label} className="text-mint font-roboto" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className=" border-t border-tertiary/20 mt-8 py-8">
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-center gap-3 items-center h-[60px] ">
              <h5 className="text-tertiary text-2xl font-roboto leading-7 font-bold">
                Lagos Blockchain Week
              </h5>
            </div>
            <div className="flex justify-center gap-3 items-center h-16 ">
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[13px] text-mint">© 2026 Lagos Blockchain Week. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
