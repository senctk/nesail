# Dunia Kecil Nesa

Jurnal pribadi responsif yang dibuat dengan React dan Vite. Tema situs memakai warna putih dan biru lembut.

## Menjalankan secara lokal

```sh
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal, biasanya `http://localhost:5173`.

## Mengubah isi situs

Konten halaman dan navigasi berada di `src/App.jsx`. Ganti teks di dalam tanda kurung siku seperti `[Nama kamu]`, `[Kota tempat tinggal]`, dan `[TAHUN MULAI – TAHUN SELESAI]`. Daftar `photos` di bagian atas file mengatur judul, kategori, dan gambar galeri.

Halaman **Karya & Pencapaian** memakai daftar `books` dan `achievements` di `src/App.jsx`. Simpan sampul buku di `public/images/` dengan nama `buku-1.jpg`, `buku-2.jpg`, dan `buku-3.jpg`. Simpan foto pencapaian sebagai `pencapaian-1.jpg` dan `pencapaian-2.jpg`. Jika memakai nama lain, sesuaikan nilai `cover` atau `photo` pada data tersebut. Path foto lokal diawali dengan `/images/`.

Foto di Home dan navbar menggunakan `public/images/profill.jpeg`, sedangkan foto pada halaman Tentang Saya memakai `public/images/profil.jpeg`. Ganti kedua file secara terpisah untuk menampilkan foto yang berbeda.

Beberapa gambar contoh galeri masih menggunakan Unsplash. Untuk memakai foto sendiri, simpan file di `public/images/` lalu perbarui data fotonya di `src/App.jsx`. Tautan email dan media sosial pada halaman Kontak juga merupakan contoh; ganti dengan tautanmu atau hapus yang tidak digunakan.

Warna dan gaya situs diatur di `src/App.css`; aturan global berada di `src/index.css`.

## Build dan deploy

Jalankan `npm run build` untuk membuat folder `dist/`. Di Vercel, gunakan perintah build `npm run build` dan folder hasil `dist`. Hubungkan repositori GitHub ke Vercel; perubahan yang di-push ke cabang terpilih akan memicu deploy baru.
