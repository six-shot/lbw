import type { NavLink } from "./navigation";

export type FooterLink = {
  href: string;
  label: string;
};

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/sponsor", label: "Sponsor" },
];

export const FOOTER_CONTACT = {
  href: "mailto:info@nigeriablockchainweek.ng",
  label: "info@nigeriablockchainweek.ng",
};

export const FOOTER_WATCH_LINKS: FooterLink[] = [
  { href: "/", label: "LBW TV 2024" },
  { href: "/", label: "LBW TV 2025" },
];
