import React from "react";

function Icon({ image }) {
  return (
    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-500 text-white">
      <img src={image} alt="Logo" className="w-6 h-6" />
    </div>
  );
}

export default Icon;
