import React from "react";
import { MenuDefault } from "../menu/default/menuDefault";
import { Footer } from "../footer/footer";

export function Layout(props) {
  return (
    <React.Fragment>
      <MenuDefault />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
