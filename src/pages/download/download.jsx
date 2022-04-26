import React from "react";
import { DownloadItems } from "./items/downloadItems";
import { Spacer } from "../../components/spacer/spacer";
import { MdOutlineFileDownload } from "react-icons/md";

export function Download() {
  return (
    <>
      <div
        className={
          "pt-16 ml-16 mr-16 tablet:ml-32 tablet:mr-32 laptop:ml-64 laptop:mr-64 grid grid-rows-3 grid-flow-col gap-1 tablet:gap-2 justify-center laptop:grid-rows-2 laptop:grid-flow-col laptop:gap-2 justify-center"
        }
      >
        <h1 className={"font-bold text-6xl ml-4 tablet:ml-0 pt-8 col-span-4 mb-4"}>
          Download version 0.1
        </h1>
        {DownloadItems.map((item, index) => {
          return (
            <div
              className={
                "cursor-pointer h-auto w-64 rounded-2xl bg-dark5 text-dark10 text-center place-items-center justify-center flex"
              }
            >
              {item.title}{" "}
              <MdOutlineFileDownload className={"h-8 w-8"}
              />
            </div>
          );
        })}
      </div>
      <div className={"ml-16 mr-16 tablet:ml-24 tablet:mr-24g laptop:ml-48 laptop:mr-48"}>
        <h2 className={"text-4xl font-semibold pt-8 pb-8"}>Update Notes:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet, sem
          tincidunt placerat et. Porta dui magna dolor nunc dolor faucibus
          elementum auctor nunc. Aliquet augue neque faucibus nullam ac urna
          cursus vel. Sed risus id sed sed bibendum in mollis.
        </p>
        <ul className={"list-disc p-4"}>
          <li> Sed risus id sed sed bibendum in mollis.</li>
          <li> Sed risus id sed sed bibendum in mollis.</li>
          <li> Sed risus id sed sed bibendum in mollis.</li>
          <li> Sed risus id sed sed bibendum in mollis.</li>
          <li> Sed risus id sed sed bibendum in mollis.</li>
        </ul>
        <h2 className={"text-4xl font-semibold pt-8 pb-8"}>Update Notes:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet, sem
          tincidunt placerat et. Porta dui magna dolor nunc dolor faucibus
          elementum auctor nunc. Aliquet augue neque faucibus nullam ac urna
          cursus vel. Sed risus id sed sed bibendum in mollis.
        </p>
        <ul className={"list-disc p-4"}>
          <li> Sed risus id sed sed bibendum in mollis.</li>
          <li> Sed risus id sed sed bibendum in mollis.</li>
          <li> Sed risus id sed sed bibendum in mollis.</li>
          <li> Sed risus id sed sed bibendum in mollis.</li>
          <li> Sed risus id sed sed bibendum in mollis.</li>
        </ul>
      </div>
      <Spacer />
    </>
  );
}
