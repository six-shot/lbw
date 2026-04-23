import Link from "next/link";
import React from "react";
import {
  FOOTER_CONTACT,
  FOOTER_QUICK_LINKS,
  FOOTER_WATCH_LINKS,
} from "@/constants/footer";

const Footer = () => {
  return (
    <footer className="bg-primary px-4 py-12 sm:px-6 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
          <div className="flex flex-col gap-6">
            <h5 className="text-tertiary text-[17px] font-inter leading-7">
              Quick Links
            </h5>
            <nav className="flex flex-wrap gap-3">
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
            <nav>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
                <Link className="text-mint font-roboto break-all" href={FOOTER_CONTACT.href}>
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
        <div className="mt-10 border-t border-tertiary/20 py-8">
          <div className="flex flex-col gap-4">
            <div className="flex h-auto items-center justify-center gap-3">
              <h5 className="text-center text-2xl font-roboto leading-7 font-bold text-tertiary">
                Lagos Blockchain Week
              </h5>
            </div>
            <div className="flex h-auto flex-wrap items-center justify-center gap-3">
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-full flex items-center justify-center "></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center text-[13px] text-mint">
            © 2026 Lagos Blockchain Week. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
