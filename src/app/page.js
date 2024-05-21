import Image from "next/image";
import styles from "./page.module.css";
import "../css/index.css";

export default function Home() {
  return (
    <main className="login-section">
      <section className="left-login">
        <div className="left-login__icon">
          <Image
            src="/book-icon.svg"
            alt="Book Logo"
            width={90}
            height={90}
            priority
          />
        </div>
        <div className="left-login__word">
          <p>
            "Bersiaplah untuk petualangan baru dan pengetahuan yang tak
            terbatas!"
          </p>
        </div>
      </section>
      <section className="right-login">
        <div className="right-login__wrapper">
          <p>
            Selamat Datang Kembali di <b>Lingoleaf</b>
          </p>
          <div className="right-login__bar">
            <input
              className="right-login__bar-input"
              type="email"
              name="email"
              placeholder="Masukkan email"
            />
            <input
              className="right-login__bar-input"
              type="password"
              name="password"
              placeholder="Kata Sandi"
            />
          </div>
        </div>
        <div className="right-login__line">
          <div className="right-login__line-line"></div>
          <div className="right-login__line-text">Atau masuk dengan</div>
          <div className="right-login__line-line"></div>
        </div>
        <button className="right-login__button" type="submit">
          <Image
            src="/google.svg"
            width={25}
            height={25}
            priority
            alt="Google Logo"
          />
          <span>Google</span>
        </button>
        <div className="right-login__straight">
          <div className="right-login__straight-line"></div>
          <span>
            Belum punya akun?
            <a href="/register">Daftar disini</a>
          </span>
        </div>
      </section>
    </main>
  );
}
