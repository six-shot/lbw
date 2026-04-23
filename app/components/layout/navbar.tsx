import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="h-[115px] bg-primary/20 ">
      <div className="max-w-[1440px] mx-auto h-full px-10">
        <div className=" h-full">
          <div className="flex justify-between items-center h-full">
            <Image src="/icon/lbw.svg" width={161} height={83} alt="lbw-logo" />
            <nav className="flex items-center gap-5 xl:gap-6 2xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="text-mint">
                  {link.label}
                </Link>
              ))}
              <Button size="lg">Get Tickets For Event</Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;