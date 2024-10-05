"use client"
import Image from "next/image"
import appScreen from "../assets/images/app-screen.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  })

  const rotateZ = useTransform(scrollYProgress, [0, 1], [30, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1])

  return (
    <div className="bg-black text-white py-[4.5rem] bg-gradient-to-b from-black to-[#5D2CA8] sm:py-24 overflow-x-clip">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Seamless interaction
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-white/70 text-xl mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div style={{ opacity, rotateZ, transformPerspective: "800px" }}>
          <Image
            draggable={false}
            src={appScreen}
            alt="Prodect Image"
            className="mt-14 mx-auto"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  )
}
