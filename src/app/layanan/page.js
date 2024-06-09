"use client";

import React, { useState, useEffect } from "react";
import KamusIdioms from "@/components/layanan/KamusIdioms";
import LayananNavbar from "@/components/layanan/LayananNavbar";
import RekomendasiPercakapan from "@/components/layanan/RekomendasiPercakapan";
import Penerjemah from "@/components/layanan/Penerjemah";
import Percakapan from "@/components/layanan/Percakapan";
import Link from "next/link";
import Image from "next/image";

export default function Layanan() {
  const [activeSection, setActiveSection] = useState("kamus-idioms");

  const handleSectionChange = (section) => {
    setActiveSection(section);
    window.history.pushState(null, "", `?section=${section}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const savedActiveSection = urlParams.get("section");
    if (savedActiveSection) {
      setActiveSection(savedActiveSection);
    }
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "kamus-idioms":
        return <KamusIdioms />;
      case "rekomendasi-percakapan":
        return <RekomendasiPercakapan />;
      case "penerjemah":
        return <Penerjemah />;
      case "percakapan":
        return <Percakapan />;
      // case "kamus-idioms":
      //     return <KamusIdioms />;
      // case "kamus-idioms":
      //     return <KamusIdioms />;
      default:
        return null;
    }
  };
  return (
    <main className="layanan-page">
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
            <Link href={"#"}>
              <span>Dashboard</span>
            </Link>
            <Link href={"/layanan"} className="active">
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
      <LayananNavbar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      {renderSection()}
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
