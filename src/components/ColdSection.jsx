import React from "react";
import bg from "../assets/lastBg.png";

const ColdSection = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#304958] text-white">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#304958]/10" />

      <div className="relative z-10 min-h-[100svh] w-full px-6 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-12 xl:px-14">
        <div className="absolute left-[4%] top-[36%] max-w-[180px] font-body text-[7px] uppercase leading-[1.45] tracking-[0.13em] text-white/65 sm:max-w-[210px] sm:text-[8px] lg:left-[3.8%] lg:max-w-[230px] lg:text-[9px]">
          <p>
            HAN WAS BORN IN
            <br />
            THE MOUNTAINS, NOT
            <br />
            AS A TREND, BUT AS
            <br />
            A RESPONSE.
          </p>

          <p className="mt-4 text-white/45">
            / SPECIAL WINTER ISSUE /
          </p>
        </div>

        <div className="absolute right-[4%] top-[49%] max-w-[125px] text-right font-body text-[7px] uppercase leading-[1.45] tracking-[0.13em] text-white/65 sm:right-[4.5%] sm:max-w-[160px] sm:text-[8px] lg:right-[4%] lg:max-w-[185px] lg:text-[9px]">
          <p>
            FOR THOSE WHO
            <br />
            CLIMB, MEET FOR
            <br />
            THE COLD.
          </p>
        </div>

        <div className="absolute bottom-[7%] left-[4%] sm:bottom-[7.5%] lg:left-[3.8%] lg:bottom-[7%]">
          <h2 className="font-display text-[clamp(38px,5.1vw,76px)] leading-[0.86] tracking-[-0.025em]">
            BUILT FOR COLD
            <br />
            MADE FOR HEIGHT
            <br />
            FORGED TO LAST
          </h2>
        </div>

        <div className="absolute bottom-[7.5%] right-[4%] flex items-end gap-3 sm:right-[4.5%] lg:right-[4%]">
          <div className="hidden font-body text-[6px] uppercase leading-[1.4] tracking-[0.12em] text-white/50 sm:block lg:text-[7px]">
            <p>ENGINEERED FOR</p>
            <p>EXTREME CONDITIONS</p>
          </div>

          <div className="flex h-4 w-[105px] items-center gap-[2px] overflow-hidden sm:h-5 sm:w-[130px] lg:w-[145px]">
            <span className="h-full w-[3px] bg-white/75" />
            <span className="h-full w-[2px] bg-white/45" />
            <span className="h-full w-[5px] bg-white/75" />
            <span className="h-full w-[2px] bg-white/45" />
            <span className="h-full w-[3px] bg-white/75" />
            <span className="h-full w-[6px] bg-white/75" />
            <span className="h-full w-[2px] bg-white/45" />
            <span className="h-full w-[4px] bg-white/75" />
            <span className="h-full w-[2px] bg-white/45" />
            <span className="h-full w-[7px] bg-white/75" />
            <span className="h-full w-[3px] bg-white/45" />
            <span className="h-full w-[5px] bg-white/75" />
            <span className="h-full w-[2px] bg-white/45" />
            <span className="h-full w-[4px] bg-white/75" />
            <span className="h-full w-[6px] bg-white/75" />
            <span className="h-full w-[2px] bg-white/45" />
            <span className="h-full w-[4px] bg-white/75" />
            <span className="h-full w-[3px] bg-white/45" />
            <span className="h-full w-[7px] bg-white/75" />
            <span className="h-full w-[2px] bg-white/45" />
            <span className="h-full w-[5px] bg-white/75" />
            <span className="h-full w-[3px] bg-white/45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColdSection;