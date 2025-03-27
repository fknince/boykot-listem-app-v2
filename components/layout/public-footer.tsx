export function Footer() {
    return (
        <footer className="border-t bg-background px-4 py-6 text-xs text-muted-foreground text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p>© {new Date().getFullYear()} Boykot Listem • Tüketici gücünü göster</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
                    <a href="/kullanim-kosullari">Kullanım Koşulları</a>
                    <a href="/iletisim">İletişim</a>
                </div>
            </div>
        </footer>
    );
}