import Image from "next/image";

export default function Dashboard() {
  return (
    <main>
      <div className="navbar-main">
        <Image
          src="/book-icon.svg"
          alt="Book Logo"
          width={90}
          height={90}
          priority
        />
        <div className="navbar-items">
          <span>Beranda</span>
          <span>Dashboard</span>
          <span>Layanan</span>
          <span>Tentang Kami</span>
          <span>Masuk</span>
          <span>Daftar</span>
        </div>
      </div>

      <div className="page-content">
        <div className="page-header">
          <h1>Temukan Kebutuhan Percakapan Anda</h1>
          <p>
            Kami akan membantu Anda menemukan percakapan sehari-hari yang
            Anda perlukan agar percakapan Anda lebih menyenangkan!
          </p>
          <div className="page-buttons">
            <button>Info Lebih lanjut</button>
            <button>Mulai</button>
          </div>
        </div>

        <div className="page-section">
          <h2>Mengapa Idiom itu penting?</h2>
          <p>
            Idioms penting karena mereka mengandung makna kiasan yang tidak
            dapat dimengerti secara harfiah, tetapi mereka mencerminkan aspek
            budaya, sejarah, dan konvensi sosial dalam suatu bahasa.
          </p>
          <button>Selengkapnya</button>
        </div>

        <div className="page-section">
          <h2>Layanan Kami</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Kamus Idiom</h3>
              <p>
                Anda dapat menemukan kata idiom yang anda butuhkan, dan kami
                juga dapat mengarahkan anda bagaimana menggunakan idiom dengan
                tepat!
              </p>
              <button>Mulai</button>
            </div>
            <div className="service-card">
              <h3>Rekomendasi Percakapan</h3>
              <p>
                Anda dapat menggunakan percapakan yang kami rekomendasikan
                untuk memulai percakapan yang menyenangkan!
              </p>
              <button>Mulai</button>
            </div>
            <div className="service-card">
              <h3>Penerjemah</h3>
              <p>
                Anda dapat menerjemahkan kata atau kalimat yang anda inginkan
                atau yang anda butuhkan dengan mudah!
              </p>
              <button>Mulai</button>
            </div>
          </div>
        </div>

        <div className="page-section">
          <div className="page-section-content">
            <Image
              src="/woman-book.svg"
              alt="Woman Reading a Book"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="page-section-content">
            <p>
              Lingoleaf merupakan website translate dan idioms.yang
              membantu anda dalam menemukan kata kata dan percakapan yang
              bermutu
            </p>
          </div>
        </div>

        <div className="page-footer">
          <div className="footer-info">
            <p>Email: Lingoleaf@gmail.com</p>
            <p>Number Phone: (0770) 2342 12312</p>
            <p>2024@Lingoleaf</p>
          </div>
          <div className="footer-info">
            <h3>Lokasi Kami</h3>
            <p>
              Jln. Limau Manis Pasar XIV Dusun 7 Gg. Warisan - Deli
              Serdang, 20362
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
    </main>
  );
}
