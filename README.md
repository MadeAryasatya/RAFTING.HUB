# RAFTING.HUB

Website resmi **Bali Desa Rafting** — operator arung jeram Sungai Ayung yang dikelola warga Desa Bongkasa, Abiansemal, Bali.

🌐 Live: [balidesarafting.com](https://balidesarafting.com) · [reliable-brigadeiros-6ea425.netlify.app](https://reliable-brigadeiros-6ea425.netlify.app)

## Struktur

- `bali-desa-rafting/` — source website (HTML/CSS/JS statis)
  - 4 halaman: `index.html`, `tentang.html`, `layanan.html`, `kontak.html`
  - `css/style.css` — seluruh styling (design tokens maroon/gold di bagian atas)
  - `js/i18n.js` — toggle bahasa EN/ID (semua teks di-manage lewat atribut `data-i18n`)
  - `js/wa-popover.js` — popup pilih nomor WhatsApp
  - `js/main.js` — menu mobile, lightbox galeri, accordion FAQ
  - `assets/gallery/`, `assets/video/` — media yang sudah dioptimasi untuk web

## Development

Jalankan server lokal:

```bash
npx serve bali-desa-rafting -l 5173
```

## Deploy

Hosting di Netlify (drag & drop). Aset mentah (foto/video asli beresolusi penuh) sengaja tidak di-commit karena melebihi batas ukuran GitHub — hanya versi teroptimasi yang dipakai situs.
