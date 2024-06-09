import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <div className="navbar-main">
        <div className="navbar-first">
          <div className="navbar-image">
            <Image
              src="/book-icon.svg"
              alt="Book Logo"
              width={90}
              height={90}
              priority
            />
          </div>
          <div className="navbar-items-i">
            <Link href={"#"} className="active">
              <span>Beranda</span>
            </Link>
            <Link href={"#"}>
              <span>Dashboard</span>
            </Link>
            <Link href={"#"}>
              <span>Layanan</span>
            </Link>
            <Link href={"#"}>
              <span>Tentang Kami</span>
            </Link>
          </div>
        </div>
        <div className="navbar-items-i navbar-log">
          <Link href={"#"}>
            <span>Masuk</span>
          </Link>
          <Link href={"#"}>
            <span>Daftar</span>
          </Link>
        </div>
      </div>
      <div className="dashboard-needs pd-container">
        <div className="dashboard-needs-l">
          <span>
            Temukan Kebutuhan <b>Percakapan Anda</b>
          </span>
          <p>
            Kami akan membantu Anda menemukan percakapan sehari-hari yang Anda
            perlukan agar percakapan Anda lebih menyenangkan!
          </p>
          <div className="dashboard-needs-l-b">
            <Link href={"#"}>
              <span>Info Lebih Lanjut</span>
            </Link>
            <Link href={"#"}>
              <span>Mulai</span>
            </Link>
          </div>
        </div>
        <div className="dashboard-needs-r">
          <Image
            src="/dashboardhead.png"
            alt="Dashboard Head"
            width={580}
            height={490}
            priority
          />
        </div>
      </div>
      <div className="dashboard-idiom pd-container">
        <div className="dashboard-idiom-l">
          <Image
            src="/icon-stuff.png"
            alt="Book Logo"
            width={536}
            height={468}
            priority
          />
        </div>
        <div className="dashboard-idiom-r">
          <span>Mengapa Idiom itu penting?</span>
          <div className="dashboard-idiom-r-b">
            <p>
              Idioms penting karena mereka mengandung makna kiasan yang tidak
              dapat dimengerti secara harfiah, tetapi mereka mencerminkan aspek
              budaya, sejarah, dan konvensi sosial dalam suatu bahasa.
            </p>
            <Link href={"#"}>
              <span>Selengkapnya</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard-layanan pd-container">
        <span>Layanan Kami</span>
        <div className="dashboard-layanan-wrapper">
          <div className="dashboard-layanan-items">
            <span>Rekomendasi Percakapan</span>
            <p>
              Anda dapat menemukan kata idiom yang anda butuhkan, dan kami juga
              dapat mengarahkan anda bagaimana menggunakan idiom dengan tepat!
            </p>
            <Link href={"#"}>
              <span>Mulai</span>
            </Link>
          </div>
          <div className="dashboard-layanan-items">
            <span>Rekomendasi Percakapan</span>
            <p>
              Anda dapat menemukan kata idiom yang anda butuhkan, dan kami juga
              dapat mengarahkan anda bagaimana menggunakan idiom dengan tepat!
            </p>
            <Link href={"#"}>
              <span>Mulai</span>
            </Link>
          </div>
          <div className="dashboard-layanan-items">
            <span>Rekomendasi Percakapan</span>
            <p>
              Anda dapat menemukan kata idiom yang anda butuhkan, dan kami juga
              dapat mengarahkan anda bagaimana menggunakan idiom dengan tepat!
            </p>
            <Link href={"#"}>
              <span>Mulai</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard-contact">
        <div className="dashboard-contact-l">
          <Image src="/girl.png" alt="Cewe" width={400} height={400} priority />
        </div>
        <div className="dashboard-contact-t">
          <Image
            src="/book-icon.svg"
            alt="Book Logo"
            width={60}
            height={60}
            priority
          />
          <p>
            Lingoleaf merupakan website translate dan idioms.yang membantu anda
            dalam menemukan kata kata dan percakapan yang bermutu
          </p>
        </div>
        <div className="dashboard-contact-r">
          <span>Lokasi Kami</span>
          <p>
            Jln. Limau Manis Pasar XIV Dusun 7 Gg. Warisan - Deli Serdang, 20362
          </p>
          <div className="dashboard-contact-logos">
            <div className="dashboard-contact-logos-item">
              <Image
                src="/facebook.svg"
                alt="Facebook Logo"
                width={25}
                height={25}
                priority
              />
              <span>LingoLeaf</span>
            </div>
            <div className="dashboard-contact-logos-item">
              <Image
                src="/instagram.svg"
                alt="Instagram Logo"
                width={25}
                height={25}
                priority
              />
              <span>@LingoLeaf</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-main-t">
          <div className="footer-main-t-l">
            <span>
              Email : <br />
              Lingoleaf@gmail.com
            </span>
            <span>
              Number Phone : <br />
              (0770) 2342 12312
            </span>
          </div>
          <div className="footer-main-t-t">
            <div className="navbar-image">
              <Image
                src="/book-icon.svg"
                alt="Book Logo"
                width={60}
                height={60}
                priority
              />
            </div>
            <span>Temukan Kebutuhan Percakapan Anda</span>
          </div>
          <div className="footer-main-t-r">
            <Image
              src="/sosmed.svg"
              alt="Sosmed"
              width={150}
              height={40}
              priority
            />
          </div>
        </div>
        <div className="footer-main-line"></div>
        <span className="footer-main-bot">2024@Lingoleaf</span>
      </div>
    </main>
  );
}
