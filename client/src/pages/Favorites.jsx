import React from "react";
import { ArrowBack } from "./ArrowBack";
import warung11 from "./warung1-1.png";
import warung12 from "./warung1-2.png";
import warung13 from "./warung1-3.png";

export const Favorite = () => {
  const favoriteWarungs = [
    {
      id: 1,
      name: "Warung Muaz",
      image: warung11,
      price: "Mulai dari Rp10.000",
      location: "📍Jalan Dr. Mansyur",
      topPosition: "119px",
      imageTop: "168px",
      nameTop: "188px",
      priceTop: "310px",
      locationTop: "405px",
      nameLeft: "calc(50.00%_-_175px)",
      priceLeft: "calc(50.00%_-_175px)",
      locationLeft: "calc(50.00%_-_193px)",
    },
    {
      id: 2,
      name: "Warung Cello",
      image: warung12,
      price: "Mulai dari Rp10.000",
      location: "📍Jalan Jamin Ginting",
      topPosition: "614px",
      imageTop: "663px",
      nameTop: "683px",
      priceTop: "805px",
      locationTop: "900px",
      nameLeft: "calc(50.00%_-_168px)",
      priceLeft: "calc(50.00%_-_168px)",
      locationLeft: "calc(50.00%_-_186px)",
    },
    {
      id: 3,
      name: "Warung Naswa",
      image: warung13,
      price: "Mulai dari Rp10.000",
      location: "📍Jalan Pembangunan",
      topPosition: "1109px",
      imageTop: "1158px",
      nameTop: "1178px",
      priceTop: "1300px",
      locationTop: "1395px",
      nameLeft: "calc(50.00%_-_175px)",
      priceLeft: "calc(50.00%_-_175px)",
      locationLeft: "calc(50.00%_-_193px)",
    },
  ];

  return (
    <div className="relative w-[1366px] h-[1727px] bg-white">
      <header className="absolute top-[27px] left-[calc(50.00%_-_577px)] w-[1243px] h-[63px] shadow-[0px_5px_4px_#00000040]">
        <div className="absolute top-0 left-[calc(50.00%_-_622px)] w-[1241px] h-[63px] bg-[#387647] rounded-[50px]" />

        <h1 className="absolute top-[9px] left-[calc(50.00%_-_66px)] [font-family:'Playfair-Medium',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
          Favorite
        </h1>
      </header>

      <ArrowBack className="!absolute !top-[25px] !left-[19px] !w-[68px] !h-[68px]" />

      {favoriteWarungs.map((warung, index) => (
        <article
          key={warung.id}
          className="absolute"
          style={{ top: warung.topPosition, left: "calc(50.00%_-_660px)" }}
        >
          <div className="w-[1324px] h-[466px] rounded-[25px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

          <img
            className="absolute w-[366px] h-[366px] aspect-[1]"
            style={{
              top: `calc(${warung.imageTop} - ${warung.topPosition})`,
              left: index === 1 ? "80px" : "73px",
            }}
            alt={warung.name}
            src={warung.image}
          />

          <h2
            className="absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-8xl tracking-[0] leading-[normal] whitespace-nowrap"
            style={{
              top: `calc(${warung.nameTop} - ${warung.topPosition})`,
              left: warung.nameLeft,
            }}
          >
            {warung.name}
          </h2>

          <p
            className="absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap"
            style={{
              top: `calc(${warung.priceTop} - ${warung.topPosition})`,
              left: warung.priceLeft,
            }}
          >
            {warung.price}
          </p>

          <address
            className="absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap not-italic"
            style={{
              top: `calc(${warung.locationTop} - ${warung.topPosition})`,
              left: warung.locationLeft,
            }}
          >
            {warung.location}
          </address>
        </article>
      ))}

      <div className="absolute top-[119px] left-[calc(50.00%_-_660px)] w-[1324px] h-[466px] rounded-[25px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <img
        className="top-[168px] left-[73px] absolute w-[366px] h-[366px] aspect-[1]"
        alt="Warung Muaz"
        src={warung11}
      />

      <div className="top-[188px] left-[calc(50.00%_-_175px)] absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
        Warung Muaz
      </div>

      <div className="absolute top-[310px] left-[calc(50.00%_-_175px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap">
        Mulai dari Rp10.000
      </div>

      <div className="absolute top-[405px] left-[calc(50.00%_-_193px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap">
        📍Jalan Dr. Mansyur
      </div>

      <div className="absolute top-[614px] left-[calc(50.00%_-_653px)] w-[1324px] h-[466px] rounded-[25px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <img
        className="top-[663px] left-20 absolute w-[366px] h-[366px] aspect-[1]"
        alt="Warung Cello"
        src={warung12}
      />

      <div className="top-[683px] left-[calc(50.00%_-_168px)] absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
        Warung Cello
      </div>

      <div className="top-[805px] left-[calc(50.00%_-_168px)] absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap">
        Mulai dari Rp10.000
      </div>

      <div className="absolute top-[900px] left-[calc(50.00%_-_186px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap">
        📍Jalan Jamin Ginting
      </div>

      <div className="absolute top-[1109px] left-[calc(50.00%_-_660px)] w-[1324px] h-[466px] rounded-[25px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <img
        className="top-[1158px] left-[73px] object-cover absolute w-[366px] h-[366px] aspect-[1]"
        alt="Warung Naswa"
        src={warung13}
      />

      <div className="top-[1178px] left-[calc(50.00%_-_175px)] absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
        Warung Naswa
      </div>

      <div className="top-[1300px] left-[calc(50.00%_-_175px)] absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap">
        Mulai dari Rp10.000
      </div>

      <div className="absolute top-[1395px] left-[calc(50.00%_-_193px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap">
        📍Jalan Pembangunan
      </div>
    </div>
  );
};
