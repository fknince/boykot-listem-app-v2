import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // İlişkili verilerden başlayarak silme işlemi yapılmalı
  await prisma.boycottListBrand.deleteMany()
  await prisma.boycottList.deleteMany()
  await prisma.brand.deleteMany()
  await prisma.user.deleteMany()

  console.log('🧹 Veritabanı temizlendi.')
}

main()
  .catch((e) => {
    console.error('❌ Temizleme hatası:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
