import React from 'react';
import {Link} from "react-router-dom";

export function ErrorPage() {
    return(
        <div className={"h-screen pt-96"}>
            <h1 className={"font-bold text-dark10 text-4xl phone:text-6xl tablet:text-8xl pl-8"} style={{ lineHeight : "0.95"}}>This Page is in <br/> Development :(</h1>
            <h4 className={"p-8 tablet:text-xl"}>(In the Meantime, You Can Go Back to the <Link to={'/'} >Homepage</Link>)</h4>
        </div>
    );
}