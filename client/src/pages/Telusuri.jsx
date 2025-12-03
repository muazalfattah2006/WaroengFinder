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
  const [searchQuery, setSearchQuery] = useState("");

  const filterTabs = [
    { id: "terkait", label: "Terkait" },
    { id: "terdekat", label: "Terdekat" },
    { id: "terlaris", label: "Terlaris" },
    { id: "ulasan", label: "Ulasan" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-20 flex items-center gap-3 px-4 sm:px-8 shadow-[0px_5px_4px_#00000040] bg-white">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-transparent text-[#387647] transition-transform duration-150 hover:-translate-y-0.5 active:scale-95"
          aria-label="Go back"
        >
          <ArrowBack className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>

        <div className="flex-1">
          <div className="w-full h-11 sm:h-12 rounded-full bg-[#387647] flex items-center gap-3 px-4 shadow-[0px_5px_4px_#00000040]">
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder:text-white/80 [font-family:'Playfair-Black',Helvetica] text-sm sm:text-base"
              placeholder="Telusuri"
            />
          </div>
        </div>
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
                  ? "bg-[#387647] text-white"
                  : "bg-[#68dc84] text-white"
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
