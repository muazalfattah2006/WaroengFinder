import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "./ArrowBack";
import { FeaturedRestaurantsSection } from "./FeaturedRestaurantSection";
import { RestaurantCategoriesSection } from "./RestaurantCategoriesSection";
import { RestaurantListSection } from "./RestaurantListSection";
import { Search } from "./Search";

export const DetailTelusuri = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Terkait");

  const filterTabs = [
    { id: "terkait", label: "Terkait" },
    { id: "terdekat", label: "Terdekat" },
    { id: "terlaris", label: "Terlaris" },
    { id: "ulasan", label: "Ulasan" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-4 sm:px-8 shadow-[0px_5px_4px_#00000040] bg-[#387647]">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ffcf03] text-white"
          aria-label="Go back"
        >
          <ArrowBack className="w-8 h-8" />
        </button>

        <h1 className="[font-family:'Playfair-Medium',Helvetica] font-medium text-white text-2xl sm:text-3xl tracking-[0] leading-[normal]">
          Telusuri
        </h1>

        <Search className="w-7 h-7 text-white" aria-label="Search restaurants" />
      </header>

      {/* Filter tabs */}
      <nav
        className="px-4 sm:px-8 lg:px-16 py-4 bg-white"
        role="navigation"
        aria-label="Filter tabs"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.label)}
              className={`h-11 rounded-full shadow-[0px_5px_4px_#00000040] [font-family:'Playfair-Medium',Helvetica] text-base sm:text-lg tracking-[0] leading-[normal] whitespace-nowrap transition-colors transition-transform duration-150 hover:-translate-y-0.5 ${
                activeFilter === tab.label
                  ? "bg-[#68dc84] text-white"
                  : "bg-white text-[#387647] border border-[#68dc84]"
              }`}
              aria-pressed={activeFilter === tab.label}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content sections */}
      <main className="flex-1 px-4 sm:px-8 lg:px-16 pb-10 space-y-10">
        <section aria-label="Featured restaurants" className="max-w-6xl mx-auto">
          <FeaturedRestaurantsSection />
        </section>

        <section aria-label="Restaurant list" className="max-w-6xl mx-auto">
          <RestaurantListSection />
        </section>

        <section aria-label="Restaurant categories" className="max-w-6xl mx-auto">
          <RestaurantCategoriesSection />
        </section>
      </main>
    </div>
  );
};
