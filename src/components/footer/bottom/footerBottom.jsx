import React from 'react';
import {FooterHeader} from "../header/footerHeader";

export function FooterBottom() {
    return(
        <div className="text-center text-light pb-4 bg-dark10 text-sm font-semibold">
            <FooterHeader/>
            <h4>
                © 2022 Copyright: Dockerize
                <span className={"text-accent font-bold"}>IT</span>
            </h4>
        </div>
    );
}