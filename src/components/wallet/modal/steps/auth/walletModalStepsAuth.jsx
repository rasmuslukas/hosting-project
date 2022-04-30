import React, { useEffect, useState } from "react";
import { IoArrowBackOutline, IoClose } from "react-icons/io5";
import { CgSpinner } from "react-icons/cg";
import { WalletModalStepsLogin } from "../login/walletModalStepsLogin";

export function WalletModalStepsAuth({ closeModal }) {
  const [openModalStepsLogin, setOpenModalStepsLogin] = useState(false);

  return (
    <div
      className={"w-screen h-screen absolute flex justify-center items-center"}
    >
      <div
        className={
          "w-4/5 tablet:w-3/4 laptop:w-1/3 h-36 bg-dark10 text-light text-2xl rounded-2xl fixed"
        }
        style={{
          zIndex: "100",
        }}
      >
        <div
          onClick={() => {
            setOpenModalStepsLogin(true);
          }}
        >
          <IoClose
            className={"absolute right-2.5 top-2.5 cursor-pointer"}
            onClick={() => {
              closeModal(false);
            }}
          />
          <IoArrowBackOutline
            className={"absolute left-2.5 top-2.5 cursor-pointer"}
            onClick={() => {
              closeModal(false);
            }}
          />
          <div
            className={
              "rounded-lg h-16 bg-dark7 ml-4 mr-4 mt-12 flex justify-start items-center"
            }
          >
            <CgSpinner className={"animate-spin h-8 w-8 ml-4 mr-2"} />
            <h2 className={"text-light font-semibold text-lg"}>
              Initializing ...
            </h2>
          </div>
        </div>
      </div>
      {openModalStepsLogin && (
        <WalletModalStepsLogin closeModal={setOpenModalStepsLogin} />
      )}
    </div>
  );
}
