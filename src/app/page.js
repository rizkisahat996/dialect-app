import Image from "next/image";
import styles from "./page.module.css";
import "../css/index.css";
import { FormEvent } from "react";
// import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   const email = formData.get("email");
  //   const password = formData.get("password");

  //   const response = await fetch("/api/auth/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   if (response.ok) {
  //     router.push("/profile");
  //   } else {
  //     console.log("error bro");
  //   }
  // }

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
            &quot;Bersiaplah untuk petualangan baru dan pengetahuan yang tak
            terbatas!&quot;
          </p>
        </div>
      </section>
      <form className="right-login">
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
            <p className="forgot-password">Lupa Kata Sandi?</p>
            <button type="submit">Masuk</button>
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
      </form>
    </main>
  );
}
