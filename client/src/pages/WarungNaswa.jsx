import React from "react";
import { ArrowBack } from "./ArrowBack";
import { Bookmark } from "./Bookmark";
import { ChevronBackward } from "./ChevronBackward";
import { DummyImage } from "./DummyImage";

export const DetailWarungNaswa = () => {
  const menuItems = [
    {
      id: 1,
      name: "Ayam Geprek",
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
      textAlign: "",
    },
    {
      id: 2,
      name: "Ayam Penyet",
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
      textAlign: "text-center",
    },
    {
      id: 3,
      name: "Ayam S. Ijo",
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
      textAlign: "",
    },
    {
      id: 4,
      name: "Ayam Gulai",
      price: "Rp 10.000",
      imageAlt: "Menu item image",
      top: "886px",
      left: "1037px",
      imageTop: "33px",
      imageLeft: "38px",
      nameLeft: "calc(50.00% + 392px)",
      priceLeft: "calc(50.00% + 392px)",
      nameTop: "301px",
      priceTop: "354px",
      textAlign: "text-center",
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
      textAlign: "",
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
      textAlign: "",
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
      textAlign: "",
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
      textAlign: "",
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
      textAlign: "",
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
      textAlign: "",
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
      textAlign: "",
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
      textAlign: "",
    },
  ];

  return (
    <div className="relative w-[1366px] h-[2299px] bg-white">
      <DummyImage
        className="absolute top-0 left-0 w-[1366px] h-[428px] aspect-[3.19]"
        alt="Warung"
      />

      <div className="absolute top-[462px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
        Warung Naswa
      </div>

      <div className="absolute top-[488px] left-[calc(50.00%_+_259px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
        ⭐⭐⭐⭐⭐
      </div>

      <div className="absolute top-[611px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#454545] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        📍 Jalan Pembangunan
      </div>

      <div className="absolute top-[679px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#454545] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        🕑 9.00 - 21.00
      </div>

      <div className="absolute top-[754px] left-0 w-[1366px] h-3.5 bg-[#d9d9d9]" />

      <div className="absolute top-[795px] left-[calc(50.00%_-_630px)] [font-family:'Playfair-Black',Helvetica] font-black text-[#387647] text-5xl tracking-[0] leading-[normal]">
        Menu (12)
      </div>

      {menuItems.map((item, index) => {
        const isFirstRow = index < 4;
        const isSecondRow = index >= 4 && index < 8;
        const isDrink = index >= 8;

        const cardTop = isFirstRow
          ? "886px"
          : isSecondRow
          ? "1364px"
          : "1834px";
        const cardLeft = isFirstRow
          ? index === 0
            ? "17px"
            : index === 1
            ? "357px"
            : index === 2
            ? "697px"
            : "1037px"
          : isSecondRow
          ? index === 4
            ? "15px"
            : index === 5
            ? "355px"
            : index === 6
            ? "695px"
            : "1035px"
          : index === 8
          ? "17px"
          : index === 9
          ? "357px"
          : index === 10
          ? "697px"
          : "1037px";

        const imageTop = isFirstRow || isSecondRow ? "33px" : "33px";
        const imageLeft = isFirstRow ? "38px" : isSecondRow ? "38px" : "34px";

        const imageWidth = isDrink ? "251px" : "243px";
        const imageHeight = isDrink ? "254px" : "243px";

        const nameTop = "301px";
        const priceTop = "354px";

        const nameLeftCalc = isFirstRow
          ? index === 0
            ? "calc(50.00% - 122px)"
            : index === 1
            ? "calc(50.00% - 290px)"
            : index === 2
            ? "calc(50.00% + 50px)"
            : "calc(50.00% + 392px)"
          : isSecondRow
          ? index === 4
            ? "calc(50.00% - 630px)"
            : index === 5
            ? "calc(50.00% - 290px)"
            : index === 6
            ? "calc(50.00% + 50px)"
            : "calc(50.00% + 390px)"
          : index === 8
          ? "calc(50.00% - 628px)"
          : index === 9
          ? "calc(50.00% - 288px)"
          : index === 10
          ? "calc(50.00% + 52px)"
          : "calc(50.00% + 392px)";

        const priceLeftCalc = isFirstRow
          ? index === 0
            ? "calc(50.00% - 122px)"
            : index === 1
            ? "calc(50.00% - 288px)"
            : index === 2
            ? "calc(50.00% + 52px)"
            : "calc(50.00% + 392px)"
          : isSecondRow
          ? index === 4
            ? "calc(50.00% - 630px)"
            : index === 5
            ? "calc(50.00% - 290px)"
            : index === 6
            ? "calc(50.00% + 50px)"
            : "calc(50.00% + 390px)"
          : index === 8
          ? "calc(50.00% - 628px)"
          : index === 9
          ? "calc(50.00% - 288px)"
          : index === 10
          ? "calc(50.00% + 52px)"
          : "calc(50.00% + 392px)";

        const textAlignClass = index === 1 || index === 3 ? "text-center" : "";

        return (
          <React.Fragment key={item.id}>
            <div
              className="absolute w-[316px] h-[445px] rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]"
              style={{ top: cardTop, left: cardLeft }}
            />
            <DummyImage
              className="absolute aspect-[1]"
              style={{
                top: `calc(${cardTop} + ${imageTop})`,
                left: `calc(${cardLeft} + ${imageLeft})`,
                width: imageWidth,
                height: imageHeight,
              }}
              alt={item.name}
            />
            <div
              className={`absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[44px] tracking-[0] leading-[normal] ${textAlignClass}`}
              style={{
                top: `calc(${cardTop} + ${nameTop})`,
                left: nameLeftCalc,
              }}
            >
              {item.name}
            </div>
            <div
              className="absolute [font-family:'Playfair-Black',Helvetica] font-black text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap"
              style={{
                top: `calc(${cardTop} + ${priceTop})`,
                left: priceLeftCalc,
              }}
            >
              {item.price}
            </div>
          </React.Fragment>
        );
      })}

      <Bookmark className="!absolute !top-[659px] !left-[1265px] !w-[62px] !h-[62px]" />
      <ChevronBackward className="!absolute !top-[480px] !left-[1252px] !w-[92px] !h-[92px]" />
      <div className="absolute top-[26px] left-[31px] w-[73px] h-[73px] flex bg-[#ffcf03] rounded-[36.5px]">
        <ArrowBack className="!mt-0.5 !w-[68px] !h-[68px] !ml-[3px]" />
      </div>
    </div>
  );
};
