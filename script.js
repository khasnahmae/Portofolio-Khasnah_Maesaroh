
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');

  // Menambahkan event listener untuk setiap tautan navigasi
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah tindakan default

      // Mengambil target elemen dari atribut href
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Menggulir halaman ke posisi elemen target
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Menetapkan kelas "active" untuk menyorot tautan yang aktif
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});
function startTypingAnimation() {
  var texts = ["UI/UX Design", "Web Development"]; // Teks yang akan diketik
  var currentIndex = 0;
  var currentText = texts[currentIndex];
  var i = 0;
  var element = document.getElementById("typing-element");
  var cursor = document.getElementById("cursor");
  var typingSpeed = 100; // Kecepatan mengetik dalam milidetik
  var delayBetweenTexts = 2000; // Waktu tunggu sebelum mengetik teks berikutnya dalam milidetik

  // Menghapus teks awal
  element.innerHTML = "";

  function type() {
      if (i < currentText.length) {
          element.innerHTML += currentText.charAt(i);
          i++;
          cursor.style.left = i * 20 + "px"; // Mengatur posisi kursor
          setTimeout(type, typingSpeed); // Waktu tunggu antara setiap karakter
      } else {
          // Jika semua karakter telah diketik, tunggu beberapa saat kemudian lanjutkan ke teks berikutnya
          setTimeout(function() {
              element.innerHTML = ""; // Kosongkan elemen teks
              i = 0;
              currentIndex = (currentIndex + 1) % texts.length; // Pindah ke teks berikutnya
              currentText = texts[currentIndex];
              type(); // Mulai mengetik teks baru
          }, delayBetweenTexts);
      }
  }

  // Panggil fungsi untuk memulai animasi mengetik
  type();
}

// Panggil fungsi untuk memulai animasi mengetik saat halaman dimuat
startTypingAnimation();
