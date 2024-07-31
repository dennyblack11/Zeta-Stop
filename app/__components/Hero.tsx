import React from "react";
import { BiRocket } from "react-icons/bi";
import Button from "./re-use/Button";
import Image from "next/image";
import Container from "./re-use/Container";

const Hero = () => {
  return (
    <Container className="grid grid-cols-2 items-center gap-5 text-white ">
      <div className="space-y-5 col-span-2 lg:col-span-1">
        <h1 className="text-[35px] lg:text-[55px] leading-[1] font-bold">
          Discover ZepaStops Near you & Rest while on your walks, Redeem
          Geo-Drops, Coupons and more
        </h1>
        <p className="font-light text-[20px]">
          Our marketplace; Your journey to better health, community engagement,
          and more money in your wallet starts here. Collect, buy and sell your
          StepPower with more than 20000 partner businesses.
        </p>
        <Button className="text-[10px] gap-2 md:text-[16px] ">
          <BiRocket size={12} />
          <p>7 For Businesses: Become a Partner</p>
        </Button>
        <div className="flex justify-between w-[100%] lg:w-[50%]">
          {[
            {
              b: "390k+",
              p: "Total Steps",
            },
            {
              b: "100k+",
              p: "Users",
            },
            {
              b: "25+",
              p: "Partners",
            },
          ].map((el: { b: string; p: string }, i: number) => (
            <div key={i} className="space-y-1">
              <b>{el.b}</b>
              <p>{el.p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full col-span-2 lg:col-span-1 flex lg:justify-end ">
        <div className="w-full rounded-[30px] h-[500px] grid grid-rows-10 bg-[#3b3b3b]">
          <div className="row-span-6 md:row-span-8 flex items-center justify-center">
            <Image
              src={"/assets/zeta.png"}
              width={100}
              height={100}
              unoptimized
              className="w-full h-full rounded-t-[30px] object-cover object-center "
              alt="Zeta"
            />
          </div>
          <div className="row-span-4 md:row-span-2 w-full flex justify-center flex-col space-y-3 pl-8 md:pr-0 pr-4">
            <p className="text-[20px]">
              <b>Trekking is Commodity Here</b>
            </p>
            <p>
              <small className="text-[15px]">
                The Zepama Ecosystem, Advancing together.
              </small>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
