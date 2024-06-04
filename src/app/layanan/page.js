"use client";

import React, { useState, useEffect } from "react";
import KamusIdioms from "@/components/layanan/KamusIdioms";
import LayananNavbar from "@/components/layanan/LayananNavbar";
import RekomendasiPercakapan from "@/components/layanan/RekomendasiPercakapan";
import Penerjemah from "@/components/layanan/Penerjemah";
import Percakapan from "@/components/layanan/Percakapan";

export default function Layanan() {
  const [activeSection, setActiveSection] = useState("kamus-idioms");

  const handleSectionChange = (section) => {
    setActiveSection(section);
    window.history.pushState(null, "", `?section=${section}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const savedActiveSection = urlParams.get('section');
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
      <LayananNavbar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      {renderSection()}
    </main>
  );
}
