import React from "react";
import { images } from "../public/Items";
import Image from "next/image";
import left from "../public/left.svg"
import right from "../public/right.svg"
import { motion } from "framer-motion";

const Description = (props) => {
  console.log(props.activeImage)
    return (
      <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-3xl">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === props.activeImage
                ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
                : "hidden"
            }`}
          >
              <motion.div
              initial={{
                opacity: idx === props.activeImage ? 0 : 0.5,
                scale: idx === props.activeImage ? 0.5 : 0.3,
              }}
              animate={{
                opacity: idx === props.activeImage ? 1 : 0.5,
                scale: idx === props.activeImage ? 1 : 0.3,
              }}
              transition={{
                ease: "linear",
                duration: 1,
                x: { duration: 1 },
              }}
              className="w-full"
              >
                <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
                <div className={`${
                  idx === 2
                    ? "whitespace-pre-line leading-relaxed font-medium text-2xl tracking-wide h-60 md:h-40 text-gray-600"
                    : "whitespace-pre-line leading-relaxed font-medium text-lg tracking-wide h-60 md:h-40 italic text-gray-600"
                }`}>
                  {" "}
                  {elem.desc}
                </div>
              </motion.div>
            <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
              <div
                className="absolute bottom-2 right-10 cursor-pointer"
                onClick={props.clickPrev}
              >
                <Image src={left} alt="" />
              </div>
  
              <div
                className="absolute bottom-2 right-2 cursor-pointer"
                onClick={props.clickNext}
              >
                <Image src={right} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Description