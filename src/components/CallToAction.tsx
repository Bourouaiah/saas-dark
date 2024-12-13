"use client"

import helixImage from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import Image from "next/image";

import { motion } from "framer-motion";

function CallToAction() {
  return (
    <div className="bg-black text-white text-center py-[72px] sm:py-24">
      <div className="container max-w-xl relative">
        <motion.div
          className="absolute hidden lg:inline top-6 left-[calc(100%+36px)]"
          drag
          dragSnapToOrigin
        >
          <Image
            src={helixImage}
            alt="helix"
            className="max-w-none"
            draggable="false"
          />
        </motion.div>
        <motion.div
          className="absolute hidden lg:inline -top[120px] right-[calc(100%+24px)]"
          drag
          dragSnapToOrigin
        >
          <Image
            src={emojiStar}
            alt="emoji"
            className="max-w-none"
            draggable="false"
          />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant page
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form
          action=""
          className="flex flex-col sm:flex-row gap-5 mt-10 justify-center"
        >
          <input
            type="text"
            placeholder="youremail@gmail.com"
            className="bg-white/20 rounded-lg px-5 py-2 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black rounded-lg px-5 py-2">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
}

export default CallToAction;
