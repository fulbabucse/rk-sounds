import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Card from "./Card";

const Products = ({ data }) => {
  const prevSlide = () => {
    document.getElementById("#content").scrollLeft -= 800;
  };
  const nextSlide = () => {
    document.getElementById("#content").scrollLeft += 800;
  };
  return (
    <div className="lg:px-10">
      <div className="bg-white pt-3 px-3 relative group pb-5 hover:pb-[3px]">
        <div className="hidden group-hover:block">
          <div
            className={`absolute left-3 right-3 top-[${50}%] flex justify-between items-center z-10 `}
          >
            <button
              onClick={prevSlide}
              className="h-20 w-10 rounded-md bg-white text-primary focus:border-2 focus:border-[#007185] flex justify-center items-center font-bold p-1"
            >
              <BsChevronLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="h-20 w-10 rounded-md bg-white text-primary focus:border-2 focus:border-[#007185] flex justify-center items-center font-bold p-1"
            >
              <BsChevronRight size={30} />
            </button>
          </div>
        </div>

        <div
          id="content"
          className="flex gap-4 group-hover:overflow-x-auto mt-2 scroll-smooth overflow-hidden transition-transform duration-500 ease-in-out"
        >
          {data?.map((product) => (
            <Card product={product} key={product?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
