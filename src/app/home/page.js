import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-container">
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
            <Link href={"/dashboard"}>
              <span>Beranda</span>
            </Link>
            <Link href={"/home"} className="active">
              <span>Dashboard</span>
            </Link>
            <Link href={"/layanan"}>
              <span>Layanan</span>
            </Link>
            <Link href={"#"}>
              <span>Tentang Kami</span>
            </Link>
          </div>
        </div>
        <div className="navbar-items-i navbar-log">
          <Link href={"#"}>
            <span>Adit Anwary</span>
          </Link>
          <div className="user-icon">
            <Image
              src="/user-icon.png"
              alt="User Icon"
              width={25}
              height={25}
              priority
            />
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-greetings">
          <span>Selamat Pagi, Adit!</span>
          <span>Yuk kita lihat progress belajarmu di lingoleaf</span>
        </div>
        <div className="dashboard-profile">
          <div className="profile-image">
            <Image
              src="/boy-reading.png"
              alt="Boy Reading"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className="profile-info">
            <div className="profile-info-item">
              <div className="profile-icon">
                <Image
                  src="/user-icon.png"
                  alt="User Icon"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <span>Adit Anwary</span>
              <span>aditanwary79@gmail.com</span>
            </div>
            <div className="profile-info-item">
              <div className="profile-icon">
                <Image
                  src="/progress.png"
                  alt="Progress Icon"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <span>Progress</span>
              <span>20%</span>
            </div>
            <div className="profile-info-item">
              <div className="profile-icon">
                <Image
                  src="/level.png"
                  alt="Level Icon"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <span>Tingkatan</span>
              <span>Pemula</span>
            </div>
            <div className="profile-info-item">
              <div className="profile-icon">
                <Image
                  src="/language.png"
                  alt="Language Icon"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <span>Bahasa</span>
              <span>Inggris</span>
            </div>
            <div className="profile-info-item">
              <div className="profile-icon">
                <Image
                  src="/thropy.png"
                  alt="Trophy Icon"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <span>Misi</span>
              <span>10/50</span>
            </div>
          </div>
        </div>
        <div className="dashboard-progress">
          <span>Progres Belajar</span>
          <div className="progress-chart">
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div className="dashboard-book">
          <div className="book-image">
            <Image
              src="/book-open.png"
              alt="Book Open"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className="book-progress">
            <div className="progress-bar">
              <div className="progress-bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
