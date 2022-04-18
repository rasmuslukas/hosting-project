import React from "react";
import heroHome from "../../assets/hero-home.png";
import { Link } from "react-router-dom";

export function HeroBanner() {
  return (
    <div
      className={
        "w-full h-96 flex justify-center align-middle bg-hero-home items-center"
      }
    >
      <div className={"phone:w-full tablet:w-3/5 text-center text-light absolute z-20 flex-row"}>
        <h1
          className={"font-bold font-sans text-3xl tablet:text-5xl uppercase"}
        >
          Decentralized Solution for Hosting GAME Servers
        </h1>
        <p className={"w-auto font-sans text-md tablet:text-lg p-4 ml-32 mr-32"}>
          DOCKERIZEIT is a third party web application based on Decentralization
          which allows you to host Minecraft servers with ease.
        </p>
        <Link to={"/setup"}>
          <button className={"py-2 px-4 text-accent rounded-full text-lg bg-light hover:border-2 hover:border-light hover:bg-transparent hover:text-light"}>
            Get Started >
          </button>
        </Link>

      </div>
      <div className={"w-full h-full bg-dark10 opacity-40 z-10"} />
    </div>
  );
}
