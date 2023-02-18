import React from "react";
import ratingStar from "../assets/star.png";

const Card = ({ product }) => {
  const { name, picture, price, ratting } = product;
  return (
    <div class="relative block rounded-xl border border-gray-100 p-3 shadow-xl">
      <div className="flex items-center justify-center">
        <img src={picture} alt={name} />
      </div>

      {/* Product name */}
      <h2 className="font-bold text-gray-800 text-xl">{name}</h2>

      <p class="mt-2 hidden text-sm sm:block">Price: ${price}</p>

      <div className="flex gap-1 items-center">
        <img src={ratingStar} alt="" />
        <p>{ratting}</p>
      </div>
    </div>
  );
};

export default Card;
