import React from "react";
import { SetupGames } from "./games/setupGames";
import { Link } from "react-router-dom";
import { Spacer } from "../../components/spacer/spacer";

export function Setup() {
  return (
    <div
      className={
        "pt-16 ml-16 mr-16 tablet:ml-32 tablet:mr-32 laptop:ml-64 laptop:mr-64"
      }
    >
      <h1 className={"text-6xl font-bold text-center p-8"}>Getting Started</h1>
      <h2 className={"text-4xl font-semibold text-center pb-8"}>
        Choose a Game
      </h2>
      <div className={"mr-32 ml-32 grid grid-flow-row gap-4"}>
        {SetupGames.map((item, index) => {
          return (
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`${item.id}`}
            >
              <div className={"rounded-2xl h-24 flex flex-row justify-between items-center " + item.className} key={index}>
                <h2 className={"text-2xl font-semibold ml-8"}>{item.title}</h2>
                <img src={item.imageUrl} className={"w-auto h-24"} />
              </div>
            </Link>
          );
        })}
      </div>
      <Spacer />
    </div>
  );
}
