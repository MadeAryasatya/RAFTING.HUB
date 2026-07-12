# 📘 Panduan Website Bali Desa Rafting

Dokumen ini adalah rangkuman lengkap sistem website **balidesarafting.com** — untuk referensi jika terjadi masalah atau butuh melakukan perubahan.

*Terakhir diperbarui: 12 Juli 2026*

---

## 1. Peta Sistem — Apa Terhubung ke Apa

Website ini melibatkan **3 layanan** yang saling terhubung:

| Layanan | Peran | Login |
|---|---|---|
| **IDwebhost** (member.idwebhost.com) | Tempat domain `balidesarafting.com` dibeli & diperpanjang | Akun IDwebhost kalian |
| **Netlify** (app.netlify.com) | Hosting — tempat file website "tinggal" dan disajikan ke pengunjung. Gratis. | Login akun: madearyanugraha01@gmail.com |
| **GitHub** (github.com/MadeAryasatya/RAFTING.HUB) | Backup kode website | Akun GitHub MadeAryasatya |

**Alur pengunjung:** ketik `balidesarafting.com` → IDwebhost mengarahkan ke nameserver Netlify (`dns1–dns4.p07.nsone.net`) → Netlify menyajikan website.

**Alamat website:**
- Utama: **https://balidesarafting.com** (juga www.balidesarafting.com)
- Cadangan (selalu aktif): **https://balidesarafting.netlify.app**

---

## 2. Lokasi File di Komputer

Semua di `D:\RAFTING WEB\`:

| Folder/File | Isi |
|---|---|
| `bali-desa-rafting\` | **SOURCE UTAMA** — semua file website yang diedit |
| `bali-desa-rafting\index.html` | Halaman Beranda |
| `bali-desa-rafting\tentang.html` | Halaman Tentang (About) |
| `bali-desa-rafting\layanan.html` | Halaman Paket & Layanan |
| `bali-desa-rafting\kontak.html` | Halaman Kontak |
| `bali-desa-rafting\css\style.css` | Semua tampilan/warna/layout |
| `bali-desa-rafting\js\i18n.js` | **Semua teks EN & ID** — edit teks website di sini, termasuk template chat WhatsApp (cari `common.wa.msg.pricing`) |
| `bali-desa-rafting\js\wa-popover.js` | Logika popup pilih nomor WhatsApp |
| `bali-desa-rafting\js\main.js` | Menu mobile, galeri lightbox, FAQ |
| `bali-desa-rafting\assets\gallery\` & `assets\video\` | Foto & video yang SUDAH dioptimasi (dipakai website) |
| `bali-desa-rafting\assets\VIDIO\`, `FOOD ASSET\`, dll | Foto/video MENTAH (tidak dipakai website, hanya arsip — backup ke Google Drive!) |
| `deploy-bali-desa-rafting\` | Salinan bersih untuk upload (dibuat otomatis) |
| `bali-desa-rafting-site.zip` | File yang di-drag ke Netlify saat update |

**Nomor WhatsApp yang terpasang di website:**
- Nyoman Ariyati — +62 822-3663-7920
- Wayan Rafting — +62 812-3763-8800

---

## 3. Cara Update Website (Alur Kerja)

1. Edit file di `D:\RAFTING WEB\bali-desa-rafting\` (atau minta Claude yang mengerjakan)
2. Salin file yang berubah ke `deploy-bali-desa-rafting\`
3. Bangun ulang `bali-desa-rafting-site.zip` (⚠️ **JANGAN pakai klik-kanan → Compress di Windows** — path-nya rusak untuk Netlify; minta Claude yang membuatnya, atau pakai skrip PowerShell khusus)
4. Buka app.netlify.com → project **balidesarafting** → **Deploys** → drag file ZIP ke kotak upload
5. Tunggu "Published" → cek website dengan **Ctrl+Shift+R** (hard refresh)

---

## 4. 🚨 Panduan Masalah (Troubleshooting)

### Langkah diagnosa PERTAMA untuk semua masalah:
Buka **https://balidesarafting.netlify.app**
- ✅ **Terbuka normal** → website & hosting SEHAT, masalahnya di domain/DNS/perangkat → lihat kasus A/B
- ❌ **Tidak terbuka juga** → masalah di Netlify/file website → lihat kasus C

### Kasus A: "Site can't be reached" hanya di perangkat sendiri
Penyebab paling umum: **cache DNS di VPN (NordVPN) atau jaringan lokal.**
1. Cek dulu dari HP pakai **data seluler tanpa VPN** — kalau terbuka, berarti website sehat, masalah hanya di perangkat kalian
2. Matikan/reconnect VPN, lalu di Command Prompt jalankan: `ipconfig /flushdns`
3. Tutup-buka browser

### Kasus B: Peringatan "Connection Is Not Private" / gembok merah
- Sertifikat HTTPS bermasalah. Buka Netlify → project → **Domain management** → scroll ke **HTTPS**
- Klik **"Verify DNS configuration"** / **"Renew certificate"**
- Sertifikat Let's Encrypt diperpanjang OTOMATIS tiap ±3 bulan oleh Netlify — normalnya tidak perlu diapa-apakan

### Kasus C: Website benar-benar mati di semua perangkat
1. Cek email dari Netlify (mungkin ada pemberitahuan)
2. Buka app.netlify.com → cek status "Published" di project
3. Kalau project hilang/rusak: file website lengkap ada di GitHub (github.com/MadeAryasatya/RAFTING.HUB) dan di `D:\RAFTING WEB\bali-desa-rafting\` — bisa deploy ulang dari nol dalam 10 menit (drag ZIP baru ke project baru)

### Kasus D: Domain expired ⚠️ PALING PENTING DICEGAH
- Domain `balidesarafting.com` harus **diperpanjang SETIAP TAHUN di IDwebhost** (berbayar)
- Kalau lupa perpanjang → website mati total & domain bisa diambil orang lain
- **Pasang pengingat tahunan di kalender HP!** Cek tanggal jatuh tempo di member.idwebhost.com → Domain Saya
- Aktifkan auto-renew di IDwebhost kalau tersedia

### Kasus E: Setelah upload ZIP baru, tampilan rusak/polos (tanpa warna)
- ZIP-nya dibuat dengan cara yang salah (path pakai `\` bukan `/`)
- Solusi: buat ulang ZIP dengan cara yang benar (lihat bagian 3, langkah 3)

### Yang TIDAK perlu dikhawatirkan:
- Netlify gratis selamanya untuk skala website ini (100GB bandwidth/bulan — cukup untuk puluhan ribu pengunjung)
- Sertifikat HTTPS diperpanjang otomatis
- Tidak ada database/plugin yang bisa di-hack atau perlu di-update

---

## 5. Riwayat & Keputusan Penting

- Website dibuat statis (HTML/CSS/JS murni) — cepat, aman, gratis hosting, tapi edit konten harus lewat kode
- Harga paket sengaja TIDAK ditampilkan — semua diarahkan ke WhatsApp
- Section Obama berdasarkan berita nyata (Detik.com & BBC, Juni 2017) — link sumber tercantum di website
- Angka "1.458.000+ Happy Travelers" = estimasi kumulatif sejak 2015 (300-350 tamu/hari pra-COVID, 150/hari setelahnya, tutup 2020) — dari pemilik
- Testimoni di halaman About = review Google asli (Dita Ayu, Shivani Muley, Aditya Damar Purnomo)
- Nameserver domain diarahkan ke Netlify DNS — pengaturan DNS sekarang dikelola di Netlify (menu DNS), BUKAN di "Kelola DNS" IDwebhost

## 6. Belum Dikerjakan (Opsional)

- [ ] Google Analytics (butuh buat akun GA4 → kirim Measurement ID ke Claude)
- [ ] Open Graph tags (preview cantik saat link dibagikan di WA/IG)
- [ ] Hapus file tak terpakai: `.clauderaft.zip` (320MB), `assets\logo 1.png`
- [ ] Backup foto/video mentah ke Google Drive (folder `VIDIO`, `FOOD ASSET`, dll — total ~320MB, TIDAK ada di GitHub)
