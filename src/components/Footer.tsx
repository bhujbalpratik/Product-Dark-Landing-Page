import React from "react"
import XSocial from "../assets/icons/x-social.svg"
import LinkedIn from "../assets/icons/linkedin.svg"
import Instagram from "../assets/icons/insta.svg"
import Youtube from "../assets/icons/youtube.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-t-gray-500">
      <div className="container sm:flex justify-between items-center sm:max-w-[1024px]">
        <h5 className="text-base text-center">
          © 2024 Taskease.com, Inc. All rights reserved
        </h5>
        <ul className="pt-4 flex justify-center gap-x-3.5">
          <li>
            <XSocial />
          </li>
          <li>
            <LinkedIn />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Youtube />
          </li>
        </ul>
      </div>
    </footer>
  )
}
