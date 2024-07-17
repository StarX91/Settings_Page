import React from "react";
import { FaUser, FaRegCreditCard, FaShieldAlt, FaKey } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="bg-zinc-800 text-white w-full lg:w-1/4 h-full p-4 lg:p-8">
      <div className="flex flex-col space-y-8">
        <button className="flex items-center space-x-2 p-3 bg-zinc-700 border-2 border-zinc-400 rounded-md font-semibold">
          <FaUser />
          <span>Profile</span>
        </button>
        <button className="flex items-center space-x-2 p-3 bg-zinc-700 border-2 border-zinc-400 rounded-md font-semibold">
          <FaRegCreditCard />
          <span>Subscriptions</span>
        </button>
        <button className="flex items-center space-x-2 p-3 bg-zinc-700 border-2 border-zinc-400 rounded-md font-semibold">
          <FaRegCreditCard />
          <span>Invoices</span>
        </button>
        <button className="flex items-center space-x-2 p-3 bg-zinc-700 border-2 border-zinc-400 rounded-md font-semibold">
          <FaShieldAlt />
          <span>Security</span>
        </button>
        <button className="flex items-center space-x-2 p-3 bg-zinc-700 border-2 border-zinc-400 rounded-md font-semibold">
          <FaKey />
          <span>API keys</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
