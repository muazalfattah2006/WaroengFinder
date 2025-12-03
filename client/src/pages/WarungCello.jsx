import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "./ArrowBack";
import { Bookmark } from "./Bookmark";
import { BookmarkFilled } from "./BookmarkFilled";
import { ChevronBackward } from "./ChevronBackward";
import { DummyImage } from "./DummyImage";

const menuItems = [
  { id: 1, name: "Ayam Penyet", price: "Rp 10.000" },
  { id: 2, name: "Ayam S. Ijo", price: "Rp 10.000" },
  { id: 3, name: "Ayam Gulai", price: "Rp 10.000" },
  { id: 4, name: "Ayam Geprek", price: "Rp 10.000" },
  { id: 5, name: "Mie Goreng", price: "Rp 10.000" },
  { id: 6, name: "Mie ayam", price: "Rp 10.000" },
  { id: 7, name: "Mie Gomak", price: "Rp 10.000" },
  { id: 8, name: "Kwetiau", price: "Rp 10.000" },
  { id: 9, name: "Es Teh Manis", price: "Rp 6.000" },
  { id: 10, name: "Lemon Tea", price: "Rp 8.000" },
  { id: 11, name: "Cofffee", price: "Rp 7.000" },
  { id: 12, name: "Air Mineral", price: "Rp 5.000" },
];

export const DetailWarungCello = () => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleGoToUlasan = () => {
    navigate("/ulasan");
  };

  return (
    <div className="min-h-screen bg-[#387647] flex flex-col">
      <main className="flex-1 w-full max-w-5xl mx-auto bg-white flex flex-col shadow-[0px_5px_15px_rgba(0,0,0,0.2)]">
        {/* Hero with back button */}
        <div className="relative w-full">
          <DummyImage
            className="w-full aspect-[3/1] sm:aspect-[16/6]"
            style={{ borderRadius: 0 }}
            alt="Warung Cello restaurant exterior"
          />

          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Kembali"
            className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ffcf03] flex items-center justify-center shadow"
          >
            <ArrowBack className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Info section */}
        <section className="px-4 sm:px-8 py-5 sm:py-6 border-b border-[#d9d9d9]">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <h1 className="[font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-3xl sm:text-4xl leading-tight">
                Warung Cello
              </h1>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleGoToUlasan}
                  className="flex items-center gap-1 [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-xl sm:text-2xl"
                  aria-label="Lihat ulasan"
                >
                  <span>⭐⭐⭐⭐⭐</span>
                </button>

                <button
                  type="button"
                  onClick={handleGoToUlasan}
                  aria-label="Ke halaman ulasan"
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#387647] rotate-180"
                >
                  <ChevronBackward className="w-full h-full" />
                </button>
              </div>
            </div>

            <address className="not-italic [font-family:'Playfair-Black',Helvetica] font-black text-[#454545] text-base sm:text-lg">
              📍 Jalan Jamin Ginting
            </address>

            <div className="flex items-center justify-between gap-4">
              <time className="[font-family:'Playfair-Black',Helvetica] font-black text-[#454545] text-base sm:text-lg">
                🕑 9.00 - 21.00
              </time>

              <button
                type="button"
                onClick={() => setIsFavorite((prev) => !prev)}
                aria-label="Tambah ke favorite"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#387647]"
              >
                {isFavorite ? (
                  <BookmarkFilled className="w-full h-full" color="#387647" />
                ) : (
                  <Bookmark className="w-full h-full" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Menu section */}
        <section className="px-4 sm:px-8 pt-4 pb-8 sm:pt-6 sm:pb-10">
          <h2 className="[font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-2xl sm:text-3xl mb-4">
            Menu (12)
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {menuItems.map((item) => (
              <article
                key={item.id}
                className="rounded-[20px] sm:rounded-[25px] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] shadow-[0px_7px_4px_#00000040] p-3 sm:p-4 flex flex-col items-center text-center text-white"
              >
                <DummyImage
                  className="w-full aspect-[1] mb-3 sm:mb-4"
                  alt={item.name}
                />
                <h3 className="[font-family:'Playfair-Black',Helvetica] font-black text-sm sm:text-base leading-tight mb-1">
                  {item.name}
                </h3>
                <p className="[font-family:'Playfair-Black',Helvetica] font-black text-xs sm:text-sm">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
