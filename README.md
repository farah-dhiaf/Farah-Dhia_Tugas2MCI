# Farah-Dhia_Tugas2MCI

Nama : Farah Dhia Fadhila
NRP : 5025211030

## Deskripsi Sistem
Sebuah sistem yang dibuat untuk melakukan berbagai hal dalam acara seminar. Pada kali ini akan dibuatkan backend sistem seminar acara Schematics BST yang bisa membuat API dengan framework `Express JS` yang dapat melakukan `Create`, `Read`, `Update`, dan `Delete` `(CRUD)` pada data seminar. Backend akan di-*deploy* dalam sebuah host berupa `Railway` dan menggunakan basis data `MySQL`.

## Analisis Kebutuhan
Terdapat beberapa entitas dalam basis data backend seminar Schematics BST ini yaitu peserta, seminar, tiket, dan transaksi. Relasi antar entitas dideskripsikan pada konseptual data model (CDM) di bawah ini. 

![gambarCDM](https://github.com/farah-dhiaf/Farah-Dhia_Tugas2MCI/blob/1f7d744f070f2c65206cb4a594d863a1ec5d70ad/CDM%20dan%20PDM/Seminar_CDM.png)

Dari relasi *many-to-many* antara seminar dan transaksi, akan dibuatkan tabel baru bernama detail_transaksi. Berikut adalah data model fisik (PDM) dari basis data.

![gambarPDM](https://github.com/farah-dhiaf/Farah-Dhia_Tugas2MCI/blob/1f7d744f070f2c65206cb4a594d863a1ec5d70ad/CDM%20dan%20PDM/Seminar_PDM.png)

# Implementasi CRUD API
Implementasi CRUD API ini menggunakan framework `ExpressJS` untuk melakukan CRUD data pada basis data seminar tersebut. Proses CRUD akan mengambil data pada basis data `MySQL` dengan cara menghubungkan project deployment ke basis data MySQL melalui `config/database.js`.

# Deployment
Proses *deployment* backend ini menggunakan platform `Railway` yang dihubungkan dengan *online database* `MySQL` yang ada pada Railway tersebut. *Deployment* backend menggunakan *repository* `Farah-Dhia_Tugas2MCI` pada Railway. Begitu juga dengan *online database* yang digunakan menggunakan platform Railway. Berikut adalah tampilan Railway [Link Railway](https://farah-dhiatugas2mci-production.up.railway.app/) dan didokumentasikan melalui [Postman](https://documenter.getpostman.com/view/26744386/2s93XsXm9Z).
