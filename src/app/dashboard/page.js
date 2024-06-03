import Image from "next/image";
import "../../css/index.css";

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
          <span>Beranda</span>
          <span>Beranda</span>
          <span>Beranda</span>
          <span>Beranda</span>
        </div>
      </div>
    </main>
  );
}
