// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');
// 2. Tmabahkan "event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
  //3. Jalankan kode ini ketika tombol di-kilik
  alert('Halo! Terima kasih sudah berkunjung!');
});
