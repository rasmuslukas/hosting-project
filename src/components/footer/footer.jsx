import React from "react";
import { FooterHeader } from "./header/footerHeader";
import { FooterBottom } from "./bottom/footerBottom";

export function Footer() {
  return (
    <div className="bg-dark8 text-center laptop:text-left w-screen relative">
      <FooterBottom />
    </div>
  );
}
