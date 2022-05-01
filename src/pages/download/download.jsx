import React from "react";
import { DownloadItems } from "./items/downloadItems";
import { Spacer } from "../../components/spacer/spacer";
import { MdOutlineFileDownload } from "react-icons/md";

export function Download() {
  return (
    <>
      <div
        className={
          "pt-16 flex flex-col gap-4 tablet:grid tablet:grid-rows-3 tablet:grid-flow-col tablet:gap-2 tablet:justify-center laptop:grid-rows-2 laptop:grid-flow-col laptop:gap-2 justify-center mb-6"
        }
      >
        <h1 className={"pt-14 tablet:col-span-4 tablet:self-start font-semibold text-6xl pb-4 phone:ml-8 tablet:ml-0"}>
          Download version 0.1
        </h1>
        {DownloadItems.map((item, index) => {
          return (
            <div
              className={
                "cursor-pointer h-32 tablet:h-auto w-screen tablet:w-64 rounded-2xl rounded-2xl bg-dark5 text-dark10 text-center place-items-center justify-center flex"
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
