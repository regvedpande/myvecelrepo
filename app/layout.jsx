import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeRegistry } from "@/components/theme-registry"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Software Developer Portfolio",
  description: "A professional portfolio showcasing software development projects and skills",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeRegistry>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <Toaster />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  )
}



import './globals.css'