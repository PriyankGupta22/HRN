import React from "react";
import { FaSlidersH } from "react-icons/fa";
import ProductCard from "./ProductCard";


const AuroraCard = () => {
  return (
    <article className="w-full">
      <div className="relative aspect-[1.58] w-full overflow-hidden bg-[#304958]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body text-[7px] uppercase tracking-[0.2em] text-white/25 sm:text-[8px]">
            Aurora Image
          </span>
        </div>

        <div className="absolute right-[7%] top-[27%]">
          <h3 className="font-display text-[clamp(25px,2.7vw,45px)] leading-none">
            AURORA
            <sup className="ml-1 align-top font-body text-[0.3em]">™</sup>
          </h3>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[11px]">
              ↗
            </div>

            <div className="font-body text-[6px] uppercase leading-[1.4] tracking-[0.1em] text-white/50 sm:text-[7px]">
              <p>Arctic Cart</p>
              <p>$1,799.99</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const NewCollection = () => {
  return (
    <section className="overflow-hidden bg-[#526f81] text-white">
      <div className="max-w-[1700px] px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20 p-10">
        <div className="flex flex-col ">
          <div className="flex items-start justify-between gap-6 sm:mb-15 md:mb-12 lg:mb-14">
            <h2 className="shrink-0 font-display text-[clamp(38px,4.4vw,72px)] leading-[0.85] tracking-[-0.035em]">
              NEW COLLECTION
            </h2>

            <div className="hidden flex-1 justify-center gap-14 pt-1 font-body text-[6px] uppercase leading-[1.45] tracking-[0.12em] text-white/45 md:flex lg:text-[7px]">
              <div>
                <p>01 NEW COLLECTION / 01</p>
                <p>ARCTIC SERIES / 01</p>
                <p>FUTURE WEAR</p>
              </div>

              <div>
                <p>WINTER 2026</p>
                <p>WHITE / SILVER</p>
                <p>LIMITED EDITION</p>
              </div>
            </div>

            <button className="flex shrink-0 items-center gap-2 rounded-md bg-white px-3 font-body text-[6px] uppercase tracking-[0.14em] text-[#304958] sm:px-4 sm:py-2.5 sm:text-[7px]">
              Filters
            </button>
          </div>

          <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-x-5 xl:gap-x-6">
            <AuroraCard />

            <ProductCard
              title="Aurora Silver"
              subtitle="Arctic 01 / Puffer Jacket"
              price="$1,299.99"
              color="white"
            />

            <ProductCard
              title="White Alpine"
              subtitle="Arctic 02 / Puffer Jacket"
              price="$1,399.99"
              color="silver"
            />

            <ProductCard
              title="Stellar Black"
              subtitle="Arctic 03 / Heavy Puffer"
              price="$1,199.99"
              color="black"
            />
          </div>

          <div className="mt-10 hidden lg:grid lg:grid-cols-5 lg:gap-x-5 xl:mt-14 xl:gap-x-6">
            <ProductCard
              title="Glacier White"
              subtitle="Arctic 04 / Puffer Jacket"
              price="$1,299.99"
              color="white"
            />

            <ProductCard
              title="Polar Grey"
              subtitle="Arctic 05 / Puffer Jacket"
              price="$1,249.99"
              color="silver"
            />

            <ProductCard
              title="Stellar Black"
              subtitle="Arctic 06 / Heavy Puffer"
              price="$1,399.99"
              color="black"
            />

            <ProductCard
              title="Ice Blue"
              subtitle="Arctic 07 / Puffer Jacket"
              price="$1,349.99"
              color="silver"
            />

            <ProductCard
              title="Pure White"
              subtitle="Arctic 08 / Shell Puffer"
              price="$1,299.99"
              color="white"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-10 md:grid-cols-4 md:gap-x-5 md:gap-y-12 lg:hidden">
            <div className="col-span-2 sm:col-span-3 md:col-span-2">
              <AuroraCard />
            </div>

            <ProductCard
              title="Aurora Silver"
              subtitle="Arctic 01 / Puffer Jacket"
              price="$1,299.99"
              color="white"
            />

            <ProductCard
              title="White Alpine"
              subtitle="Arctic 02 / Puffer Jacket"
              price="$1,399.99"
              color="silver"
            />

            <ProductCard
              title="Stellar Black"
              subtitle="Arctic 03 / Heavy Puffer"
              price="$1,199.99"
              color="black"
            />

            <ProductCard
              title="Glacier White"
              subtitle="Arctic 04 / Puffer Jacket"
              price="$1,299.99"
              color="white"
            />

            <ProductCard
              title="Polar Grey"
              subtitle="Arctic 05 / Puffer Jacket"
              price="$1,249.99"
              color="silver"
            />

            <ProductCard
              title="Stellar Black"
              subtitle="Arctic 06 / Heavy Puffer"
              price="$1,399.99"
              color="black"
            />

            <ProductCard
              title="Ice Blue"
              subtitle="Arctic 07 / Puffer Jacket"
              price="$1,349.99"
              color="silver"
            />

            <ProductCard
              title="Pure White"
              subtitle="Arctic 08 / Shell Puffer"
              price="$1,299.99"
              color="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;