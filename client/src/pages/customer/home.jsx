import { CarouselCustomNavigation } from "../../components/carousel1";
import { MegaMenuWithHover } from "../../components/navbar";
import "../../index.css";
import React from "react";
export default function Home() {
  return (
    <div>
      <MegaMenuWithHover style={{ zIndex: 2, position:"fixed" }} /> {/* Set z-index to 2 */}
      <CarouselCustomNavigation /> {/* Implicit z-index of 0 or default */}
    </div>
  );
}
