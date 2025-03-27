// app/(public)/landing/page.tsx
'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowToWork } from "@/components/landing/how-to-work"

export default function LandingPage() {
    return (
        <>
            <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-12 text-center bg-background text-foreground">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Listeni oluştur, düşünceni paylaş, farkındalık yarat.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                        Hangi markalara neden mesafe koyduğunu takip etmek artık çok kolay. Takip et, düzenle, paylaş. Bilinçli tüketimin gücü senin elinde.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/auth">
                            <Button size="lg">Kendi Listeni Oluştur</Button>
                        </Link>
                        <Link href="#neden">
                            <Button variant="outline" size="lg">
                                Daha Fazlasını Keşfet
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="space-y-24">
                <FeaturesSection />
                <section id="how-it-works" className="min-h-screen flex items-center justify-center bg-muted">
                    <HowToWork></HowToWork>
                </section>
                <section id="about" className="min-h-screen flex items-center justify-center">
                    <h2 className="text-3xl font-bold">Hakkımızda</h2>
                </section>
            </div>
        </>



    )
}
