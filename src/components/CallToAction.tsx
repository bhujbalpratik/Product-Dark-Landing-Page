import helixImage from "../assets/images/helix2.png"
import emojiStar from "../assets/images/emojistar.png"
import Image from "next/image"

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[4.5rem] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image
          src={helixImage}
          alt="HelixImage"
          className="absolute top-6 left-[calc(100%+36px)] lg:top-[20px]"
        />
        <Image
          src={emojiStar}
          alt="EmojiStar"
          className="absolute right-[calc(100%+24px)] -top-[120px]"
        />
        <h2 className="text-5xl tracking-tighter font-bold text-center sm:text-6xl">
          Unlock access instantly
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate your achievements with an app built to track your progress
          and inspire your journey forward.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:max-w-sm mx-auto">
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1 "
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
