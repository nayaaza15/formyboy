# Untuk Sayangku, Galih ♡

Website ulang tahun personal untuk Galih Ramadhan — ulang tahun ke-19 pada 28 September 2026.

## Struktur file

```text
index.html
style.css
script.js
README.md
besok-kita-pergi-makan.mp3
```

File MP3 **tidak disertakan** dalam paket ini. Lagu yang dipakai adalah **“Besok Kita Pergi Makan” — Sal Priadi**. Tambahkan file audio yang kamu miliki sendiri dengan nama:

```text
besok-kita-pergi-makan.mp3
```

di folder yang sama dengan `index.html`.

### Cara menambahkan lagu
1. Siapkan file MP3 yang kamu miliki/berhak gunakan.
2. Rename menjadi `besok-kita-pergi-makan.mp3`.
3. Masukkan ke folder website.
4. Upload file tersebut ke GitHub bersama file lainnya.

Website juga menyediakan tombol **“pilih lagu”** sebagai alternatif: saat dibuka di browser, pemilik website bisa memilih file MP3 dari perangkat. Untuk hosting statis, metode ini hanya berlaku di perangkat/browser yang memilih file tersebut; file pilihan tidak otomatis tersimpan untuk pengunjung lain.

## Deploy ke GitHub

1. Buat repository baru di GitHub.
2. Pilih **Public** bila ingin repository dapat dilihat publik.
3. Upload **isi folder** ini, bukan file ZIP.
4. Pastikan `index.html` berada di root repository.
5. Commit changes.

## Deploy ke Netlify

1. Buka Netlify.
2. Pilih **Add new project** → **Import an existing project**.
3. Pilih GitHub.
4. Pilih repository website ini.
5. Untuk website HTML/CSS/JS murni:
   - Build command: kosong
   - Publish directory: `.`
6. Deploy.

Setelah berhasil, Netlify akan memberikan URL `*.netlify.app`.

## Catatan

Website ini tidak menggunakan backend, database, framework, atau build command. Semua efek visual dibuat dengan CSS dan JavaScript murni.
