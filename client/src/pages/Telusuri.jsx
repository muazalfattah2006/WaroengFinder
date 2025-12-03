import React, { useState } from "react";
import { ArrowBack } from "./ArrowBack";
import { FeaturedRestaurantsSection } from "./FeaturedRestaurantsSection";
import { RestaurantCategoriesSection } from "./RestaurantCategoriesSection";
import { RestaurantListSection } from "./RestaurantListSection";
import { Search } from "./Search";

export const DetailTelusuri = () => {
  const [activeFilter, setActiveFilter] = useState("Terkait");

  const filterTabs = [
    { id: "terkait", label: "Terkait", left: "26px" },
    { id: "terdekat", label: "Terdekat", left: "365px" },
    { id: "terlaris", label: "Terlaris", left: "704px" },
    { id: "ulasan", label: "Ulasan", left: "1043px" },
  ];

  return (
    <div className="relative w-[1366px] h-[1727px] bg-white">
      <header className="absolute top-[30px] left-[calc(50.00%_-_579px)] w-[1243px] h-[63px] shadow-[0px_5px_4px_#00000040]">
        <div className="absolute top-0 left-[calc(50.00%_-_622px)] w-[1241px] h-[63px] bg-[#387647] rounded-[50px]" />

        <h1 className="absolute top-[9px] left-[calc(50.00%_-_66px)] [font-family:'Playfair-Medium',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
          Telusuri
        </h1>

        <Search
          className="!absolute !top-[13px] !left-[23px] !w-[37px] !h-[37px]"
          aria-label="Search restaurants"
        />
      </header>

      <ArrowBack
        className="!absolute !top-7 !left-[17px] !w-[68px] !h-[68px]"
        aria-label="Go back"
      />

      <nav
        className="absolute top-[127px] left-0 w-full"
        role="navigation"
        aria-label="Filter tabs"
      >
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.label)}
            className="absolute w-[299px] h-[43px] bg-[#68dc84] rounded-[50px] shadow-[0px_5px_4px_#00000040] cursor-pointer transition-all hover:bg-[#5cc975] active:shadow-[0px_3px_2px_#00000040]"
            style={{ left: tab.left }}
            aria-pressed={activeFilter === tab.label}
            aria-label={`Filter by ${tab.label}`}
          >
            <span className="[font-family:'Playfair-Medium',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

      <main className="relative">
        <section aria-label="Featured restaurants">
          <FeaturedRestaurantsSection />
        </section>

        <section aria-label="Restaurant list">
          <RestaurantListSection />
        </section>

        <section aria-label="Restaurant categories">
          <RestaurantCategoriesSection />
        </section>
      </main>
    </div>
  );
};
