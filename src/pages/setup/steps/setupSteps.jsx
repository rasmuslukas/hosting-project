import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SetupGames } from "../games/setupGames";
import { SetupQuestions } from "../questions/setupQuestions";
import {Spacer} from "../../../components/spacer/spacer";

export function SetupSteps() {
  const [selected, setSelected] = useState(0);

  const handleQuestionOnClick = () => {
    setSelected((prev) => {
      if (prev === SetupQuestions.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  // get id from page id
  const { gameId } = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    setGame(SetupGames.find((item) => item.id === parseInt(gameId)));
  }, [gameId]);

  if (!game) {
    return null;
  }

  return (
    <div
      className={
        "pt-16 ml-16 mr-16 tablet:ml-32 tablet:mr-32 laptop:ml-64 laptop:mr-64 overflow-x-hidden"
      }
    >
      <div
        className={
          "m-8 h-36 rounded-xl flex justify-center items-center " +
          game.className
        }
      >
        <h1 className={"text-center text-4xl font-semibold text-light z-20"}>
          Setting up
        </h1>
        <img src={game.imageUrl} className={"h-36 absolute z-10"} />
      </div>
      <div
        className={
          "h-24 bg-dark6 rounded-xl m-8 flex justify-center items-center"
        }
      >
        <h1 className={"text-center text-2xl text-dark10 z-20"}>
          Progress Bar
        </h1>
      </div>
      <div className={"m-8"}>
        <h2 className={"text-xl"}>{SetupQuestions[selected]}</h2>
        <div
          className={"grid gap-4 grid-cols-2 tablet:w-1/2"}
          onClick={handleQuestionOnClick}
        >
          <div
            className={
              "mt-4 h-10 w-32 bg-dark6 rounded-2xl cursor-pointer hover:bg-dark8 hover:text-light flex justify-center items-center"
            }
          >
            Yes
          </div>
          <div
            className={
              "mt-4 h-10 w-32 bg-dark5 rounded-2xl cursor-pointer hover:bg-dark8 hover:text-light flex justify-center items-center"
            }
          >
            No
          </div>
        </div>
      </div>
      <Spacer/>
    </div>
  );
}
