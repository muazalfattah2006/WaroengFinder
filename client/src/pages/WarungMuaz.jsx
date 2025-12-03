import React from "react";
import { ArrowBack } from "./ArrowBack";
import { Bookmark } from "./Bookmark";
import { ChevronBackward } from "./ChevronBackward";
import warung11 from "./warung1-1.png";
import warung13 from "./warung1-3.png";
import warung14 from "./warung1-4.png";
import warung15 from "./warung1-5.png";
import warung16 from "./warung1-6.png";
import warung17 from "./warung1-7.png";
import warung18 from "./warung1-8.png";
import warung19 from "./warung1-9.png";
import warung110 from "./warung1-10.png";
import warung111 from "./warung1-11.png";
import warung112 from "./warung1-12.png";
import warung113 from "./warung1-13.png";
import warung23 from "./warung2-3.png";

const menuItems = [
  {
    id: 1,
    name: "Ayam S. Ijo",
    price: "Rp 10.000",
    image: warung11,
    top: "886px",
    left: "17px",
  },
  {
    id: 2,
    name: "Ayam Gulai",
    price: "Rp 10.000",
    image: warung13,
    top: "886px",
    left: "340px",
  },
  {
    id: 3,
    name: "Ayam Geprek",
    price: "Rp 10.000",
    image: warung14,
    top: "886px",
    left: "680px",
  },
  {
    id: 4,
    name: "Ayam Penyet",
    price: "Rp 10.000",
    image: warung15,
    top: "886px",
    left: "1020px",
  },
  {
    id: 5,
    name: "Mie Goreng",
    price: "Rp 10.000",
    image: warung16,
    top: "1364px",
    left: "15px",
  },
  {
    id: 6,
    name: "Mie ayam",
    price: "Rp 10.000",
    image: warung17,
    top: "1364px",
    left: "355px",
  },
  {
    id: 7,
    name: "Mie Gomak",
    price: "Rp 10.000",
    image: warung18,
    top: "1364px",
    left: "695px",
  },
  {
    id: 8,
    name: "Kwetiau",
    price: "Rp 10.000",
    image: warung19,
    top: "1364px",
    left: "1035px",
  },
  {
    id: 9,
    name: "Es Teh Manis",
    price: "Rp 6.000",
    image: warung110,
    top: "1834px",
    left: "17px",
  },
  {
    id: 10,
    name: "Lemon Tea",
    price: "Rp 8.000",
    image: warung111,
    top: "1834px",
    left: "357px",
  },
  {
    id: 11,
    name: "Cofffee",
    price: "Rp 7.000",
    image: warung112,
    top: "1834px",
    left: "697px",
  },
  {
    id: 12,
    name: "Air Mineral",
    price: "Rp 5.000",
    image: warung113,
    top: "1834px",
    left: "1037px",
  },
];

export const DetailWarungMuaz = () => {
  return (
    <main className="relative w-[1366px] h-[2299px] bg-white">
      <img
        className="absolute top-0 left-0 w-[1366px] h-[428px] aspect-[3.19] object-cover"
        alt="Warung Muaz restaurant exterior"
        src={warung23}
      />

      <button
        className="absolute top-[27px] left-[34px] w-[73px] h-[73px] flex bg-[#ffcf03] rounded-[36.5px]"
        aria-label="Go back to previous page"
      >
        <ArrowBack className="!mt-0.5 !w-[68px] !h-[68px] !ml-[3px]" />
      </button>

      <h1 className="absolute top-[462px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
        Warung Muaz
      </h1>

      <div
        className="absolute top-[488px] left-[calc(50.00%_+_259px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-[64px] tracking-[0] leading-[normal] whitespace-nowrap"
        role="img"
        aria-label="5 star rating"
      >
        ⭐⭐⭐⭐⭐
      </div>

      <address className="absolute top-[611px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#454545] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap not-italic">
        📍 Jalan Dr. Mansyur
      </address>

      <time className="absolute top-[679px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#454545] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        🕑 9.00 - 21.00
      </time>

      <div
        className="absolute top-[754px] left-0 w-[1366px] h-3.5 bg-[#d9d9d9]"
        role="separator"
      />

      <h2 className="absolute top-[795px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-5xl tracking-[0] leading-[normal]">
        Menu (12)
      </h2>

      {menuItems.map((item, index) => {
        const isFirstRow = index < 4;
        const isSecondRow = index >= 4 && index < 8;
        const imageTop = isFirstRow ? "33px" : isSecondRow ? "33px" : "33px";
        const imageLeftOffset = isFirstRow
          ? [38, 38, 38, 38][index]
          : isSecondRow
          ? [38, 38, 38, 38][index - 4]
          : [34, 34, 34, 34][index - 8];

        return (
          <article
            key={item.id}
            className="absolute w-[316px] h-[445px]"
            style={{ top: item.top, left: item.left }}
          >
            <div className="absolute top-0 left-0 w-[316px] h-[445px] rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

            <img
              className="absolute object-cover aspect-[1]"
              style={{
                top: imageTop,
                left: `${imageLeftOffset}px`,
                width: index >= 8 ? "251px" : "243px",
                height: index >= 8 ? "254px" : "243px",
              }}
              alt={item.name}
              src={item.image}
            />

            <h3
              className="absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[44px] tracking-[0] leading-[normal]"
              style={{
                top: index >= 8 ? "268px" : "268px",
                left: "38px",
              }}
            >
              {item.name}
            </h3>

            <p
              className="absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap"
              style={{
                top: index >= 8 ? "321px" : "321px",
                left: "38px",
              }}
            >
              {item.price}
            </p>
          </article>
        );
      })}

      <button
        className="!absolute !top-[659px] !left-[1265px] !w-[62px] !h-[62px]"
        aria-label="Bookmark this restaurant"
      >
        <Bookmark className="!w-[62px] !h-[62px]" />
      </button>

      <button
        className="!absolute !top-[480px] !left-[1252px] !w-[92px] !h-[92px]"
        aria-label="View more options"
      >
        <ChevronBackward className="!w-[92px] !h-[92px]" />
      </button>
    </main>
  );
};
