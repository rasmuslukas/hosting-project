import React, { useState } from "react";
import { menuDefaultItems } from "./items/menuDefaultItems";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import {WalletModal} from "../../wallet/modal/walletModal";

export function MenuDefault() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav
        className={
          "bg-dark10 fixed w-screen flex justify-between items-center h-16 z-30"
        }
      >
        <Link to={"/"} className={"text-xl text-light font-semibold ml-8"}>
          Dockerize<span className={"text-accent"}>IT</span>
        </Link>
        <div className={"flex items-center justify-end"}>
          <ul className={"hidden tablet:flex gap-6 font-semibold items-center"}>
            {menuDefaultItems.map((item, index) => {
              return (
                <li key={index} className={"text-light font-sans px-2 py-2 rounded-lg hover:bg-dark8 transition ease-in-out delay-50"}>
                  <Link to={item.url} className={item.className}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <button
              className={
                "rounded-xl border-2 text-light h-10 px-6 mr-8 font-semibold bg-gradient-to-r from-red-500 via-pink-500 to-indigo-600 text-white "
              }
              onClick={()=>{
                  setOpenModal(true)
              }}
            >
              Connect Wallet
            </button>
          </ul>
        </div>
        <div className={"text-light text-3xl mr-8 tablet:hidden"}>
          <HiOutlineMenu onClick={showMenu} />
        </div>
      </nav>
        {openModal && (<WalletModal closeModal={setOpenModal} />)}
    </>
  );
}
