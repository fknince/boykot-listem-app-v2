# Boykot Listem Uygulaması (Next.js)

Bu proje, [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) komutu kullanılarak oluşturulmuş bir [Next.js](https://nextjs.org) uygulamasıdır.

## 🚀 Başlangıç

Geliştirme sunucusunu çalıştırmak için:

```bash
yarn dev
```

Tarayıcınızdan [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görebilirsiniz.

---

## 📁 Proje Yapısı

Ana sayfa `app/page.tsx` dosyasında bulunur. Kaydettiğiniz anda otomatik olarak güncellenir.

Yazı tipi optimizasyonu için [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) ve [Geist](https://vercel.com/font) font ailesi kullanılır.

---

## 🧶 YARN ve VOLTA Kullanımı (Gerekli Kurulum)

Bu projede **Yarn 4** ve **Volta** kullanılmaktadır. Takımda herkesin aynı sürümlerle çalışması ve platform farklarının ortadan kaldırılması için aşağıdaki adımları uygulamanız **zorunludur**.

---

## 💻 Kurulum Adımları

### 1. Yarn Kurulumu

#### ✅ macOS:

```bash
brew install yarn
```

> Eğer Homebrew yüklü değilse:  
> [https://brew.sh](https://brew.sh)

#### ✅ Windows:

```bash
npm install -g yarn
```

> **Not:** Eğer `yarn` komutu çalışmazsa şu klasörü PATH'e ekleyin:  
> `C:\Users\<KULLANICI_ADINIZ>\AppData\Roaming\npm`

Kurulum kontrolü:

```bash
yarn -v
```

---

### 2. Volta Kurulumu (macOS & Windows)

Volta, proje bazlı **Node.js ve Yarn versiyonlarını sabitlemek** için kullanılır.

#### ✅ macOS:

```bash
curl https://get.volta.sh | bash
```

> Kurulumdan sonra terminali yeniden başlatın.

#### ✅ Windows:

1. [https://volta.sh](https://volta.sh) adresine gidin
2. “Download for Windows” butonuna tıklayın
3. Kurulumu tamamlayın ve terminali kapatıp açın

Kurulum kontrolü:

```bash
volta -v
```

---

### 3. Proje Versiyonlarını Sabitle

Projeyi klonladıktan sonra terminalde şunları çalıştırın:

```bash
volta install node
volta install yarn
```

veya

```bash
volta pin node
volta pin yarn
```

Bu komutlar `package.json` içine şu alanı ekler:

```json
"volta": {
  "node": "20.x.x",
  "yarn": "4.x.x"
}
```

Böylece herkes aynı sürümle çalışır.

---

### 4. `.yarnrc.yml` Ayar Dosyası

Proje kök dizininde `.yarnrc.yml` dosyası yer alır. İçeriği şu şekilde olmalıdır:

```yaml
yarnPath: .yarn/releases/yarn-4.7.0.cjs
nodeLinker: node-modules
```

> `nodeLinker: node-modules` satırı olmazsa Yarn PnP (Plug’n’Play) modunu kullanır, bu da bazı kütüphanelerle (örn. Next.js) uyumsuzluk yaratabilir.

---

## 📦 Bağımlılıkları Yüklemek

Projeyi ilk kurduğunuzda veya paketleri sıfırlamak istediğinizde:

```bash
rm -rf node_modules
rm package-lock.json
yarn install
```

> Not: `package-lock.json` dosyası **kullanılmaz**. `.gitignore`'a eklenmiştir.

---

## 🧪 Kullanabileceğiniz Komutlar

### Geliştirme sunucusunu başlatmak:

```bash
yarn dev
```

### Yeni bir bağımlılık eklemek:

```bash
yarn add <paket-ismi>
```

---

## 🚀 Yayınlama

Projeyi yayınlamak için önerilen yöntem:  
[Vercel Platformu](https://vercel.com/new)

Deploy dökümantasyonu için:  
https://nextjs.org/docs/app/building-your-application/deploying

---

## 🛟 macOS ve Windows Kullanıcılarına Özel İpuçları

### 🔧 PATH Problemleri (Windows)

Yarn kurulumundan sonra `yarn` komutu tanınmıyorsa:

1. Aşağıdaki klasörü sistem `PATH`’ine ekleyin:
   ```
   C:\Users\<KULLANICI_ADINIZ>\AppData\Roaming\npm
   ```

2. Terminali yeniden başlatın

---

### 💡 Volta PATH Sorunu (macOS)

Volta kurulduktan sonra terminalde `volta` komutu çalışmıyorsa:

1. Terminali kapatıp açın
2. Gerekirse şu satırın `.zshrc` veya `.bash_profile` dosyasında olduğundan emin olun:

```bash
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```

---

## 📚 Ekstra Kaynaklar

- [Next.js Belgeleri](https://nextjs.org/docs)
- [Next.js Öğrenme Kılavuzu](https://nextjs.org/learn)
- [Yarn Belgeleri](https://yarnpkg.com/getting-started)
- [Volta Belgeleri](https://docs.volta.sh)

---

> 🛠 Yardıma ihtiyaç duyarsanız GitHub Issues veya Pull Request açmaktan çekinmeyin.
