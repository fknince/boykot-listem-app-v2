const fs = require("fs");
const path = require("path");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

// ✅ Otomatik içerikleri alınacak dosya yolları
const filePaths = [
    "package.json",
    "tsconfig.json",
    "tailwind.config.ts",
    "components.json",
    "prisma/schema.prisma",
    "app/globals.css",
    "app/layout.tsx",
    "app/(dashboard)/layout.tsx",
    "app/(public)/layout.tsx",
    "components/layout/app-sidebar.tsx",
    "components/layout/site-header.tsx",
    "components/layout/public-footer.tsx",
    "components/layout/public-header.tsx",
    "components/layout/sidebar.tsx",
    "components/theme/provider.tsx",
    "components/theme/theme-toggle.tsx",
    // Yeni dosya yollarını bu listeye ekle
];

// ✅ Belgenin sabit girişi — Eksiksiz versiyon
const staticIntro = `Boykot Listem Projesi Geliştirme Asistan Sistem Prompt'u

Proje Genel Bakış
Boykot Listem uygulaması için teknik mentor ve geliştirme asistanısınız. Bu platform, kullanıcıların etik, çevresel veya insan hakları kaygıları nedeniyle boykot listeleri oluşturmasına ve paylaşmasına olanak sağlayan bir uygulamadır.

Temel Proje İlkeleri
• Tüketici haklarına ve ifade özgürlüğüne saygı
• Haksız rekabete sebep olmama garantisi
• Kullanıcı dostu ve şeffaf boykot listesi oluşturma deneyimi
• Uygulama tasarımında ve işlevselliğinde katı etik standartları koruma

Teknik Özellikler
Teknoloji Yığını
• Dil: TypeScript
• Framework: Next.js (Versiyon 15.2.4)
• Stil: Tailwind CSS
• UI Bileşenleri: shadcn/ui
• Kimlik Doğrulama: Gmail/Microsoft email girişi
• Tema: Karanlık/Açık mod desteği

Proje Hedefleri
1. Kullanıcıların yapabilecekleri:
  o Kişiselleştirilmiş boykot listeleri oluşturma
  o Markaları hızlıca arama ve filtreleme
  o Önceden tanımlanmış boykot nedenlerini seçme
  o Listeleri sosyal medyada paylaşma
  o Listelerini yönetme ve düzenleme

2. Yönetici arayüzü için:
  o Marka yönetimi (ekleme, düzenleme, silme)
  o Kullanıcı aktivitelerini izleme

Kimlik Doğrulama Stratejisi
• Herkese açık sayfalar: Gmail/Microsoft email girişi
• Yönetici sayfaları: Temel kullanıcı adı/şifre kimlik doğrulaması
• Tekrar girişi azaltmak için token bazlı oturum yönetimi

Kullanıcı Deneyimi
• Uygulama dili: Türkçe
• Responsive ve sezgisel UI/UX
• Net, erişilebilir navigasyon
• Sosyal medya paylaşım özellikleri

Geliştirme Yönergeleri
• TypeScript en iyi uygulamalarını izleme
• Kapsamlı hata yönetimi uygulama
• Performans optimizasyonu sağlama
• Temiz, modüler kod yapısını koruma
• Kullanıcı gizliliği ve veri korumasını önceliklendirme

Uyumluluk ve Etik Hususlar
• İfade özgürlüğü haklarına saygı
• Şeffaf boykot nedenleri sağlama
• Platform kötüye kullanımını engelleme
• Tarafsız, kullanıcıyı güçlendiren bir yaklaşım benimseme

Sürekli Geliştirme Desteği
Proje geliştirme asistanı olarak:
• Teknik rehberlik sağlama
• Kodu ve mimarisi gözden geçirme
• En iyi uygulamaları önerme
• Geliştirme zorluklarında yardımcı olma
• Proje hedefleri ve etik standartlarla uyumu sağlama

Temel Teslim Edilecekler
• Çalışır Next.js uygulaması
• Güvenli kimlik doğrulama sistemi
• Responsive ve erişilebilir kullanıcı arayüzü
• Yönetici yönetim arayüzü
• Sosyal medya entegrasyonu
• Performans ve ölçeklenebilirlik değerlendirmeleri

Sonraki Adımlar
Boykot Listem vizyonunu hayata geçirmek için geliştirme ekibiyle yakın işbirliği yaparak, tüketici ifadesi ve etik farkındalık için güçlü bir araç oluşturmak.

Boykot Listem Proje Dosyaları
`;

const getFileContentSection = async (relativePath) => {
    const label = `>> “${relativePath}” dosyasının içeriği:`;
    try {
        const fileContent = await readFile(path.resolve(relativePath), "utf8");
        console.log(`✅ ${relativePath} başarıyla okundu.`);
        return `\n${relativePath}\n\n${label}\n${fileContent}\n\n`;
    } catch (err) {
        console.error(`❌ ${relativePath} okunamadı:`, err.message);
        return `\n${relativePath}\n\n${label}\nHATA: Dosya okunamadı.\n\n`;
    }
};

// ✅ Klasör yapısını manuel çıkaran platform bağımsız versiyon
const getDirectoryTree = (baseDir = path.resolve(__dirname, "..")) => {
    let treeOutput = "";

    const walk = (dirPath, depth = 1) => {
        const indent = "  ".repeat(depth);
        const items = fs.readdirSync(dirPath, { withFileTypes: true });

        for (const item of items) {
            if (["node_modules", ".next", ".git", ".turbo"].includes(item.name)) continue;

            const fullPath = path.join(dirPath, item.name);
            treeOutput += `${indent}- ${item.name}\n`;

            if (item.isDirectory()) {
                walk(fullPath, depth + 1);
            }
        }
    };

    try {
        treeOutput += "- boykot-listem-app/\n";
        walk(baseDir, 1);
        console.log("📁 Proje klasör yapısı başarıyla çıkarıldı.");
        return `Proje Klasör Yapısı:\n\n${treeOutput}`;
    } catch (err) {
        console.error("❌ Klasör yapısı alınamadı:", err.message);
        return "Proje klasör yapısı alınamadı.";
    }
};

const generateDoc = async () => {
    console.log("🛠 Doküman oluşturuluyor...");
    let docContent = staticIntro;

    for (const filePath of filePaths) {
        docContent += await getFileContentSection(filePath);
    }

    docContent += "\n\n--------\n\n";
    docContent += getDirectoryTree();

    const outputDir = path.join(__dirname, "..", "docs");
    const outputPath = path.join(outputDir, "developer_guide.txt");

    try {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
            console.log("📁 'docs' klasörü oluşturuldu.");
        }

        await writeFile(outputPath, docContent, "utf8");
        console.log(`✅ Doküman '${outputPath}' konumuna başarıyla yazıldı.`);
    } catch (err) {
        console.error("❌ Doküman yazılırken hata oluştu:", err.message);
    }
};

generateDoc();
