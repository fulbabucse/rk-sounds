import React from "react";
import { AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-6">
      {/* Logo section */}
      <div>
        <h1 className="text-[22px] text-gray-800 font-bold">Headphone</h1>
        <p className="ml-3 font-semibold text-gray-800">For the top brand</p>
      </div>
      <div className="flex items-center gap-2">
        <div class="pt-2 relative mx-auto text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <span class="absolute -left-3 top-0 mt-5 ml-4">
            <AiOutlineSearch size={20} />
          </span>
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <VscSettings size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black bg-[#17FF3C] p-1 rounded-md">
            <AiOutlineMail size={25} />
          </span>
          <span className="text-black bg-[#53FF027D] p-1 rounded-md">
            <MdNotificationsActive size={25} />
          </span>
          <span className="text-black bg-[#17FF3C] p-1 rounded-md">
            <FaUser size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
