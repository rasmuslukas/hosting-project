import React, { useEffect, useState } from "react";
import { MenuDefault } from "../menu/default/menuDefault";
import { Footer } from "../footer/footer";
import { MenuDefaultMobile } from "../menu/default/mobile/menuDefaultMobile";

export function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <MenuDefault isOpen={isOpen} toggle={toggle} />
      <MenuDefaultMobile isOpen={isOpen} />
      <div className={"bg-light min-h-screen"}>{props.children}</div>
      <Footer />
    </React.Fragment>
  );
}
