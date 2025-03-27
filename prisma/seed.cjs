const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Seed işlemi başlıyor...');

  // Tabloları temizle
  await prisma.boycottListBrand.deleteMany();
  await prisma.boycottList.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.user.deleteMany();
  console.log('🧹 Temizlik tamam!');

  // Kullanıcılar
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        loginProvider: 'google',
        createdAt: new Date(),
        lastLoginAt: new Date(),
        refreshToken: faker.datatype.uuid(),
        refreshTokenExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      },
    });
    users.push(user);
  }
  console.log('👤 Kullanıcılar eklendi.');

  // Markalar
  const brands = [];
  for (let i = 0; i < 10; i++) {
    const createdBy = users[Math.floor(Math.random() * users.length)];
    const updatedBy = users[Math.floor(Math.random() * users.length)];

    const brand = await prisma.brand.create({
      data: {
        name: faker.company.name(),
        sector: 'Teknoloji',
        subSector: 'Mobil',
        owner: faker.name.fullName(),
        description: faker.company.catchPhrase(),
        logoUrl: `https://logo.clearbit.com/example${i}.com`,
        twitterUsername: `marka${i}`,
        createdById: createdBy.id,
        updatedById: updatedBy.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    brands.push(brand);
  }
  console.log('🏷️ Markalar eklendi.');

  // Kullanıcılara Boykot Listesi ve markalar atama
  for (const user of users) {
    const list = await prisma.boycottList.create({
      data: {
        title: faker.lorem.words(3),
        userId: user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    const shuffledBrands = faker.helpers.shuffle(brands);
    const selectedBrands = shuffledBrands.slice(0, faker.datatype.number({ min: 2, max: 5 }));

    for (const brand of selectedBrands) {
      await prisma.boycottListBrand.create({
        data: {
          boycottListId: list.id,
          brandId: brand.id,
          addedAt: new Date(),
        },
      });
    }
  }

  console.log('📄 Boykot listeleri ve marka atamaları tamamlandı.');
  console.log('✅ Tüm seed işlemi başarılı.');
}

main()
  .catch((err) => {
    console.error('❌ Seed hatası:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
