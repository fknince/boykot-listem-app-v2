import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.boycottOperation.deleteMany()
  await prisma.brand.deleteMany()
  await prisma.user.deleteMany()
  await prisma.boycottSettings.deleteMany()

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
