import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { WalletProviders } from "../providers/walletProviders";
import { WalletModalStepsAuth } from "./steps/auth/walletModalStepsAuth";

export function WalletModal({ closeModal }) {
  const [openModalStepsAuth, setOpenModalStepsAuth] = useState(false);

  return (
    <div
      className={"w-screen h-screen absolute flex justify-center items-center"}
    >
      <div
        className={
          "w-4/5 tablet:w-3/4 laptop:w-1/3 h-auto bg-dark10 z-50 text-light text-2xl rounded-2xl fixed"
        }
      >
        <div>
          <IoClose
            className={"absolute right-2.5 top-2.5 cursor-pointer"}
            onClick={() => {
              closeModal(false);
            }}
          />
          <h1 className={"font-sans text-4xl left-6 top-2.5 absolute"}>
            Select a wallet
          </h1>
        </div>
        <div
          className={
            "grid grid-rows-5 grid-flow-col gap-0.5 justify-center mt-16 mb-8"
          }
        >
          {WalletProviders.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setOpenModalStepsAuth(true);
                }}
                className={
                  "rounded-2xl bg-dark8 text-light h-12 px-6 m-1 text-md items-center"
                }
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      <div
        className={"bg-dark10 opacity-20 z-40 fixed w-screen h-screen"}
        onClick={() => {
          closeModal(false);
        }}
      />
      {openModalStepsAuth && <WalletModalStepsAuth closeModal={setOpenModalStepsAuth} />}
    </div>
  );
}
