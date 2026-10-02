"use client"
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden shadow-lg shadow-black/5"
    >
      {/* Live Background Animation (Glowing Blobs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-orange-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[65%] bg-blue-400/30 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="z-10"
      >
        <Image
          className="max-w-56 drop-shadow-2xl"
          src={assets.jbl_soundbox_image}
          alt="jbl_soundbox_image"
        />
      </motion.div>

      <div className="flex flex-col items-center justify-center text-center space-y-3 px-4 md:px-0 z-10">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px] text-gray-900 drop-shadow-sm">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/80 drop-shadow-sm">
          From immersive sound to precise controls—everything you need to win
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 hover:bg-orange-500 transition-colors rounded text-white shadow-lg shadow-orange-600/30 mt-2">
          Buy now
          <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </button>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="z-10 hidden md:block"
      >
        <Image
          className="max-w-80 drop-shadow-2xl"
          src={assets.md_controller_image}
          alt="md_controller_image"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="z-10 md:hidden"
      >
        <Image
          className="drop-shadow-2xl"
          src={assets.sm_controller_image}
          alt="sm_controller_image"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;