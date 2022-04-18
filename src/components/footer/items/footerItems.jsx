import React from 'react';

export function FooterItems() {
    return(
        <div className=" p-6">
            <div className="grid laptop:grid-cols-3 grid-cols-2 place-items-center">
                <div className="mb-6">
                    <h5 className="uppercase font-bold mb-2.5 text-light">About us</h5>

                    <ul className="list-none mb-0 ">
                        <li>
                            <a className="text-light">Docs</a>
                        </li>
                        <li>
                            <a className="text-light">Download</a>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h5 className="uppercase font-bold mb-2.5 text-light">
                        Keep in touch
                    </h5>

                    <ul className="list-none mb-0">
                        <li>
                            <a className="text-light">Discord</a>
                        </li>
                        <li>
                            <a className="text-light">Donate</a>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h5 className="uppercase font-bold mb-2.5 text-light">
                        Wallet providers
                    </h5>

                    <ul className="list-none mb-0">
                        <li>
                            <a className="text-light">API</a>
                        </li>
                        <li>
                            <a className="text-light">Documentation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}