import Link from "next/link"
import ArrowIcon from "../assets/icons/arrow-w.svg"
import cursorImage from "../assets/images/cursor.png"
import messageImage from "../assets/images/message.png"
import Image from "next/image"
export const Hero = () => {
  return (
    <div className="bg-black text-white py-[4.5rem] sm:py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1538px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px]  left-1/2 -translate-x-1/2 top-[calc(100%-96px)] sm:top-[calc(100%-110px)] bg-black rounded-[100%] border border-[#B48CDE] bg-[radial-gradient(closest-side,#000000_82%,#9560EB_100%)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
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
            <Image
              src={cursorImage}
              height={200}
              width={200}
              alt="Cursor Image"
              className="absolute right-[476px] top-[108px] hidden sm:inline"
            />
            <Image
              src={messageImage}
              height={200}
              width={200}
              alt="Message Image"
              className="absolute left-[498px] top-[56px] hidden sm:inline"
            />
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
