import React from "react";
import { HeroBanner } from "../../components/hero-banner/HeroBanner";
import { SectionSocial } from "../../components/section/social/sectionSocial";
import { Spacer } from "../../components/spacer/spacer";
import { SectionFeature } from "../../components/section/features/sectionFeature";

export function Homepage() {
  return (
    <div className={"pt-16"}>
      <HeroBanner />
        <div className={"ml-8 mr-8 tablet:ml-16 tablet:mr-16 laptop:ml-32 laptop:mr-32"}>
            <SectionFeature />
            <SectionSocial />
        </div>
      <Spacer />
    </div>
  );
}
