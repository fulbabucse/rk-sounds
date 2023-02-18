import React from "react";
import { Link } from "react-router-dom";
import { BsHeadphones, BsClockHistory } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import {
  AiFillHome,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdOutlineSettings, MdExplore, MdSaveAlt } from "react-icons/md";

const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r-2 border-r-gray-100">
          <div>
            <Link
              to="/"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <BsHeadphones size={40} />
              <span class="ml-3">RK Sounds</span>
            </Link>
          </div>
          <ul class="flex flex-col justify-center gap-2">
            <li>
              <Link
                to="home"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillHome size={20} />
                <span class="flex-1 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="explore"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdExplore size={20} />
                <span class="flex-1 whitespace-nowrap">Explore</span>
              </Link>
            </li>
            <li>
              <Link
                to="saved"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdSaveAlt size={20} />
                <span class="flex-1 whitespace-nowrap">Saved</span>
              </Link>
            </li>
            <li>
              <Link
                to="cart"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiOutlineShoppingCart size={20} />
                <span class="flex-1 whitespace-nowrap">Cart</span>
              </Link>
            </li>
            <li>
              <Link
                to="selling"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillHome size={20} />
                <span class="flex-1 whitespace-nowrap">Selling</span>
              </Link>
            </li>
            <li>
              <Link
                to="profile"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUserAlt size={20} />
                <span class="flex-1 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="history"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BsClockHistory size={20} />
                <span class="flex-1 whitespace-nowrap">History</span>
              </Link>
            </li>
            <li>
              <Link
                to="contact-us"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiOutlineMessage size={20} />
                <span class="flex-1 whitespace-nowrap">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="settings"
                class="flex items-center gap-2 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdOutlineSettings size={20} />
                <span class="flex-1 whitespace-nowrap">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
