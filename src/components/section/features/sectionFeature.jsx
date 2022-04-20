import React from "react";
import {SectionFeatureItems} from "./items/sectionFeatureItems";

export function SectionFeature() {
  return (
    <>
      <div className={"flex flex-col gap-4 tablet:grid tablet:grid-rows-3 tablet:grid-flow-col tablet:gap-2 tablet:justify-center laptop:grid-rows-2 laptop:grid-flow-col laptop:gap-2 justify-center mt-6 tablet:mt-0 mb-6 tablet:-mb-12"}>
          <h1 className={"tablet:col-span-4 tablet:self-end text-4xl pb-4 phone:ml-8 tablet:ml-0"}>Features</h1>
          {SectionFeatureItems.map((item, index)=>{
              return(
                  <div key={index} className={"h-auto w-screen tablet:w-64 rounded-2xl bg-dark5 text-dark10 text-center place-items-center justify-center"}>
                      <h4 className={"font-bold text-2xl pt-4"}>{item.title}</h4>
                      <p className={"p-4"}>{item.description}</p>
                  </div>
              )
          })}
      </div>
    </>
  );
}
