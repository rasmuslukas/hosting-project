import React from "react";
import { FooterHeader } from "./header/footerHeader";
import { FooterItems } from "./items/footerItems";
import { FooterSocials } from "./socials/footerSocials";
import { FooterBottom } from "./bottom/footerBottom";

export function Footer() {
  return (
    <footer className="bg-dark8 text-center laptop:text-left w-screen">
      <FooterHeader />
      <FooterBottom />
    </footer>
  );
}
