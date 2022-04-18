import React from "react";
import { SectionSocialItems } from "./items/sectionSocialItems";
import { FaArrowRight } from "react-icons/fa";

export function SectionSocial() {
  return (
    <>
      <div className={"grid grid-rows-3 grid-flow-col gap-2 justify-center"}>
        <h1 className={"text-4xl col-span-2 self-end pb-4"}>Join our community</h1>
        {SectionSocialItems.map((item, index) => {
          return (
            <div className={"h-32 w-auto bg-dark5 rounded-xl flex justify-center items-center"} key={index}>
              <img src={item.icon} className={"w-auto h-12 pr-8"} />
              <div className={"w-1/2"}>
                <h2 className={"font-semibold"}>{item.title}</h2>
                <p className={"text-sm"}>{item.description}</p>
              </div>
              <div
                className={
                  "rounded-full bg-dark6 w-16 h-16 flex justify-center items-center ml-2"
                }
                onClick={()=>{window.open(item.url)}}
              >
                <FaArrowRight className={"w-auto h-6 cursor-pointer"} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
