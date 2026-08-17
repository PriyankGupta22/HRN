import React from "react";
import {
  FaSearch,
  FaTrash,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import background from "../assets/background.png";
import person from "../assets/person.png";
import ProductCard from "./ProductCard";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#304958] text-white">

      {/* BACKGROUND */}
      <img
        src={background}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 z-[1] bg-[#203746]/10" />

      {/* NAVBAR */}
      <header className="absolute left-0 top-0 z-50 flex w-full items-start justify-between px-5 pt-6 sm:px-8 sm:pt-7 lg:px-12 lg:pt-8">
        <div className="font-display text-[25px] leading-none sm:text-[28px] lg:text-[30px]">
          HΛN
        </div>

        <nav className="absolute left-1/2 top-7 hidden -translate-x-1/2 items-center gap-9 font-body text-[8px] uppercase tracking-[0.2em] text-white/75 md:flex lg:top-8 lg:gap-14 lg:text-[9px]">
          <a href="#">Collection 1</a>
          <a href="#">Clothes</a>
          <a href="#">Collection</a>
          <a href="#">Features</a>
        </nav>

        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-white text-[#304958] sm:h-9 sm:w-9">
            <FaSearch size={11} />
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-white text-[#304958] sm:h-9 sm:w-9">
            <FaTrash size={11} />
          </button>
        </div>
      </header>

      <div className="relative z-10 min-h-[100svh]">

        {/* LEFT CONTENT */}
        <div className="absolute left-[4%] top-[28%] z-30 w-[40%] sm:top-[29%] sm:w-[37%] lg:top-[28%] lg:w-[34%]">
          <p className="mb-5 font-body text-[7px] uppercase tracking-[0.18em] text-white/55 sm:text-[8px] lg:mb-6 lg:text-[9px]">
            The future winter wear / 01 / series 01
          </p>

          <h1 className="font-display text-[15vw] leading-[0.79] tracking-[-0.025em] sm:text-[12vw] lg:text-[6vw]">
            COLLECTION
            <br />
            ARTIC 01
            <sup className="ml-1 align-top font-body text-[0.2em] tracking-normal">
              ™
            </sup>
          </h1>

          <div className="mt-8 grid max-w-[360px] grid-cols-[auto_1fr] gap-x-8 gap-y-4 font-body text-[7px] uppercase tracking-[0.16em] text-white/55 sm:mt-10 sm:text-[8px] lg:mt-12 lg:gap-x-10 lg:gap-y-5 lg:text-[9px]">
            <span>Size</span>

            <div className="flex gap-6 sm:gap-8 lg:gap-10">
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>

            <span>Colour</span>

            <div className="flex gap-6 sm:gap-8 lg:gap-10">
              <span>White</span>
              <span>Silver</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5 sm:mt-9 sm:gap-6 lg:mt-10 lg:gap-8">
            <button className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-[28%] border border-white text-[23px] font-light transition-transform duration-300 hover:scale-105 sm:h-[88px] sm:w-[88px] lg:h-[105px] lg:w-[105px] lg:text-[27px]">
              ↗
            </button>

            <button className="font-body text-[6px] uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-70 sm:text-[10px] lg:text-[11px] flex flex-col">
              <div>ADD TO CART</div>
              <div className="text-[30px]">$899.99</div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-[21%] z-20 flex h-[95%] w-[57%] items-end justify-center sm:left-[23%] sm:w-[53%] lg:left-[24%] lg:h-[96%] lg:w-[51%]">
          <img
            src={person}
            alt="Arctic collection model"
            className="h-full w-full object-contain object-bottom"
          />
        </div>

        <div className="absolute right-0 top-[27%] z-30 w-[29%] overflow-hidden sm:top-[28%] sm:w-[30%] lg:top-[27%] lg:w-[29%]">
          <div className="flex w-max items-start gap-4 lg:gap-5">
            <ProductCard
              title="ARTIC PUFFER"
              subtitle="01 / WHITE"
              price="$899.99"
              color="white"
            />

            <ProductCard
              title="ARTIC PUFFER"
              subtitle="02 / SILVER"
              price="$899.99"
              color="silver"
            />
          </div>

          <div className="flex w-[clamp(145px,15vw,255px)] justify-center gap-8 pt-4 font-body text-[7px] uppercase tracking-[0.18em] text-white/55 sm:text-[8px]">
            <span>01</span>
            <span>07</span>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 z-40 flex items-center gap-3 font-body text-[7px] uppercase tracking-[0.18em] text-white/55 sm:left-8 lg:left-12">
          <span className="h-[6px] w-[6px] rounded-full bg-white/60" />
          <span>Explore Collection</span>
        </div>

        <div className="absolute bottom-5 right-5 z-40 flex items-center gap-2 sm:right-8 sm:gap-3 lg:right-12">
          <button className="flex h-6 w-6 items-center justify-center rounded-[2px] bg-white text-[#304958] transition-transform hover:scale-110">
            <FaInstagram size={11} />
          </button>

          <button className="flex h-6 w-6 items-center justify-center rounded-[2px] bg-white text-[#304958] transition-transform hover:scale-110">
            <FaFacebookF size={11} />
          </button>

          <button className="flex h-6 w-6 items-center justify-center rounded-[2px] bg-white text-[#304958] transition-transform hover:scale-110">
            <FaTwitter size={11} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;