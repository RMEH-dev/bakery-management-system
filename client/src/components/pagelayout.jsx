
import { Children, PropsWithChildren } from "react";
import React from "react";
import { MegaMenuWithHover } from "./navbar";
import { FooterWithSocialLinks } from "./footer";


export default function PageLayout(props) {
    const children = props.children;
  return (
    <div className="PageLayout">
      <MegaMenuWithHover />
      {children}
      <FooterWithSocialLinks/>
    </div>
  );
}








