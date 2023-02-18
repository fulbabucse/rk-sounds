import React from "react";
import team1 from "../assets/image-1.png";
import team2 from "../assets/image-2.png";
import team3 from "../assets/image-3.png";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <div class="py-20 bg-gray-50">
        <div class="container mx-auto px-6 md:px-12 xl:px-32">
          <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
              Team Awesome
            </h2>
          </div>
          <div class="grid gap-12 items-center md:grid-cols-3 ">
            {/* Team member 1 */}
            <div class="space-y-4 text-center">
              <img
                class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={team1}
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 class="text-2xl">Robert Mcgrath</h4>
                <span class="block text-sm text-gray-500">Founder</span>
              </div>

              <div className="h-[3px] w-24 mx-auto bg-yellow-500 rounded-full"></div>

              {/* Social Icons */}
              <div
                class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
              >
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <BsFacebook />
                </Link>
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <AiFillTwitterCircle />
                </Link>
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <BsPinterest />
                </Link>
              </div>
            </div>

            {/* Team member 2 */}
            <div class="space-y-4 text-center">
              <img
                class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                src={team2}
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 class="text-2xl">Michelle Mager</h4>
                <span class="block text-sm text-gray-500">Marketing Head</span>
              </div>

              <div className="h-[3px] w-24 mx-auto bg-yellow-500 rounded-full"></div>

              {/* Social Icons */}
              <div
                class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
              >
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <BsFacebook />
                </Link>
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <AiFillTwitterCircle />
                </Link>
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <BsPinterest />
                </Link>
              </div>
            </div>

            {/* Team member 3 */}
            <div class="space-y-4 text-center">
              <img
                class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={team3}
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 class="text-2xl">Paul Charter</h4>
                <span class="block text-sm text-gray-500">Support Manager</span>
              </div>

              <div className="h-[3px] w-24 mx-auto bg-yellow-500 rounded-full"></div>

              {/* Social Icons */}
              <div
                class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
              >
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <BsFacebook />
                </Link>
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <AiFillTwitterCircle />
                </Link>
                <Link class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                  <BsPinterest />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
