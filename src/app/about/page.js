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
      <footer className="section-about__footer">
        <div className="section-about__footer-content">
          <div className="section-about__footer-content-left">
            <div className="footer-info">
              <p>Email: Lingoleaf@gmail.com</p>
              <p>Number Phone: (0770) 2342 12312</p>
              <p>2024@Lingoleaf</p>
            </div>
          </div>
          <div className="section-about__footer-content-center">
            <div className="footer-info">
              <h3>Lokasi Kami</h3>
              <p>
                Jln. Limau Manis Pasar XIV Dusun 7 Gg. Warisan - Deli Serdang,
                20362
              </p>
              <p>
                <a href="#">
                  <Image
                    src="/facebook-icon.svg"
                    alt="Facebook Icon"
                    width={30}
                    height={30}
                    priority
                  />
                  Lingoleaf
                </a>
              </p>
              <p>
                <a href="#">
                  <Image
                    src="/instagram-icon.svg"
                    alt="Instagram Icon"
                    width={30}
                    height={30}
                    priority
                  />
                  @Lingoleaf
                </a>
              </p>
            </div>
          </div>
          <div className="section-about__footer-content-right">
            <div className="footer-info">
              <Image
                src="/book-icon.svg"
                alt="Book Logo"
                width={60}
                height={60}
                priority
              />
              <p>Temukan Kebutuhan Percakapan Anda</p>
            </div>
            <div className="footer-social-media">
              <a href="#">
                <Image
                  src="/facebook-icon.svg"
                  alt="Facebook Icon"
                  width={30}
                  height={30}
                  priority
                />
              </a>
              <a href="#">
                <Image
                  src="/instagram-icon.svg"
                  alt="Instagram Icon"
                  width={30}
                  height={30}
                  priority
                />
              </a>
              <a href="#">
                <Image
                  src="/twitter-icon.svg"
                  alt="Twitter Icon"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
