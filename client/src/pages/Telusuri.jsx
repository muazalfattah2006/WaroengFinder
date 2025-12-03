import React, { useState } from "react";
import { TelusuriNavbar } from "../components/shared/TelusuriNavbar";
import { FeaturedRestaurantsSection } from "../components/shared/FeaturedRestaurantSection";
import { RestaurantCategoriesSection } from "../components/shared/RestaurantCategoriesSection";
import { RestaurantListSection } from "../components/shared/RestaurantListSection";

export const DetailTelusuri = () => {
  const [activeFilter, setActiveFilter] = useState("Terkait");
  const [searchQuery, setSearchQuery] = useState("");

  const filterTabs = [
    { id: "terkait", label: "Terkait" },
    { id: "terdekat", label: "Terdekat" },
    { id: "terlaris", label: "Terlaris" },
    { id: "ulasan", label: "Ulasan" },
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const showMuaz =
    !normalizedQuery ||
    "warung muaz muaz".toLowerCase().includes(normalizedQuery);

  const showCello =
    !normalizedQuery ||
    "warung cello cello".toLowerCase().includes(normalizedQuery);

  const showNaswa =
    !normalizedQuery ||
    "warung naswa naswa".toLowerCase().includes(normalizedQuery);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Telusuri */}
      <TelusuriNavbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

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
        {showMuaz && (
          <section aria-label="Featured restaurants" className="max-w-6xl mx-auto">
            <FeaturedRestaurantsSection />
          </section>
        )}

        {showCello && (
          <section aria-label="Restaurant list" className="max-w-6xl mx-auto">
            <RestaurantListSection />
          </section>
        )}

        {showNaswa && (
          <section aria-label="Restaurant categories" className="max-w-6xl mx-auto">
            <RestaurantCategoriesSection />
          </section>
        )}
      </main>
    </div>
  );
};
