"use client"

import { Home, List, Search, Settings, Shield } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const navItems = [
    { name: "Ana Sayfa", href: "/dashboard", icon: Home },
    { name: "Listelerim", href: "/dashboard/lists", icon: List },
    { name: "Markalar", href: "/dashboard/brands", icon: Search },
    { name: "Ayarlar", href: "/dashboard/settings", icon: Settings },
    { name: "Yönetici", href: "/admin", icon: Shield },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 border-r bg-background p-4 hidden md:block">
            <div className="space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href)
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                                isActive
                                    ? "bg-muted text-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.name}
                        </Link>
                    )
                })}
            </div>
        </aside>
    )
}
