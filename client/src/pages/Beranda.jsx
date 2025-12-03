import React from "react";
import { BookmarkFilled } from "./BookmarkFilled";
import { Search } from "./Search";
import image from "./image.png";
import warung112 from "./warung1-1-2.png";
import warung113 from "./warung1-1-3.png";
import warung114 from "./warung1-1-4.png";
import warung115 from "./warung1-1-5.png";
import warung11 from "./warung1-1.png";

export const Beranda = () => {
  return (
    <div className="relative w-[1366px] h-[2162px] bg-white">
      <div className="absolute top-0 left-0 w-[1366px] h-[100px] shadow-[0px_5px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)]" />

      <div className="absolute top-[167px] left-[calc(50.00%_-_662px)] w-[1324px] h-[63px] bg-[#387647] rounded-[50px] shadow-[0px_5px_4px_#00000040]" />

      <div className="absolute top-[294px] left-[calc(50.00%_-_662px)] w-[1324px] h-[519px] rounded-[25px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <div className="absolute top-[21px] left-[calc(50.00%_-_164px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
        Waroeng Finder
      </div>

      <div className="absolute top-[389px] left-[calc(50.00%_-_367px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-8xl text-center tracking-[0] leading-[88px]">
        Selamat Datang di
        <br />
        Waroeng Finder!
      </div>

      <p className="absolute top-[597px] left-[calc(50.00%_-_476px)] w-[952px] [font-family:'Playfair-Medium',Helvetica] font-medium text-white text-[28px] text-center tracking-[0] leading-[normal]">
        Lagi laper tapi bingung mau makan di mana? Tenang! Biar kami bantu cari
        yang Murah, Enak, dan Dekat! Waroeng Finder ngebantu kamu nemuin tempat
        makan paling worth it. Cukup temukan, datangi, dan nikmati!
      </p>

      <div className="absolute top-[177px] left-[calc(50.00%_-_64px)] [font-family:'Playfair-Medium',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
        Telusuri
      </div>

      <div className="absolute top-[885px] left-[calc(50.00%_-_661px)] w-[1324px] h-[63px] rounded-[50px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] bg-variable-collection-hijau" />

      <div className="absolute top-[887px] left-[calc(50.00%_-_257px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
        Waroeng Paling Diminati
      </div>

      <div className="absolute top-[1006px] left-[86px] w-[352px] h-[445px] rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <div className="absolute top-[1006px] left-[calc(50.00%_-_176px)] w-[352px] h-[445px] rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <div className="absolute top-[1006px] left-[928px] w-[352px] h-[445px] rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <div className="absolute top-[1523px] left-[calc(50.00%_-_661px)] w-[1324px] h-[63px] rounded-[50px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] bg-variable-collection-hijau" />

      <p className="absolute top-[1526px] left-[calc(50.00%_-_247px)] [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
        Mau makan apa hari ini?
      </p>

      <div className="top-[1036px] left-[122px] w-72 absolute h-[385px] flex flex-col">
        <img
          className="ml-[19px] w-[243px] h-[243px] aspect-[1] object-cover"
          alt="Warung"
          src={warung11}
        />

        <div className="w-[282px] -ml-1.5 h-[58px] self-center mt-4 [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
          Warung Muaz
        </div>

        <div className="ml-[-41px] h-[29px] w-[209px] self-center mt-px [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          Mulai dari Rp10.000
        </div>

        <div className="ml-[-54px] h-[29px] w-52 self-center mt-[9px] [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          📍Jalan Dr. Mansyur
        </div>
      </div>

      <div className="top-[1037px] left-[542px] w-[284px] absolute h-[385px] flex flex-col">
        <img
          className="ml-[19px] w-[243px] h-[243px] aspect-[1] object-cover"
          alt="Warung"
          src={image}
        />

        <div className="w-[278px] -ml-1.5 h-[58px] self-center mt-4 [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
          Warung Cello
        </div>

        <div className="ml-[-37px] mt-px h-[29px] w-[209px] self-center [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          Mulai dari Rp10.000
        </div>

        <div className="ml-[-39px] w-[223px] h-[29px] self-center mt-[9px] [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          📍Jalan Jamin Ginting
        </div>
      </div>

      <div className="top-[1037px] left-[954px] w-[307px] absolute h-[385px] flex flex-col">
        <img
          className="ml-[27px] w-[243px] h-[243px] aspect-[1] object-cover"
          alt="Warung"
          src={warung112}
        />

        <div className="w-[301px] text-center -ml-1.5 h-[58px] self-center mt-4 [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
          Warung Naswa
        </div>

        <div className="-ml-11 mt-0.5 h-[29px] w-[209px] self-center [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          Mulai dari Rp10.000
        </div>

        <div className="ml-[-41px] h-[29px] w-[226px] self-center mt-2 [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          📍Jalan Pembangunan
        </div>
      </div>

      <div className="absolute top-[1641px] left-[87px] w-[352px] h-[445px] rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <div className="absolute top-[1641px] left-[calc(50.00%_-_175px)] w-[352px] h-[445px] rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <div className="absolute top-[1641px] left-[929px] w-[352px] h-[445px] rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)]" />

      <div className="top-[1671px] left-[123px] w-72 absolute h-[385px] flex flex-col">
        <img
          className="ml-[19px] w-[243px] h-[243px] aspect-[1] object-cover"
          alt="Warung"
          src={warung113}
        />

        <div className="w-[282px] -ml-1.5 h-[58px] self-center mt-4 [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
          Warung Muaz
        </div>

        <div className="ml-[-41px] h-[29px] w-[209px] self-center mt-px [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          Mulai dari Rp10.000
        </div>

        <div className="ml-[-54px] h-[29px] w-52 self-center mt-[9px] [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          📍Jalan Dr. Mansyur
        </div>
      </div>

      <div className="top-[1672px] left-[543px] w-[284px] absolute h-[385px] flex flex-col">
        <img
          className="ml-[19px] w-[243px] h-[243px] aspect-[1] object-cover"
          alt="Warung"
          src={warung114}
        />

        <div className="w-[278px] -ml-1.5 h-[58px] self-center mt-4 [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
          Warung Cello
        </div>

        <div className="ml-[-37px] mt-px h-[29px] w-[209px] self-center [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          Mulai dari Rp10.000
        </div>

        <div className="ml-[-33px] w-[227px] h-[29px] self-center mt-[9px] [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          📍Jalan Jamin Ganting
        </div>
      </div>

      <div className="top-[1672px] left-[954px] w-[307px] absolute h-[385px] flex flex-col">
        <img
          className="ml-7 w-[243px] h-[243px] aspect-[1] object-cover"
          alt="Warung"
          src={warung115}
        />

        <div className="w-[301px] text-center -ml-1.5 h-[58px] self-center mt-4 [font-family:'Playfair-Black',Helvetica] font-black text-white text-5xl tracking-[0] leading-[normal]">
          Warung Naswa
        </div>

        <div className="ml-[-42px] mt-px h-[29px] w-[209px] self-center [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          Mulai dari Rp10.000
        </div>

        <div className="ml-[-39px] h-[29px] w-[226px] self-center mt-[9px] [font-family:'Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]">
          📍Jalan Pembangunan
        </div>
      </div>

      <Search className="!absolute !top-[180px] !left-11 !w-[37px] !h-[37px]" />
      <BookmarkFilled
        className="!absolute !top-[13px] !left-[1279px] !w-[66px] !h-[66px]"
        color="#387647"
      />
    </div>
  );
};
