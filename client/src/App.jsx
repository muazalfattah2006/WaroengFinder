import React from "react";
import "./index.css";
import bg from "./assets/img/bg.jpg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Beranda } from "./pages/Beranda";
import { DetailTelusuri } from "./pages/Telusuri";
import { Favorite } from "./pages/Favorites";
import { DetailWarungMuaz } from "./pages/WarungMuaz";
import { DetailWarungCello } from "./pages/WarungCello";
import { DetailWarungNaswa } from "./pages/WarungNaswa";
import { Ulasan } from "./pages/Ulasan";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  const isAuthenticated = !!localStorage.getItem("authUser");

  return (
    <BrowserRouter>
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Root tanpa path akan diarahkan ke halaman login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route
            path="/beranda"
            element={
              isAuthenticated ? <Beranda /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/telusuri"
            element={
              isAuthenticated ? (
                <DetailTelusuri />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/favorite"
            element={
              isAuthenticated ? <Favorite /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/warung/muaz"
            element={
              isAuthenticated ? (
                <DetailWarungMuaz />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/warung/cello"
            element={
              isAuthenticated ? (
                <DetailWarungCello />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/warung/naswa"
            element={
              isAuthenticated ? (
                <DetailWarungNaswa />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/ulasan"
            element={
              isAuthenticated ? <Ulasan /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
