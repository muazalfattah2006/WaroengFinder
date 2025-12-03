import React from "react";
import { ArrowBack } from "./ArrowBack";
import { Bookmark } from "./Bookmark";
import { ChevronBackward } from "./ChevronBackward";
import { DummyImage } from "./DummyImage";

export const DetailWarungCello = () => {
  const menuItems = [
    {
      id: 1,
      name: "Ayam Penyet",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "886px",
      left: "17px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% - 122px)",
      priceLeft: "calc(50.00% - 122px)",
      nameTop: "301px",
      priceTop: "354px",
    },
    {
      id: 2,
      name: "Ayam S. Ijo",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "886px",
      left: "357px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% - 290px)",
      priceLeft: "calc(50.00% - 288px)",
      nameTop: "301px",
      priceTop: "354px",
    },
    {
      id: 3,
      name: "Ayam Gulai",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "886px",
      left: "697px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% + 50px)",
      priceLeft: "calc(50.00% + 52px)",
      nameTop: "301px",
      priceTop: "354px",
    },
    {
      id: 4,
      name: "Ayam Geprek",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "886px",
      left: "1037px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% + 390px)",
      priceLeft: "calc(50.00% + 392px)",
      nameTop: "301px",
      priceTop: "354px",
      textCenter: true,
    },
    {
      id: 5,
      name: "Mie Goreng",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "1364px",
      left: "15px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% - 630px)",
      priceLeft: "calc(50.00% - 630px)",
      nameTop: "301px",
      priceTop: "354px",
    },
    {
      id: 6,
      name: "Mie ayam",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "1364px",
      left: "355px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% - 290px)",
      priceLeft: "calc(50.00% - 290px)",
      nameTop: "301px",
      priceTop: "354px",
    },
    {
      id: 7,
      name: "Mie Gomak",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "1364px",
      left: "695px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% + 50px)",
      priceLeft: "calc(50.00% + 50px)",
      nameTop: "301px",
      priceTop: "354px",
    },
    {
      id: 8,
      name: "Kwetiau",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "1364px",
      left: "1035px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% + 390px)",
      priceLeft: "calc(50.00% + 390px)",
      nameTop: "301px",
      priceTop: "354px",
    },
    {
      id: 9,
      name: "Es Teh Manis",
      price: "Rp 6.000",
      imageAlt: "Menu item image",
      top: "1834px",
      left: "17px",
      imageTop: "33px",
      imageLeft: "34px",
      nameLeft: "calc(50.00% - 628px)",
      priceLeft: "calc(50.00% - 628px)",
      nameTop: "301px",
      priceTop: "354px",
      imageWidth: "251px",
      imageHeight: "254px",
    },
    {
      id: 10,
      name: "Lemon Tea",
      price: "Rp 8.000",
      imageAlt: "Menu item image",
      top: "1834px",
      left: "357px",
      imageTop: "33px",
      imageLeft: "34px",
      nameLeft: "calc(50.00% - 288px)",
      priceLeft: "calc(50.00% - 288px)",
      nameTop: "301px",
      priceTop: "354px",
      imageWidth: "251px",
      imageHeight: "254px",
    },
    {
      id: 11,
      name: "Cofffee",
      price: "Rp 7.000",
      imageAlt: "Menu item image",
      top: "1834px",
      left: "697px",
      imageTop: "33px",
      imageLeft: "34px",
      nameLeft: "calc(50.00% + 52px)",
      priceLeft: "calc(50.00% + 52px)",
      nameTop: "301px",
      priceTop: "354px",
      imageWidth: "251px",
      imageHeight: "254px",
    },
    {
      id: 12,
      name: "Air Mineral",
      price: "Rp 5.000",
      imageAlt: "Menu item image",
      top: "1834px",
      left: "1037px",
      imageTop: "33px",
      imageLeft: "34px",
      nameLeft: "calc(50.00% + 392px)",
      priceLeft: "calc(50.00% + 392px)",
      nameTop: "301px",
      priceTop: "354px",
      imageWidth: "251px",
      imageHeight: "254px",
    },
  ];

  return (
    <main className="relative w-[1366px] h-[2299px] bg-white">
      <DummyImage
        className="absolute top-0 left-0 w-[1366px] h-[428px] aspect-[3.19]"
        alt="Warung Cello restaurant exterior"
      />

      <h1 className="absolute top-[462px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
        Warung Cello
      </h1>

      <div
        className="absolute top-[488px] left-[calc(50.00%_+_259px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-[64px] tracking-[0] leading-[normal] whitespace-nowrap"
        role="img"
        aria-label="5 star rating"
      >
        ⭐⭐⭐⭐⭐
      </div>

      <address className="absolute top-[611px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#454545] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap not-italic">
        📍 Jalan Jamin Ginting
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

      <section aria-label="Menu items">
        {menuItems.map((item) => (
          <article
            key={item.id}
            className="absolute shadow-[0px_7px_4px_#00000040]"
            style={{ top: item.top, left: item.left }}
          >
            <div className="w-[316px] h-[445px] rounded-[30px] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] relative">
              <DummyImage
                className="absolute aspect-[1]"
                style={{
                  top: item.imageTop,
                  left: item.imageLeft,
                  width: item.imageWidth || "243px",
                  height: item.imageHeight || "243px",
                }}
                alt={item.name}
              />

              <h3
                className={`absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[44px] tracking-[0] leading-[normal] ${
                  item.textCenter ? "text-center" : ""
                }`}
                style={{
                  top: item.nameTop,
                  left: item.nameLeft,
                }}
              >
                {item.name}
              </h3>

              <p
                className="absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap"
                style={{
                  top: item.priceTop,
                  left: item.priceLeft,
                }}
              >
                {item.price}
              </p>
            </div>
          </article>
        ))}
      </section>

      <button
        aria-label="Bookmark this restaurant"
        className="!absolute !top-[659px] !left-[1265px] !w-[62px] !h-[62px]"
      >
        <Bookmark className="w-full h-full" />
      </button>

      <button
        aria-label="View more options"
        className="!absolute !top-[480px] !left-[1252px] !w-[92px] !h-[92px]"
      >
        <ChevronBackward className="w-full h-full" />
      </button>

      <div className="absolute top-[22px] left-6 w-[73px] h-[73px] bg-[#ffcf03] rounded-[36.5px]" />

      <button
        aria-label="Go back"
        className="!absolute !top-6 !left-[27px] !w-[68px] !h-[68px]"
      >
        <ArrowBack className="w-full h-full" />
      </button>
    </main>
  );
};
