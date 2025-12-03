import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda } from "./pages/Beranda";
import { DetailTelusuri } from "./pages/Telusuri";
import { Favorite } from "./pages/Favorites";
import { DetailWarungMuaz } from "./pages/WarungMuaz";
import { DetailWarungCello } from "./pages/WarungCello";
import { DetailWarungNaswa } from "./pages/WarungNaswa";
import { Ulasan } from "./pages/Ulasan";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/telusuri" element={<DetailTelusuri />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/warung/muaz" element={<DetailWarungMuaz />} />
          <Route path="/warung/cello" element={<DetailWarungCello />} />
          <Route path="/warung/naswa" element={<DetailWarungNaswa />} />
          <Route path="/ulasan" element={<Ulasan />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
