<template>
  <section class="bg-white py-16">
    <div class="mx-auto max-w-5xl px-4 space-y-8">

      <!-- Blok 1: Penjelasan utama (blok besar paling atas) -->
      <div class="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
          Apa itu EdVenture Arena?
        </h2>
        <p class="text-sm md:text-base text-gray-700 leading-relaxed">
          EdVenture Arena adalah platform kuis berbentuk game di mana kamu melawan musuh
          dengan menjawab pertanyaan pilihan ganda. Setiap jawaban yang benar akan
          mengurangi HP musuh, sementara jawaban yang salah dapat membuatmu kehilangan
          kesempatan. Semakin tinggi level, semakin sulit soal dan semakin kuat musuh
          yang dihadapi.
        </p>
      </div>

      <!-- Blok 2: Dua kolom tengah -->
      <div class="grid gap-6 md:grid-cols-2">
        <div class="bg-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Belajar Sambil Bermain
          </h3>
          <p class="text-sm md:text-base text-gray-700 leading-relaxed">
            EdVenture dirancang agar proses belajar terasa seperti bermain game.
            Kamu menjawab kuis, menaikkan level, membuka musuh baru, dan mengejar
            skor tertinggi di leaderboard.
          </p>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Cocok untuk Berbagai Topik
          </h3>
          <p class="text-sm md:text-base text-gray-700 leading-relaxed">
            Topik kuis dapat disesuaikan, mulai dari pengetahuan umum, sains,
            sejarah, hingga matematika. Platform ini bisa digunakan untuk latihan
            pribadi, tugas kelas, atau kompetisi kuis sederhana.
          </p>
        </div>
      </div>

      <!-- Blok 3: Penjelasan tambahan (blok panjang) -->
      <div class="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">
          Kenapa EdVenture Menarik?
        </h3>
        <p class="text-sm md:text-base text-gray-700 leading-relaxed">
          Sistem poin, reward, dan level membuat pengguna termotivasi untuk
          terus mencoba lagi. Dengan tampilan sederhana dan responsif, EdVenture
          mudah diakses di laptop maupun perangkat mobile sehingga cocok
          digunakan sebagai media belajar harian.
        </p>
      </div>

      <!-- Blok 4: Info singkat terakhir (blok paling bawah sebelum tombol) -->
      <div class="bg-gray-100 rounded-2xl p-6 shadow-sm">
        <p class="text-sm md:text-base text-gray-700 leading-relaxed">
          EdVenture Arena dibangun menggunakan Vue.js dan Tailwind CSS sehingga
          tampilan antarmuka tetap modern, ringan, dan mudah dikembangkan lebih
          lanjut, misalnya dengan menambah kategori kuis, jenis musuh baru,
          atau mode permainan lainnya.
        </p>
      </div>

      <!-- Tombol Mulai Bermain di bawah, mirip desain figma -->
      <div class="pt-6 flex justify-center">
        <router-link
          to="/game"
          class="inline-flex items-center justify-center rounded-full
                 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400
                 px-8 py-2 text-sm md:text-base font-semibold text-white
                 shadow-md hover:shadow-lg hover:-translate-y-0.5
                 transition-all duration-200"
        >
          Mulai Bermain
        </router-link>
      </div>

    </div>
  </section>
</template>
