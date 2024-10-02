import Logo from "../assets/images/logosaas.png"
import MenuIcon from "../assets/icons/menu.svg"
import Image from "next/image"
import Link from "next/link"

const navData = [
  {
    id: 1,
    name: "About",
    link: "#",
  },
  {
    id: 2,
    name: "Features",
    link: "#",
  },
  {
    id: 3,
    name: "Updates",
    link: "#",
  },
  {
    id: 4,
    name: "Help",
    link: "#",
  },
  {
    id: 5,
    name: "Customers",
    link: "#",
  },
]

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="flex items-center justify-between py-4">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image src={Logo} alt="Logo" className="h-12 w-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden text-white sm:flex gap-6 items-center">
            {navData.map((data) => (
              <Link
                key={data.id}
                href={data.link}
                className="text-center opacity-60 hover:opacity-100 transition"
              >
                {data.name}
              </Link>
            ))}
            <Link
              href={"#"}
              className="bg-white text-black px-4  py-2 text-center rounded-lg"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
