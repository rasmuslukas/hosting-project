import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import {FiSettings} from "react-icons/fi";

export function WalletModalStepsLogin({ closeModal }) {

  return (
    <div
      className={"w-screen h-screen absolute flex justify-center items-center"}
    >
      <div
        className={
          "w-4/5 tablet:w-3/4 laptop:w-1/3 h-96 bg-dark10 text-light text-2xl rounded-2xl fixed"
        }
        style={{
          zIndex: "100",
        }}
      >
        <div>
          <IoClose
            className={"absolute right-2.5 top-2.5 cursor-pointer"}
            onClick={() => {
              closeModal(false);
            }}
          />
          <h1 className={"font-sans text-4xl left-6 top-2.5 absolute"}>
            Account
          </h1>
          <div className={"rounded-lg bg-dark8 h-32 ml-4 mr-4 mt-16"}>
            <h5 className={"text-sm pt-4 pl-4"}>Connected with MetaMask</h5>
            <h1
              className={"pl-4 pt-2 text-4xl font-semibold"}
            >
              0cFw2341...qW4
            </h1>
            <h5
              className={"pl-4 pt-2 text-sm cursor-pointer"}
            >
              Copy Address
            </h5>
            <div className={"flex flex-row gap-2 mt-8"}>
              <button className={"px-4 py-2 rounded-lg text-dark10 font-semibold bg-dark5 text-sm"}>Change Wallet</button>
              <button className={"px-2 py-2 rounded-lg font-semibold text-light bg-gradient-to-r from-red-500 via-pink-500 to-indigo-600 text-sm"}>Log Out</button>
              <button className={"bg-dark5 px-2 py-2 rounded-lg"}>
                <FiSettings className={"h-6 w-6 text-dark10"}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
