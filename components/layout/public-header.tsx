"use client"

import ThemeToggle from "../theme/theme-toggle"
import Link from "next/link"
import { useEffect, useState } from "react"

const navLinks = [
    { id: "features", label: "Özellikler" },
    { id: "how-it-works", label: "Nasıl Çalışır?" },
    { id: "about", label: "Hakkımızda" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleSmoothScroll = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <header
            className={`sticky top-0 z-50 flex h-16 items-center justify-between px-4 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur border-b" : "bg-transparent"
                }`}
        >
            <Link href="/" className="text-lg font-semibold">
                Boykot Listem
            </Link>

            <nav className="hidden md:flex gap-6 text-sm">
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => handleSmoothScroll(link.id)}
                        className="hover:underline underline-offset-4 transition-colors"
                    >
                        {link.label}
                    </button>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link
                    href="/dashboard"
                    className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                >
                    Hemen Liste Oluştur
                </Link>
            </div>
        </header>
    )
}
