import React, {useState} from "react";
import { menuDefaultItems } from "../items/menuDefaultItems";
import { Link } from "react-router-dom";
import { WalletModal } from "../../../wallet/modal/walletModal";

export function MenuDefaultMobile({isOpen, toggle}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={isOpen ? "w-screen h-screen fixed z-30" : "hidden"}>
      <div className={"grid grid-rows-6 text-center items-center bg-dark9 pt-20 "}>
        <ul>
          {menuDefaultItems.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  "text-light text-2xl font-sans px-2 py-2 rounded-lg hover:bg-dark8 transition ease-in-out delay-50"
                }
              >
                <Link to={item.url} className={item.className}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button
            className={
              "mt-4 rounded-xl border-2 text-light h-12 px-8 font-semibold bg-gradient-to-r from-red-500 via-pink-500 to-indigo-600 text-2xl "
            }
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Connect Wallet
          </button>
        </ul>
      </div>
      {openModal && <WalletModal closeModal={setOpenModal} />}
    </div>
  );
}
