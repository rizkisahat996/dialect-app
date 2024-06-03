import React from "react";
import Image from "next/image";

export default function LayananNavbar({ activeSection, onSectionChange }) {
  const sections = [
    { id: "kamus-idioms", label: "Kamus Idioms" },
    { id: "rekomendasi-percakapan", label: "Rekomendasi Percakapan" },
    { id: "penerjemah", label: "Penerjemah" },
  ];

  return (
    <section className="layanan-navbar pd-container">
      <div className="layanan-navbar__items">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`layanan-navbar__items-item ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={() => onSectionChange(section.id)}
          >
            <span>{section.label}</span>
          </div>
        ))}
      </div>
      <div
        key={"percakapan"}
        className={`layanan-navbar__ask ${
          activeSection === "percakapan" ? "active" : ""
        }`}
        onClick={() => onSectionChange("percakapan")}
      >
        <Image
          src="/chat.svg"
          alt="Chat Logo"
          width={50}
          height={50}
          priority
        />
      </div>
    </section>
  );
}
