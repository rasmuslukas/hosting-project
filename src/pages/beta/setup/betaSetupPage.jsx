import React from 'react';
import {Spacer} from "../../../components/spacer/spacer";

export function BetaSetupPage() {
    return(
        <div
            className={
                "pt-16 ml-16 mr-16 tablet:ml-32 tablet:mr-32 laptop:ml-64 laptop:mr-64 overflow-x-hidden"
            }
        >
            <h1 className={"text-6xl font-bold text-center p-8"}>Getting Started</h1>
            <h2 className={"text-4xl font-semibold text-center pb-8"}>
                Choose a Game
            </h2>
            <div className={"phone:ml-16 phone:mr-16 tablet:ml-32 tablet:mr-32 laptop:ml-64 laptop:mr-64 grid grid-flow-row gap-4"}>
                <div className={"capitalize rounded-2xl h-24 bg-dark8 text-light flex justify-center place-items-center phone:text-xl tablet:text-2xl"} >deploy minecraft servers (beta)</div>
            </div>
            <Spacer />
        </div>
    );
}