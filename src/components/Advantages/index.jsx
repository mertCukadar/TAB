import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";

function Advantages() {
  return (
    <div className="bg-white ">
      <div className="w-[95%] md:w-[70%] mx-auto pt-24  text-center">
        <div className=" space-y-8 w-[100%] md:w-[80%] mx-auto">
          <h2 className="text-4xl">Danışmanlık Hizmetinin Temel Avantajları</h2>
          <p className="text-sm md:text-[1.05rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            ullam repellendus eos, aliquid voluptatum accusamus voluptatibus
            dolor aspernatur.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 pt-10">

          <div className="flex justify-center flex-col bg-orange-50 p-6">
            <div className="mx-auto ">
              <BsClockHistory className="text-4xl md:text-6xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold py-2">Lorem İpusum Dolor Sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              soluta officia officiis eaque.
            </p>
          </div>
          <div className="flex justify-center flex-col bg-orange-50 p-6">
            <div className="mx-auto ">
              <AiOutlineRise className="text-4xl md:text-6xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold py-2">Lorem İpusum Dolor Sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              soluta officia officiis eaque.
            </p>
          </div>{" "}
          <div className="flex justify-center flex-col bg-orange-50 p-6">
            <div className="mx-auto ">
              <MdBusinessCenter className="text-4xl md:text-6xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold py-2">Lorem İpusum Dolor Sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              soluta officia officiis eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
