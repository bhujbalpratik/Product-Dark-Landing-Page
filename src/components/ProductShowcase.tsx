import Image from "next/image"
import appScreen from "../assets/images/app-screen.png"

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white py-[4.5rem] bg-gradient-to-b from-black to-[#5D2CA8] sm:py-24">
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
        <Image src={appScreen} alt="Prodect Image" className="mt-14 mx-auto" />
      </div>
    </div>
  )
}
