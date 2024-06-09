import Image from "next/image";
import "../../css/index.css";

export default function About() {
  return (
    <main className="section-about">
      <section className="section-about__left">
        <Image
          src="/girl.svg"
          alt="Girl Image"
          width={562}
          height={462}
          priority
        />
      </section>
      <section className="section-about__right">
        <span>Apa Itu Lingoleaf?</span>
        <p>
          Selamat datang di website Lingleaf! Di sini Anda akan menemukan
          informasi yang berguna, layanan berkualitas, dan pengalaman pengguna
          yang memuaskan. Jelajahi halaman-halaman kami dan temukan apa yang
          Anda cari. Kami siap membantu Anda dengan segala kebutuhan dan
          pertanyaan yang Anda miliki. Terima kasih telah mengunjungi website
          kami, semoga Anda menikmati pengalaman browsing di sini!
        </p>
      </section>
    </main>
  );
}
