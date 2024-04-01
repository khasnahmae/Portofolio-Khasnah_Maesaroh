// document.addEventListener("DOMContentLoaded", function() {
//     // Mengambil semua anchor link di navbar
//     const navLinks = document.querySelectorAll('.menu-items a');
    
//     // Menambahkan event listener untuk setiap anchor link
//     navLinks.forEach(function(navLink) {
//       navLink.addEventListener('click', function(event) {
//         event.preventDefault(); // Menghentikan default behavior dari anchor link
        
//         // Mengambil id target dari href anchor link
//         const targetId = this.getAttribute('href').substring(1);
        
//         // Mengambil elemen dengan id target
//         const targetElement = document.getElementById(targetId);
        
//         // Scroll ke elemen target dengan smooth behavior
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//       });
//     });
//   });
//   document.addEventListener("DOMContentLoaded", function() {
//     // Mengambil semua anchor link di navbar
//     const navLinks = document.querySelectorAll('.nav-link');
  
//     // Menambahkan event listener untuk setiap anchor link
//     navLinks.forEach(function(navLink) {
//       navLink.addEventListener('click', function(event) {
//         event.preventDefault(); // Menghentikan default behavior dari anchor link
        
//         // Menghapus kelas "active" dari semua anchor link
//         navLinks.forEach(function(link) {
//           link.classList.remove('active');
//         });
        
//         // Menambahkan kelas "active" pada anchor link yang sedang diklik
//         this.classList.add('active');
//       });
//     });
//   });
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
