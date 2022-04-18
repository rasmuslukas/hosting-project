import React from "react";
import { HeroBanner } from "../../components/hero-banner/HeroBanner";
import { SectionSocial } from "../../components/section/social/sectionSocial";
import { Spacer } from "../../components/spacer/spacer";
import { SectionFeature } from "../../components/section/features/sectionFeature";

export function Homepage() {
  return (
    <div className={"pt-16"}>
      <HeroBanner />
      <SectionFeature />
      <SectionSocial />
      <Spacer />
    </div>
  );
}
