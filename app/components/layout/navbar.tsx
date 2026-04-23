import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="h-[92px] bg-primary/20 lg:h-[115px]">
      <div className="mx-auto h-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="h-full">
          <div className="flex h-full items-center justify-between">
            <Image
              src="/icon/lbw.svg"
              width={161}
              height={83}
              alt="lbw-logo"
              className="h-[56px] w-auto lg:h-[83px]"
            />
            <nav className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hidden text-mint lg:inline-block"
                >
                  {link.label}
                </Link>
              ))}
              <Button size="md" className="sm:h-[64px] sm:px-10 sm:text-base">
                Get Tickets For Event
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;