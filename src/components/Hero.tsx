"use client"
import Link from "next/link"
import ArrowIcon from "../assets/icons/arrow-w.svg"
import cursorImage from "../assets/images/cursor.png"
import messageImage from "../assets/images/message.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [270, -270])

  return (
    <div
      ref={heroRef}
      className="bg-black text-white py-[4.5rem] sm:py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip"
    >
      <div className="absolute h-[375px] w-[750px] sm:w-[1538px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px]  left-1/2 -translate-x-1/2 top-[calc(100%-96px)] sm:top-[calc(100%-110px)] bg-black rounded-[100%] border border-[#B48CDE] bg-[radial-gradient(closest-side,#000000_82%,#9560EB_100%)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <motion.span
              animate={{ backgroundPositionX: "-100%" }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent [background-size:200%] bg-clip-text [-webkit-background-clip:text] font-medium"
            >
              Version 2.0 is here
            </motion.span>
            <div className="inline-flex items-center justify-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex relative mt-8">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center">
              One Task <br />
              at a time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
              style={{ translateY: translateY }}
            >
              <Image
                src={cursorImage}
                height={200}
                width={200}
                alt="Cursor Image"
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
              style={{ translateY: translateY }}
            >
              <Image
                src={messageImage}
                height={200}
                width={200}
                alt="Message Image"
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Embrace the satisfaction of achievement with an app built to track
            your progress, inspire your efforts, and celebrate every milestone
            along the way.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="bg-white text-black py-3 px-5 rounded-lg font-medium"
          >
            Get for free
          </button>
        </div>
      </div>
    </div>
  )
}
