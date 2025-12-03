import React from "react";
import { DummyImage } from "./DummyImage";

export const RestaurantCategoriesSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Ayam Geprek",
      price: "Rp 10.000",
      left: "368px",
    },
    {
      id: 2,
      name: "Ayam Penyet",
      price: "Rp 10.000",
      left: "605px",
    },
    {
      id: 3,
      name: "Ayam S. Ijo",
      price: "Rp 10.000",
      left: "842px",
    },
    {
      id: 4,
      name: "Ayam Gulai",
      price: "Rp 10.000",
      left: "1079px",
    },
  ];

  return (
    <section className="absolute top-[1209px] left-[calc(50.00%_-_662px)] w-[1332px] h-[466px]">
      <div className="absolute top-0 left-[calc(50.00%_-_666px)] w-[1324px] h-[466px] rounded-[25px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <DummyImage
        className="absolute top-[49px] left-[50px] w-[243px] h-[243px] aspect-[1]"
        alt="Warung Naswa restaurant logo"
      />

      <h2 className="absolute top-[308px] left-[calc(50.00%_-_635px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
        Warung Naswa
      </h2>

      <p className="absolute top-[367px] left-[calc(50.00%_-_616px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
        Mulai dari Rp10.000
      </p>

      <address className="absolute top-[405px] left-[calc(50.00%_-_616px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal] not-italic">
        📍Jalan Pembangunan
      </address>

      {menuItems.map((item) => (
        <article
          key={item.id}
          className="absolute top-[17px] w-[221px] h-[306px]"
          style={{ left: item.left }}
        >
          <div className="absolute top-0 left-0 w-[217px] h-[306px] rounded-[20.63px] bg-[linear-gradient(180deg,rgba(255,232,135,1)_0%,rgba(56,118,71,1)_100%)]" />

          <DummyImage
            className="absolute top-[23px] left-[26px] w-[167px] h-[167px] aspect-[1]"
            alt={item.name}
          />

          <h3 className="absolute top-[207px] left-[calc(50.00%_-_85px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-[30.3px] tracking-[0] leading-[normal] whitespace-nowrap">
            {item.name}
          </h3>

          <p className="absolute top-[243px] left-[calc(50.00%_-_85px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
            {item.price}
          </p>
        </article>
      ))}

      <button
        className="absolute top-[369px] left-[calc(50.00%_-_299px)] w-[929px] h-12 rounded-[50px] bg-[linear-gradient(360deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] bg-variable-collection-hijau"
        aria-label="View all 12 menu items"
      >
        <span className="absolute top-[10px] left-[calc(50.00%_-_82px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          Lihat Semua (12)
        </span>
      </button>
    </section>
  );
};
