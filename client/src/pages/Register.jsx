import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = ({ onLogin }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Semua field harus diisi.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak sama.");
      return;
    }

    const user = {
      fullName: fullName.trim(),
      email: email.trim(),
      password,
    };

    if (onLogin) {
      onLogin(user);
    }

    navigate("/beranda", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/90 shadow-[0px_7px_4px_#00000040] px-6 py-8">
        <h1 className="text-2xl font-bold text-[#387647] text-center mb-6 [font-family:'Playfair-Black',Helvetica]">
          Daftar Waroeng Finder
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#387647] mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-11 rounded-xl border border-[#68dc84] px-3 outline-none focus:ring-2 focus:ring-[#68dc84] [font-family:'Playfair-Black',Helvetica] text-sm"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#387647] mb-1">
              Gmail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 rounded-xl border border-[#68dc84] px-3 outline-none focus:ring-2 focus:ring-[#68dc84] [font-family:'Playfair-Black',Helvetica] text-sm"
              placeholder="contoh@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#387647] mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 rounded-xl border border-[#68dc84] px-3 outline-none focus:ring-2 focus:ring-[#68dc84] [font-family:'Playfair-Black',Helvetica] text-sm"
              placeholder="Masukkan password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#387647] mb-1">
              Konfirmasi Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-11 rounded-xl border border-[#68dc84] px-3 outline-none focus:ring-2 focus:ring-[#68dc84] [font-family:'Playfair-Black',Helvetica] text-sm"
              placeholder="Ulangi password"
            />
          </div>

          {error && (
            <p className="text-xs text-red-600 [font-family:'Playfair-Black',Helvetica]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full h-11 rounded-full bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] text-white font-bold shadow-[0px_5px_4px_#00000040] [font-family:'Playfair-Black',Helvetica] text-sm tracking-wide transition-transform duration-150 hover:-translate-y-0.5 active:scale-95"
          >
            Daftar
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-[#387647] [font-family:'Playfair-Black',Helvetica]">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-[#68dc84] hover:underline font-bold"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};
