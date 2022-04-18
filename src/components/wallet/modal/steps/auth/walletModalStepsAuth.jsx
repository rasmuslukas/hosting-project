import React from 'react';
import {IoArrowBackOutline, IoClose} from "react-icons/io5";
import {CgSpinner} from "react-icons/cg";

export function WalletModalStepsAuth({closeModal}) {
    return(
        <div className={"w-screen h-screen absolute flex justify-center items-center"}>
            <div
                className={
                    "w-4/5 tablet:w-3/4 laptop:w-1/3 h-96 bg-dark10 text-light text-2xl rounded-2xl fixed"
                }
                style={{
                    zIndex: "100"
                }}
            >

                <div>
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
                    <div className={"rounded-lg h-24 bg-dark9 ml-4 mr-4 mt-12 mb-2 flex justify-center items-center"}>
                        <h4 className={"text-light text-center text-sm p-12"}>By connecting a wallet, you agree to DockerizeIT’s {' '}
                            <span className={"text-accent underline"}>Terms of Service.</span></h4>
                    </div>
                    <div className={"rounded-lg h-16 bg-dark7 ml-4 mr-4 mt-2 mb-2 flex justify-start items-center"}>
                        <CgSpinner className={"animate-spin h-8 w-8 ml-4 mr-2"}/>
                        <h2 className={"text-light font-semibold text-lg"}>Initializing ...</h2>
                        {/* animate-spin h-5 w-5 */}
                    </div>
                    <div className={"rounded-lg h-32 bg-dark9 ml-4 mr-4 mt-2 mb-2 flex justify-start items-center"}>
                        <p className={"font-semibold text-2xl ml-8"}>MetaMask</p>
                        <p className={"font-normal text-lg ml-8"}>Easy-to-use browser extension.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}