import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import ThemeToggle from "@/components/theme/theme-toggle"

export function SiteHeader() {
    return (
        <header className="flex h-12 items-center gap-2 border-b px-4 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mx-2" />
            <h1 className="text-base font-medium">Boykot Listem</h1>
            <div className="ml-auto flex items-center gap-4">
                <ThemeToggle />
            </div>
        </header>
    )
}
