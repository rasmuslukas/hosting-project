import React from "react";
import {SectionFeatureItems} from "./items/sectionFeatureItems";

export function SectionFeature() {
  return (
    <>
      <div className={"grid grid-rows-3 grid-flow-col gap-2 justify-center laptop:grid-rows-2 laptop:grid-flow-col laptop:gap-2 justify-center -mb-12"}>
          <h1 className={"col-span-4 self-end text-4xl pb-4 ml-6 tablet:ml-0"}>Features</h1>
          {SectionFeatureItems.map((item, index)=>{
              return(
                  <div className={"h-auto w-64 rounded-2xl bg-dark5 text-dark10 text-center place-items-center justify-center"}>
                      <h4 className={"font-bold text-2xl pt-4"}>{item.title}</h4>
                      <p className={"p-4"}>{item.description}</p>
                  </div>
              )
          })}
      </div>
    </>
  );
}
