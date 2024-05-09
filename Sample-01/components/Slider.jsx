"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "../public/Items"
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(0)
      : setActiveImage(activeImage - 1);
  };

  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  */

  return (
    <main className="grid place-items-center md:grid-cols-3 grid-cols-1 w-full rounded-2xl">
      <div
        className={`col-span-2 w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[80vh] object-scale-down transition-all duration-500 ease-in-out"
                : "hidden"
            }`
          }
          >
            <Image
              src={elem.src}
              alt=""
              width={1280}
              height={720}
              priority={true}
              className="w-full h-full object-scale-down md:rounded-tl-3xl md:rounded-bl-3xl pr-4"
            />
          </div>
        ))}
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;