function mulaiBucin() {
  const nama = document.getElementById('nama').value;
  const outputDiv = document.getElementById('output');

  if (nama === '') {
    outputDiv.innerHTML = '<p>Tolong masukkan namamu dulu, ya! 😊</p>';
    return;
  }

  outputDiv.innerHTML = `<p>Pagi ${nama}! Senang banget bisa kenal sama kamu. 💖</p>`;

  setTimeout(() => {
    let pertanyaan = confirm(`${nama}, apa kamu tahu betapa spesialnya kamu buat aku?`);
    if (pertanyaan) {
      outputDiv.innerHTML += `<p>Kamu memang lebih dari sekadar luar biasa, ${nama}. Setiap detik bersamamu bikin aku semakin yakin, kamu adalah alasan aku bahagia. Aku beruntung banget punya kamu. 😘</p>`;
    } else {
      outputDiv.innerHTML += `<p>Nggak apa-apa, ${nama}. Sekarang kamu tahu, kamu itu sangat spesial buat aku! 🥰</p>`;
    }

    setTimeout(() => {
      let kataBucin = ['Semoga harimu secerah senyummu! 😊', 'Kamu adalah alasan aku tersenyum setiap hari. 😊', 'Semoga hari ini membawa kebahagiaan untukmu! 🌷', 'Pagi ini aku merindukanmu! Sampai bertemu sayang! 💖'];
      let randomBucin = kataBucin[Math.floor(Math.random() * kataBucin.length)];
      outputDiv.innerHTML += `<p>${randomBucin}</p>`;

      setTimeout(() => {
        outputDiv.innerHTML += `<p>Semoga pagi ini membawakanmu kebahagiaan dan semangat baru. Ingat, kamu adalah cahaya di hidupku, dan aku selalu bersyukur bisa bersamamu. Semoga harimu menyenangkan! 🌞🌻</p>`;
      }, 2000);
    }, 2000);
  }, 1000);
}
