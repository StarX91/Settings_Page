import React from "react";
import Starx from "../assets/StarX91-Logo.svg";
import { MdDashboard } from "react-icons/md";
import { PiDroneFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-black w-full h-auto md:h-21 p-4">
      <div className="flex w-full md:w-36 bg-white mb-4 md:mb-0 mx-auto md:mx-0 h-12 rounded-3xl items-center justify-center">
        <img src={Starx} alt="starx logo" className="h-8 md:h-8" />
      </div>
      <div className="flex flex-wrap bg-zinc-900  w-full md:w-1/2 rounded-3xl justify-center md:justify-between">
        <button className="w-20 h-14  my-1 rounded-sm flex flex-col items-center">
          <MdDashboard className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[11px] font-semibold">Dashboard</p>
        </button>
        <button className="bg-zinc-800 w-20 h-13 my-1 rounded-sm flex flex-col items-center">
          <PiDroneFill className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[12px] font-semibold">Drones</p>
        </button>
        <button className="w-20 h-14 my-1 rounded-sm flex flex-col items-center">
          <SlCalender className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[9px] my-2 font-bold text-center">
            Control Center
          </p>
        </button>
        <button className="w-20 h-14 rounded-sm flex flex-col items-center">
          <IoIosPeople className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[12px] font-semibold">Teams</p>
        </button>
        <button className="w-20 h-14 my-1 rounded-sm flex flex-col items-center">
          <IoSettingsSharp className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[12px] font-semibold">Settings</p>
        </button>
        <button className="w-20 h-14 my-1 rounded-sm flex flex-col items-center">
          <IoIosAddCircle className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[12px] font-semibold">Add</p>
        </button>
      </div>
      <button className="flex bg-zinc-700 w-12 my-4 md:my-0 h-12 rounded-full mx-auto md:mx-0"></button>
    </div>
  );
};

export default Navbar;
