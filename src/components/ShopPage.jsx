import React from "react";
import mountain from "../assets/lastBg.png";

const ShopHero = () => {
  return (
    <section className="relative h-[62vh] min-h-[520px] w-full overflow-hidden bg-[#183448] text-[#eef5f7]">
      
      <img
        src={mountain}
        alt="Arctic mountain landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#163447]/45" />

      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
        
        <div className="flex w-full items-end justify-between gap-10">

          <div>
            <p className="mb-4 font-mono text-[8px] uppercase tracking-[0.28em] text-white/55 sm:text-[9px]">
              YEN / COLLECTIONS / 01
            </p>

            <h1 className="font-display text-[clamp(3.5rem,9vw,8.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.001em]">
              SHOP
              <br />
              <span className="text-white/90">
                ALL COLLECTIONS
              </span>
            </h1>
          </div>

          <div className="hidden w-[220px] shrink-0 pb-1 md:block lg:w-[270px]">
            <div className="mb-5 h-px w-8 bg-white/50" />

            <p className="font-mono text-[9px] uppercase leading-[1.65] tracking-[0.08em] text-white/75">
              Engineered outerwear
              <br />
              for extreme conditions.
              <br />
              Built for cold.
              <br />
              Made for height.
              <br />
              Forged to last.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/35" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/45">
                Explore the collection
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 hidden font-mono text-[7px] uppercase leading-[1.5] tracking-[0.15em] text-white/45 sm:block lg:right-12">
          <span className="mr-2 text-white/25">[</span>
          71.7069° N
          <br />
          42.6043° W
          <span className="ml-2 text-white/25">]</span>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
    </section>
  );
};

export default ShopHero;