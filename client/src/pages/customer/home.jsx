import { CarouselCustomNavigation } from "../../components/carousel1";
import { MegaMenuWithHover } from "../../components/navbar";
import "../../index.css";
import React from "react";
export default function Home() {
  return (
    <div>
      <MegaMenuWithHover className="fixed top-0 left-0 z-2"/> {/* Set z-index to 2 */}
      <CarouselCustomNavigation /> {/* Implicit z-index of 0 or default */}
    </div>
  );
}
