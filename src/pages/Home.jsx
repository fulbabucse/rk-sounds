import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero-head.png";
import { Link } from "react-router-dom";
import ratingStar from "../assets/star.png";
import wishlist from "../assets/love.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import Card from "../components/Card";
import headphones from "../assets/headphones.png";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex">
        <Link class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 py-6">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={heroImage}
            alt="hero headphones"
          />
          <div class="flex flex-col justify-between p-4 leading-normal space-y-1">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Beats Studio3 Wireless Headphone
            </h5>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <img src={ratingStar} alt="rating" />
                <img src={ratingStar} alt="rating" />
                <img src={ratingStar} alt="rating" />
                <img src={ratingStar} alt="rating" />
                <img src={ratingStar} alt="rating" />
              </div>
              <p className="text-[#756B6B]">(200+ reviews)</p>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ergonomic or cupe with on-oor controls up to 22 hours of tening
              time. Apple Wi crip & Closs
            </p>
            <p className="text-[#07FFD2] font-semibold">Price $ 450.55</p>
            <div className="flex items-center gap-6">
              <h1 className="text-semibold">Color:</h1>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#66FF1E]"></div>
                <div className="w-5 h-5 rounded-full bg-[#1EFFD6] ring-1 ring-[#1EFFD6]  ring-offset-2"></div>
                <div className="w-5 h-5 rounded-full bg-[#1E78FF]"></div>
                <div className="w-5 h-5 rounded-full bg-[#8E3785]"></div>
              </div>

              <div className="flex justify-center w-1/5 bg-gray-100 shadow">
                <button>
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value="1"
                />

                <button>
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img
                src={wishlist}
                alt="wishlist"
                className="ring-2 ring-[#38FF4C] ring-offset-2 rounded-md"
              />
              <button className="rounded-lg px-3 ring-1 ring-[#1EFFD6] ring-offset-2">
                Add to Cart
              </button>
              <button className="rounded-lg px-3 py-[2px] bg-[#38FF4C]">
                Buy now
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div>
        <div className="flex gap-3">
          <div className="mt-10 flex">
            <div className="flex-1 pr-6">
              {/* display product */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((product) => (
                  <Card key={product?._id} product={product} />
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <h1 className="text-[#66FF1E] font-semibold text-xl">
                  Explore The Popular Categories
                </h1>
                <button className="hover:underline">See all</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="shadow-md p-4 rounded-md flex items-center gap-3">
                  <div className="flex items-center">
                    <img
                      src={icon1}
                      alt=""
                      className="bg-gray-200 p-1 rounded-full"
                    />
                    <img
                      src={icon2}
                      alt=""
                      className="bg-gray-200 p-1 rounded-full"
                    />
                    <img
                      src={icon3}
                      alt=""
                      className="bg-gray-200 p-1 rounded-full"
                    />
                  </div>
                  <div className="border-l-4 border-l-black pl-3">
                    <h1 className="text-[18px] font-semibold">
                      Popular top 10 brands
                    </h1>
                    <p>$400+ Orders & reviews</p>
                  </div>
                </div>

                <div className="shadow-md p-4 rounded-md flex items-center gap-3">
                  <div className="flex items-center">
                    <img
                      src={icon1}
                      alt=""
                      className="bg-gray-200 p-1 rounded-full"
                    />
                    <img
                      src={icon2}
                      alt=""
                      className="bg-gray-200 p-1 rounded-full"
                    />
                    <img
                      src={icon3}
                      alt=""
                      className="bg-gray-200 p-1 rounded-full"
                    />
                  </div>
                  <div className="border-l-4 border-l-black pl-3">
                    <h1 className="text-[18px] font-semibold">
                      Popular top 10 brands
                    </h1>
                    <p>$400+ Orders & reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side daily dials section */}
            <div className="w-64">
              <div className="flex items-center gap-2 mt-4">
                <h1 className="text-gray-800 font-semibold text-xl">
                  Daily Deals
                </h1>
                <button className="hover:underline">See all</button>
              </div>
              <div className="flex flex-col gap-1 mt-4">
                {[...Array(7)]?.map((_, index) => (
                  <div className="flex gap-2 items-center">
                    <img src={headphones} alt="" className="w-10 h-10" />
                    <div>
                      <h1>Bots New Headphone </h1>
                      <small>256 Review And 1150 Order</small>
                    </div>
                    <p>Price $45.5</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
