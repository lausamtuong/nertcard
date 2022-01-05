import React from "react";
import Card from "../assets/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-[36px] relative font-extrabold  my-14 md:my-28 md:grid md:text-[48px] md:grid-cols-3 md:items-center">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p>
          Earn <span className="text-purple-300">More</span>
        </p>
        <p className="">Pay Less</p>
        <button
          className="text-[15px] px-6 py-[6px] font-bold bg-purple-500 rounded-xl hover:bg-pink-500 transition-all duration-300 md:text-[24px] md:px-8 md:py-[8px] "
        >
          Start
        </button>
      </div>
      <div className="mt-[50px] md:absolute md:right-[-5rem]">
        <img src={Card} alt="" />
      </div>
    </section>
  );
};

export default Slogan;
