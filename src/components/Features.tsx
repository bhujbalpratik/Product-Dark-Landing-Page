"use client"
import { useEffect, useRef } from "react"
import EcoSystemIcon from "../assets/icons/ecosystem.svg"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
]

const Feature = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const border = useRef<HTMLDivElement>(null)
  const offsetX = useMotionValue(-100)
  const offsetY = useMotionValue(-100)
  let maskImageB = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return
      const borderRect = border.current.getBoundingClientRect()
      offsetX.set(e.x - borderRect.x)
      offsetY.set(e.y - borderRect.y)
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [offsetX, offsetY])
  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
      <motion.div
        className="absolute border-2 border-purple-500 inset-0 rounded-xl"
        ref={border}
        style={{
          WebkitMaskImage: maskImageB,
          maskImage: maskImageB,
        }}
      ></motion.div>
      <div className="inline-flex bg-white text-black h-14 w-14 justify-center items-center rounded-lg">
        <EcoSystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  )
}

export const Features = () => {
  return (
    <div className="bg-black text-white py-[4.5rem] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Your all-in-one solution
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl mt-5 text-white/70">
            Experience customizable lists, collaborative tools, and intelligent
            tracking all in one place. Assign tasks, receive reminders, and
            effortlessly monitor your progress with ease and speed.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }, i) => (
            <Feature title={title} description={description} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
