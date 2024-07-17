import React from "react";
import Menu from "./Menu";
import Data from "./Data";

const Info = () => {
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-col lg:flex-row lg:pt-10 lg:pb-10 h-auto lg:h-screen lg:mx-20 rounded-md">
          <Menu />
          <Data />
        </div>
      </div>
    </>
  );
};

export default Info;
