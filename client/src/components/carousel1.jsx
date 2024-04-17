import { Carousel } from "@material-tailwind/react";
import React from "react";
import "../index.css";
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl pt-[100px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="./src/assets/images/i1.jpg"
        alt="image 1"
        className="h-full w-screen object-image"
      />
      <img
        src="./src/assets/images/i2.jpg"
        alt="image 2"
        className="h-full w-screen object-image"
      />
      <img
        src="./src/assets/images/i3.jpg"
        alt="image 3"
        className="h-500px w-screen object-image"
      />
    </Carousel>
  );
}