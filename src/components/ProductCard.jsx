import React from 'react'
import white from "../assets/white.png"

const ProductCard = ({ title, subtitle, price, color = "white" }) => {
  return (
    <article className="w-full min-w-0">
      <div
        className="relative aspect-[0.64] w-full overflow-hidden bg-[#b9ced9]"
        style={{
          clipPath:
            "polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body text-[6px] uppercase tracking-[0.2em] text-[#304958]/25 sm:text-[7px]">
            <img
    src={white}
    alt=""
    className="h-full w-full object-contain"
  />
          </span>
        </div>
      </div>

      <div className="mt-2 font-body text-[6px] uppercase leading-[1.35] tracking-[0.1em] text-white/60 sm:mt-2.5 sm:text-[7px] lg:mt-3 lg:text-[8px]">
        <p className="text-white/75">{title}</p>

        <p>{subtitle}</p>

        <div className="mt-1 flex items-center gap-1.5">
          <span
            className={`h-[5px] w-[5px] shrink-0 rounded-full ${
              color === "black"
                ? "bg-[#172b37]"
                : color === "silver"
                  ? "bg-[#aebdc4]"
                  : "bg-white"
            }`}
          />

          <span>{color}</span>
        </div>

        <p className="mt-0.5 text-white/40">{price}</p>
      </div>
    </article>
  );
};

export default ProductCard;