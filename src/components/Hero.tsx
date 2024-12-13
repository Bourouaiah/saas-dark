"use client";

import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursoImg from "../assets/images/cursor.png";
import messageImg from "../assets/images/message.png";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-black text-white hero-gradient py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[300px] w-[750px] sm:w-[1536px] sm:h-[500px] lg:w-[2400px] lg:h-[600px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] hero-radial top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-text-hero text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One task <br /> at a time
            </h1>
            <motion.div
              drag
              dragSnapToOrigin
              className="absolute right-[476px] top-[108px] hidden sm:inline"
            >
              <Image
                src={cursoImg}
                height="200"
                width="200"
                alt="cursor"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              drag
              dragSnapToOrigin
              className="absolute left-[498px] top-[56px] hidden sm:inline"
            >
              <Image
                src={messageImg}
                height="200"
                width="200"
                alt="message"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white/90 hover:bg-white active:scale-95 transition text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
