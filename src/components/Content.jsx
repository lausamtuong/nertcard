import React from "react";
import {useSpring, animated} from "react-spring"
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../assets/checkpoint.svg";
const Content = () => {
  const customer =useSpring({customers:120312,from :{customers:0}})
  const card =useSpring({cards:20941,from :{cards:0}})
  return (
    <section className="md:flex md:flex-row md:justify-around">
      <div className="text-bold bg-gradient-to-b from-white/40 to-transparent shadow-lg rounded-[12px] md:h-[70%] md:w-[20%] ml-[70px] mr-[54px] flex flex-col items-center justify-center">
        <div className="flex mt-12 items-start gap-5 ">
          <FaUser size={"22px"} className="mr-[10px] mt-[5px]" />
          <div className="text-[20px] font-bold">
            <animated.div>
            {customer.customers.to((val)=>Math.floor(val))}
            </animated.div>
            <p className="text-[14px] md:text-[20px]">Customers</p>
          </div>
        </div>
        <div className="flex mt-[10px] gap-5 mb-12">
          <BsFillCreditCardFill size={"22px"} className="mr-[10px]  mt-[5px]" />
          <div className="text-[20px] font-bold">
          <animated.div>
            {card.cards.to((val)=>Math.floor(val))}
            </animated.div>
            <p className="text-[14px]  md:text-[20px]">CardIssued</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[30%] md:ml-[-100px]">
        <div className="mt-[50px] md:mt-0 flex flex-col  my-0 gap-3 w-[50%] mx-auto md:w-[100%] md:gap-8">
          <div className="flex gap-4 ">
            <img src={checkIconMobile} alt="" />
            <p>Card report send to your phone every weeks</p>
          </div>
          <div className="flex gap-4 ">
            <img src={checkIconMobile} alt="" />
            <p>No external fees</p>
          </div>
          <div className="flex gap-4 ">
            <img src={checkIconMobile} alt="" />
            <p>Send spending limits and restriction</p>
          </div>
          <div className="flex gap-4 ">
            <img src={checkIconMobile} alt="" />
            <p>Faster and Faster</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
