import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowBack } from "./ArrowBack";
import { DummyImage } from "./DummyImage";

const favoriteWarungs = [
  {
    id: 1,
    name: "Warung Muaz",
    price: "Mulai dari Rp10.000",
    location: "📍Jalan Dr. Mansyur",
    link: "/warung/muaz",
  },
  {
    id: 2,
    name: "Warung Cello",
    price: "Mulai dari Rp10.000",
    location: "📍Jalan Jamin Ginting",
    link: "/warung/cello",
  },
  {
    id: 3,
    name: "Warung Naswa",
    price: "Mulai dari Rp10.000",
    location: "📍Jalan Pembangunan",
    link: "/warung/naswa",
  },
];

export const Favorite = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-4 sm:px-8 shadow-[0px_5px_4px_#00000040] bg-[#387647]">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ffcf03] text-white transition-transform duration-150 hover:-translate-y-0.5 active:scale-95"
          aria-label="Kembali"
        >
          <ArrowBack className="w-8 h-8" />
        </button>

        <h1 className="[font-family:'Playfair-Medium',Helvetica] font-medium text-white text-2xl sm:text-3xl tracking-[0] leading-[normal]">
          Favorite
        </h1>

        <div className="w-12" />
      </header>

      {/* Content */}
      <main className="flex-1 px-4 sm:px-8 lg:px-16 py-8 sm:py-10 space-y-8">
        <section className="max-w-6xl mx-auto space-y-6 animate-fade-up" style={{ "--animation-delay": "0.05s" }}>
          <div className="w-full h-14 rounded-full shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] flex items-center justify-center">
            <h2 className="[font-family:'Playfair-Black',Helvetica] font-black text-white text-xl sm:text-2xl">
              Waroeng Favorite Kamu
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteWarungs.map((warung) => (
              <article
                key={warung.id}
                className="rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] p-4 flex flex-col items-center text-white"
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

                <p className="[font-family:'Playfair-Black',Helvetica] font-black text-sm text-center">
                  {warung.price}
                </p>
                <p className="[font-family:'Playfair-Black',Helvetica] font-black text-sm text-center mt-1">
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
