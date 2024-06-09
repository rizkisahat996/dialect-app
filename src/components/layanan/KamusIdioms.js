import React from "react";

export default function KamusIdioms() {
  const items = [
    {
      percakapan: "The cat is sleeping peacefully on the windowsill.",
      penjelasan:
        "Penjelasan: Kalimat ini menggambarkan aksi kucing yang sedang tidur dengan tenang di atas ambang jendela. Ini adalah deskripsi keadaan saat ini dari kucing yang sedang tidur.",
    },
    {
      percakapan: "I'm going to the store to buy some groceries.",
      penjelasan:
        "Penjelasan: Kalimat ini mengindikasikan rencana seseorang (pembicara) untuk pergi ke toko belanjaan guna membeli beberapa barang keperluan sehari-hari. Ini adalah pernyataan tentang rencana atau niat yang akan dilakukan di masa depan.",
    },
    {
      percakapan: "She enjoys listening to classical music in the evenings.",
      penjelasan:
        "Penjelasan: Kalimat ini menyatakan bahwa dia (perempuan yang disebutkan) menikmati mendengarkan musik klasik di malam hari. Ini adalah deskripsi kebiasaan atau kesenangan yang dimiliki seseorang.",
    },
    {
      percakapan: "He studied hard for the exam and earned a high score.",
      penjelasan:
        "Penjelasan: Kalimat ini menjelaskan bahwa dia (laki-laki yang disebutkan) belajar dengan tekun untuk ujian dan berhasil meraih nilai tinggi. Ini adalah deskripsi dari aksi dan hasil dari usaha belajar seseorang.",
    },
  ];
  return (
    <section className="kamus-idioms pd-container">
      {items.map((item, index) => (
        <div className="kamus-idioms__item" key={index}>
          <span>&quot;{item.percakapan}&quot;</span>
          <p>{item.penjelasan}</p>
        </div>
      ))}
    </section>
  );
}
