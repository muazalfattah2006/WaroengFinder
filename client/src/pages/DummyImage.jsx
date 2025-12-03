import React from "react";

export const DummyImage = ({ className = "", alt = "", style, ...props }) => {
  return (
    <div
      className={`bg-[#d9d9d9] rounded-[20px] border border-[#cfcfcf] shadow-sm flex items-center justify-center text-[#777] text-xs ${className}`}
      style={style}
      aria-label={alt}
      role="img"
      {...props}
    >
      Foto
    </div>
  );
};
