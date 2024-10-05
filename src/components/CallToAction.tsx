"use client"
import React, { useRef } from "react"
import helixImage from "../assets/images/helix2.png"
import emojiStar from "../assets/images/emojistar.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const translateZWheel = useTransform(scrollYProgress, [0, 1], [-80, 0])
  const translateZChart = useTransform(scrollYProgress, [0, 1], [40, -20])

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 overflow-x-clip"
      ref={containerRef}
    >
      <div className="container sm:max-w-xl relative">
        <motion.div
          style={{ translateZ: translateZWheel, transformPerspective: "300px" }}
        >
          <Image
            src={helixImage}
            alt=""
            className="absolute top left-[calc(100%+36px)] lg:top-[20px]"
          />
        </motion.div>
        <motion.div
          style={{
            translateZ: translateZChart,
            transformPerspective: "300px",
          }}
        >
          <Image
            src={emojiStar}
            alt=""
            className="absolute top right-[calc(100%+36px)] top-[-120px]"
          />
        </motion.div>
        <h2 className="text-5xl text-center sm:text-6xl font-bold tracking-tighter">
          Unlock access instantly
        </h2>
        <p className="mt-5 text-center text-xl text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form
          action=""
          className="pt-10 flex flex-col gap-2.5 sm:flex-row sm:max-w-sm mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-xl px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1 "
          />
          <button
            type="button"
            className="bg-white text-black rounded-lg h-12 font-medium text-base sm:px-5"
          >
            Get Access
          </button>
        </form>
      </div>
    </div>
  )
}
