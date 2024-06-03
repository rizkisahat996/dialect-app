import React from "react";

export default function RekomendasiPercakapan(params) {
  const rekomendasi = [
    {
      percakapan: "The sun is shining brightly in the sky.",
    },
    {
      percakapan: "El sol brilla intensamente en el cielo.",
    },
    {
      percakapan: "太阳在天空中明亮地照耀着",
    },
    {
      percakapan: "Il sole splende luminoso nel cielo.",
    },
    {
      percakapan: "Die Sonne scheint hell am Himmel.",
    },
    {
      percakapan: "The cat is sleeping peacefully on the windowsill.",
    },
  ];
  return (
    <section className="rekomendasi-percakapan pd-container">
      {rekomendasi.map((item) => (
        <div className="rekomendasi-percakapan__item">
          <span>"{item.percakapan}"</span>
        </div>
      ))}
    </section>
  );
}
