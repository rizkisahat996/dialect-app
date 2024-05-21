import Image from "next/image";
import "../../css/index.css";

export default function Register() {
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
            <div className="right-login__bar-wrapper">
              <label className="right-login__bar-label">Nama Pengguna</label>
              <input
                className="right-login__bar-input"
                type="text"
                name="name"
                placeholder="Terdiri dari 6-12 karakter"
              />
            </div>
            <div className="right-login__bar-wrapper">
              <label className="right-login__bar-label">Email</label>
              <input
                className="right-login__bar-input"
                type="email"
                name="email"
                placeholder="Masukkan email"
              />
            </div>
            <div className="right-login__bar-wrapper">
              <label className="right-login__bar-label">Kata Sandi</label>
              <input
                className="right-login__bar-input"
                type="password"
                name="password"
                placeholder="Terdiri dari huruf kapital, huruf kecil, dan angka"
              />
            </div>
            <div className="right-login__bar-wrapper">
              <label className="right-login__bar-label">
                Ulangi Kata Sandi
              </label>
              <input
                className="right-login__bar-input"
                type="password"
                name="confirm_password"
                placeholder="Masukan Kata Sandi"
              />
            </div>
            <button className="right-login__bar-submit">
              <span>Buat Akun</span>
              <Image
                src="/arrow-right-circle.svg"
                alt="Submit Button"
                width={32}
                height={32}
                priority
              />
            </button>
          </div>
        </div>
        <div className="right-login__line">
          <div className="right-login__line-line"></div>
          <div className="right-login__line-text">Atau daftar dengan</div>
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
      </section>
    </main>
  );
}
