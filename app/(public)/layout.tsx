import { Footer } from "@/components/layout/public-footer"
import { Header } from "@/components/layout/public-header"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    )
}