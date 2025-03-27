// components/layout/landing/features-section.tsx

import { CheckCircle, List, Share2 } from "lucide-react"

const features = [
    {
        title: "Kişiselleştirilmiş Listeler",
        description: "Kendi boykot listelerini oluştur, düzenle ve istediğin gibi özelleştir. Hepsi senin kontrolünde.",
        icon: List,
    },
    {
        title: "Net Boykot Nedenleri",
        description: "İfade özgürlüğüne uygun biçimde; etik, çevresel veya sosyal sebeplerle mesafe koyduğun markaları kolayca kategorize et.",
        icon: CheckCircle,
    },
    {
        title: "Kolay Paylaşım",
        description: "Listeni sosyal medyada paylaşarak daha fazla insana ulaş. Farkındalığı artır, toplumsal etkiyi büyüt.",
        icon: Share2,
    },
]

export function FeaturesSection() {
    return (
        <section id="features" className="min-h-screen bg-background text-foreground px-6 py-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Öne Çıkan Özellikler</h2>
                <p className="text-muted-foreground text-lg mb-12">
                    Bilinçli tüketiciler için tasarlandı. Gücünü organize bir şekilde göster.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-4">
                            <feature.icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
