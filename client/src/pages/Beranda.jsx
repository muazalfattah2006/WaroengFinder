import React from "react";
import { Link } from "react-router-dom";
import { BookmarkFilled } from "./BookmarkFilled";
import { Search } from "./Search";
import { DummyImage } from "./DummyImage";

const featuredWarungs = [
  {
    name: "Warung Muaz",
    price: "Mulai dari Rp10.000",
    location: "📍Jalan Dr. Mansyur",
    link: "/warung/muaz",
  },
  {
    name: "Warung Cello",
    price: "Mulai dari Rp10.000",
    location: "📍Jalan Jamin Ginting",
    link: "/warung/cello",
  },
  {
    name: "Warung Naswa",
    price: "Mulai dari Rp10.000",
    location: "📍Jalan Pembangunan",
    link: "/warung/naswa",
  },
];

export const Beranda = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-4 sm:px-8 shadow-[0px_5px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)]">
        <div className="flex items-center gap-4" />
        <h1 className="[font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl sm:text-3xl tracking-[0] leading-[normal]">
          Waroeng Finder
        </h1>
        <Link
          to="/favorite"
          className="text-white transition-transform active:scale-95 hover:scale-105"
        >
          <BookmarkFilled className="w-10 h-10" color="#387647" />
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 sm:px-8 lg:px-16 py-8 sm:py-10 space-y-10 sm:space-y-12">
        {/* Telusuri bar */}
        <div className="max-w-6xl mx-auto">
          <button className="w-full h-14 sm:h-16 rounded-full shadow-[0px_5px_4px_#00000040] bg-[#387647] flex items-center justify-center relative transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0">
            <div className="absolute left-6 flex items-center gap-2 text-white">
              <Search className="w-6 h-6" />
            </div>
            <Link
              to="/telusuri"
              className="[font-family:'Playfair-Medium',Helvetica] font-medium text-white text-lg sm:text-xl tracking-[0] leading-[normal]"
            >
              Telusuri
            </Link>
          </button>
        </div>

        {/* Hero section */}
        <section className="max-w-6xl mx-auto rounded-3xl shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] px-6 sm:px-10 py-10 sm:py-14 text-center text-white animate-fade-up" style={{ "--animation-delay": "0.05s" }}>
          <h2 className="[font-family:'Playfair-Black',Helvetica] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Selamat Datang di
            <br />
            Waroeng Finder!
          </h2>
          <p className="[font-family:'Playfair-Medium',Helvetica] font-medium text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Lagi laper tapi bingung mau makan di mana? Tenang! Biar kami bantu cari
            yang Murah, Enak, dan Dekat! Waroeng Finder ngebantu kamu nemuin tempat
            makan paling worth it. Cukup temukan, datangi, dan nikmati!
          </p>
        </section>

        {/* Waroeng Paling Diminati */}
        <section className="max-w-6xl mx-auto space-y-6">
          <div className="w-full h-14 rounded-full shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] flex items-center justify-center">
            <h3 className="[font-family:'Playfair-Black',Helvetica] font-black text-white text-xl sm:text-2xl">
              Waroeng Paling Diminati
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWarungs.map((warung) => (
              <article
                key={warung.name}
                className="rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] p-4 flex flex-col items-center text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_12px_18px_rgba(0,0,0,0.25)] animate-fade-up"
                style={{ "--animation-delay": "0.1s" }}
              >
                <Link to={warung.link} className="w-full">
                  <DummyImage
                    className="w-full aspect-[1] mb-4"
                    alt={warung.name}
                  />
                </Link>
                <Link
                  to={warung.link}
                  className="[font-family:'Playfair-Black',Helvetica] font-black text-2xl text-center mb-1"
                >
                  {warung.name}
                </Link>
                <p className="[font-family:'Playfair-Black',Helvetica] text-sm text-center">
                  {warung.price}
                </p>
                <p className="[font-family:'Playfair-Black',Helvetica] text-sm text-center mt-1">
                  {warung.location}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Mau makan apa hari ini? */}
        <section className="max-w-6xl mx-auto space-y-6 pb-8">
          <div className="w-full h-14 rounded-full shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] flex items-center justify-center">
            <h3 className="[font-family:'Playfair-Black',Helvetica] font-black text-white text-xl sm:text-2xl">
              Mau makan apa hari ini?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWarungs.map((warung) => (
              <article
                key={`${warung.name}-second`}
                className="rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] p-4 flex flex-col items-center text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_12px_18px_rgba(0,0,0,0.25)] animate-fade-up"
                style={{ "--animation-delay": "0.15s" }}
              >
                <Link to={warung.link} className="w-full">
                  <DummyImage
                    className="w-full aspect-[1] mb-4"
                    alt={warung.name}
                  />
                </Link>
                <Link
                  to={warung.link}
                  className="[font-family:'Playfair-Black',Helvetica] font-black text-2xl text-center mb-1"
                >
                  {warung.name}
                </Link>
                <p className="[font-family:'Playfair-Black',Helvetica] text-sm text-center">
                  {warung.price}
                </p>
                <p className="[font-family:'Playfair-Black',Helvetica] text-sm text-center mt-1">
                  {warung.location}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
