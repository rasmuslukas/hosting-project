import React from "react";
import { FooterHeader } from "./header/footerHeader";
import { FooterItems } from "./items/footerItems";
import { FooterSocials } from "./socials/footerSocials";

export function Footer() {
  return (
    <footer className="bg-dark8 text-center laptop:text-left w-screen">
      <FooterHeader />
      <FooterItems />
      <FooterSocials />
    </footer>
  );
}
