// components/layout/landing/how-it-works-section.tsx

"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const steps = [
    {
        title: "1. Boykot Nedeni Seç",
        description:
            "Etik, çevresel ya da insan hakları temelli bir neden seç. Bu ilk adım gücünü odakladığın yer.",
        image: "/window.svg", // Gerçek proje içinde `public/` altında olmalı
    },
    {
        title: "2. Marka Ekle",
        description:
            "Boykot etmek istediğin markayı kolayca arayarak ekle. Dilersen açıklama da ekleyebilirsin.",
        image: "/globe.svg",
    },
    {
        title: "3. Listen Hazır",
        description:
            "Listeni paylaş, bilinçli tüketicilerle dayanışma kur. Dilersen gizli de tutabilirsin.",
        image: "/file.svg",
    },
]

export function HowToWork() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section
            id="how-it-works"
            className="min-h-screen bg-muted text-foreground px-6 py-24"
        >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
                    Nasıl Çalışır?
                </h2>
                <p className="text-muted-foreground text-lg mb-12 animate-fade-in-up delay-100">
                    3 adımda fark yarat. Kendi tüketim alışkanlıklarını dönüştür, başkalarına ilham ol.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-background rounded-xl p-6 shadow-lg border animate-fade-in-up"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-40 w-full mb-6">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
