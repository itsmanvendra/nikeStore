import React from 'react';

const ImageWithOverlay = ({ imageUrl, altText }) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt={altText} className="w-full" />
      <div className="overlay flex  z-0  items-center justify-center">
        <button className="bg-slate-100 opacity-60 text-gray-950 font-bold py-2 px-4 rounded-lg">SHOP</button>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
