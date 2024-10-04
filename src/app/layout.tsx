import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import clsx from "clsx"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Task Ease",
  description:
    "Effortlessly track progress, manage tasks, and collaborate with customizable lists, smart tracking, and seamless teamwork tools, all in one intuitive platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  )
}
