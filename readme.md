# Weatherku - Aplikasi Cuaca Sederhana

Weatherku adalah aplikasi web sederhana yang memungkinkan pengguna untuk mencari dan melihat informasi cuaca terkini dari berbagai kota di seluruh dunia. Aplikasi ini dibangun menggunakan HTML, CSS, dan JavaScript modern (ES Modules) serta terintegrasi dengan API dari OpenWeatherMap.

## Fitur Utama

- **Pencarian Cuaca**: Cari informasi cuaca berdasarkan nama kota.
- **Tampilan Cuaca Terkini**: Menampilkan informasi penting seperti suhu, kondisi cuaca (misalnya, "berawan"), dan ikon cuaca yang relevan.
- **Detail Cuaca**: Halaman khusus untuk melihat detail lebih lanjut seperti suhu yang dirasakan, kelembapan, dan kecepatan angin.
- **Riwayat Pencarian**: Menyimpan 10 kota terakhir yang dicari untuk akses cepat.
- **Akses Riwayat**: Klik pada item di riwayat untuk langsung melihat kembali cuaca di kota tersebut.
- **Desain Responsif**: Tampilan yang dapat menyesuaikan diri dengan berbagai ukuran layar.

## Tampilan Aplikasi

*(Anda bisa menambahkan screenshot aplikasi Anda di sini)*

**Halaman Utama:**
![Halaman Utama](https://via.placeholder.com/400x250.png?text=Tampilan+Halaman+Utama)

**Halaman Detail:**
![Halaman Detail](https://via.placeholder.com/400x250.png?text=Tampilan+Halaman+Detail)

## Teknologi yang Digunakan

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES Modules)
- **API**:
  - [OpenWeatherMap API](https://openweathermap.org/api) untuk mendapatkan data cuaca.

## Struktur Proyek

Proyek ini diorganisir dengan struktur yang bersih dan modular untuk kemudahan pengembangan dan pemeliharaan.

```
wether-app/
├── assets/
│   └── icons/          # Ikon dan gambar
├── css/
│   └── style.css       # Styling untuk seluruh aplikasi
├── js/
│   ├── api.js          # Mengelola semua permintaan ke OpenWeatherMap API
│   ├── storage.js      # Mengelola penyimpanan riwayat di localStorage
│   ├── ui.js           # Mengelola semua pembaruan antarmuka (DOM)
│   └── main.js         # Titik masuk utama, mengikat semua modul
├── index.html          # Halaman utama aplikasi
├── detail.html         # Halaman untuk menampilkan detail cuaca
└── README.md           # File ini
```

### Penjelasan Modul JavaScript

- **`api.js`**: Bertanggung jawab untuk berkomunikasi dengan server OpenWeatherMap. Fungsi utamanya adalah mengambil data cuaca berdasarkan nama kota.
- **`storage.js`**: Berfungsi untuk menyimpan dan mengambil data riwayat pencarian dari `localStorage` browser.
- **`ui.js`**: Berisi fungsi-fungsi untuk merender atau menampilkan data (seperti kartu cuaca dan daftar riwayat) ke dalam HTML.
- **`main.js`**: Bertindak sebagai "otak" aplikasi. Modul ini menginisialisasi aplikasi, menangani input dari pengguna (seperti pencarian dan klik), dan mengoordinasikan interaksi antara modul `api`, `storage`, dan `ui`.

## Instalasi dan Penggunaan

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone Repositori** (jika sudah ada di Git)
    ```bash
    git clone https://github.com/username/wether-app.git
    cd wether-app
    ```
2.  **Dapatkan Kunci API**
    - Buat akun gratis di OpenWeatherMap.
    - Buka halaman "API keys" di dasbor akun Anda dan salin kunci API Anda.

3.  **Masukkan Kunci API**
    - Buka file `js/api.js`.
    - Ganti nilai `const API_KEY` dengan kunci API yang telah Anda salin.

4.  **Jalankan Aplikasi**
    - Buka file `index.html` langsung di browser Anda.

---

Dibuat oleh **Irgiharnoyo** &copy; 2025