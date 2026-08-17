import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product?.defaultSize || "M"
  );
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#18384d] text-white">
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Product not found
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-block border border-white/20 px-6 py-3 text-[9px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-[#18384d]"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const image =
    product.images?.[selectedImage] || product.images?.[0];

  const changeImage = (direction) => {
    const total = product.images.length;

    setSelectedImage((current) => {
      if (direction === "next") {
        return (current + 1) % total;
      }

      return (current - 1 + total) % total;
    });
  };

  const addToCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("yen-cart") || "[]"
    );

    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
      image: product.images[0],
    };

    cart.push(cartItem);

    localStorage.setItem("yen-cart", JSON.stringify(cart));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2200);
  };

  const toggleWishlist = () => {
    setWishlist((current) => !current);
  };

  return (
    <main className="min-h-screen bg-[#18384d] text-[#edf4f6]">

      <div className="px-5 pt-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">
          <Link
            to="/shop"
            className="transition hover:text-white/70"
          >
            Shop
          </Link>

          <span>/</span>

          <span>{product.category}</span>

          <span>/</span>

          <span className="text-white/55">
            {product.name}
          </span>
        </div>
      </div>

      <section className="px-5 pb-8 pt-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[650px] grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(330px,0.8fr)]">

          <div className="relative flex min-h-[550px] overflow-hidden bg-[#294c61]">

            <div className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:left-5">

              <button
                type="button"
                onClick={() => changeImage("prev")}
                className="mx-auto mb-1 flex h-6 w-6 items-center justify-center text-white/50 transition hover:text-white"
              >
                <HiChevronDown className="rotate-180" />
              </button>

              {product.images.map((item, index) => (
                <button
                  key={`${item}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-[62px] w-[50px] overflow-hidden rounded-[2px] border transition sm:h-[70px] sm:w-[54px] ${
                    selectedImage === index
                      ? "border-white/80"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}

              <button
                type="button"
                onClick={() => changeImage("next")}
                className="mx-auto mt-1 flex h-6 w-6 items-center justify-center text-white/50 transition hover:text-white"
              >
                <HiChevronDown />
              </button>
            </div>

            <div className="relative ml-[68px] flex min-h-[550px] flex-1 items-center justify-center overflow-hidden sm:ml-[80px]">

              <span className="absolute left-3 top-3 h-8 w-8 border-l border-t border-white/10 sm:left-5 sm:top-5" />
              <span className="absolute right-3 top-3 h-8 w-8 border-r border-t border-white/10 sm:right-5 sm:top-5" />
              <span className="absolute bottom-3 left-3 h-8 w-8 border-b border-l border-white/10 sm:bottom-5 sm:left-5" />
              <span className="absolute bottom-3 right-3 h-8 w-8 border-b border-r border-white/10 sm:bottom-5 sm:right-5" />

              <img
                src={image}
                alt={product.name}
                className="relative z-10 h-full max-h-[680px] w-full object-contain object-center"
              />

              <div className="absolute left-4 top-8 hidden font-mono text-[6px] uppercase leading-[1.7] tracking-[0.12em] text-white/30 sm:block">
                <span>REF // {product.shortName}</span>
                <br />
                <span>SYS // A-01</span>
                <br />
                <span>ALT // 7,054M</span>
              </div>

              <div className="absolute bottom-5 right-5 hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[8px] text-white/40 sm:flex">
                +
              </div>

            </div>
          </div>

          <div className="flex flex-col justify-center px-1 py-5 lg:px-4">

            <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/40">
              {product.collection}
            </p>

            <h1 className="mt-3 max-w-[450px] text-[clamp(2.8rem,5vw,5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.055em] text-white">
              {product.name}
            </h1>

            <div className="mt-7 flex items-center gap-6">
              <span className="text-[17px] font-medium">
                ${product.price.toFixed(2)}
              </span>

              <span className="text-[8px] tracking-[0.15em] text-white/65">
                ★★★★★
              </span>

              <span className="text-[8px] text-white/35">
                4.8 (128)
              </span>
            </div>

            <p className="mt-6 max-w-[370px] text-[9px] leading-[1.7] text-white/55">
              {product.description}
            </p>

            <div className="mt-7">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.08em] text-white/65">
                  Color: {selectedColor}
                </span>
              </div>

              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() =>
                      setSelectedColor(color.name)
                    }
                    aria-label={color.name}
                    className={`h-7 w-7 border p-[2px] transition ${
                      selectedColor === color.name
                        ? "border-white"
                        : "border-white/15 hover:border-white/50"
                    }`}
                  >
                    <span
                      className="block h-full w-full"
                      style={{
                        backgroundColor: color.value,
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.08em] text-white/65">
                  Size: {selectedSize}
                </span>

                <button
                  type="button"
                  className="text-[7px] uppercase tracking-[0.12em] text-white/40 transition hover:text-white"
                >
                  Size Guide →
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-9 min-w-[40px] items-center justify-center border px-3 text-[8px] transition ${
                      selectedSize === size
                        ? "border-white/40 bg-[#d8e6ed] text-[#18384d]"
                        : "border-white/10 text-white/55 hover:border-white/35 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.08em] text-white/55">
                Quantity
              </span>

              <div className="flex h-8 items-center border border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="flex h-full w-8 items-center justify-center text-white/50 transition hover:text-white"
                >
                  <FiMinus size={10} />
                </button>

                <span className="w-8 text-center text-[9px]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => q + 1)
                  }
                  className="flex h-full w-8 items-center justify-center text-white/50 transition hover:text-white"
                >
                  <FiPlus size={10} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={addToCart}
              className="mt-7 h-[48px] w-full bg-[#c6dce8] text-[9px] font-semibold uppercase tracking-[0.08em] text-[#18384d] transition hover:bg-white"
            >
              {added ? "ADDED TO CART ✓" : "ADD TO CART"}
            </button>

            <button
              type="button"
              onClick={toggleWishlist}
              className="mt-5 flex items-center justify-center gap-2 text-[8px] uppercase tracking-[0.08em] text-white/45 transition hover:text-white"
            >
              <FiHeart
                size={12}
                className={wishlist ? "fill-current" : ""}
              />

              {wishlist
                ? "Added to Wishlist"
                : "Add to Wishlist"}
            </button>

          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-5 py-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="flex items-center gap-3">
            <span className="text-xl text-white/50">✧</span>

            <div>
              <p className="text-[9px] font-medium uppercase">
                {product.temperature}
              </p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.08em] text-white/35">
                Temperature Rating
              </p>
            </div>
          </div>

          {product.features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3"
            >
              <span className="text-xl text-white/50">✧</span>

              <div>
                <p className="text-[9px] font-medium uppercase">
                  {feature.title}
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.08em] text-white/35">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.6fr_0.45fr]">

          <div>
            <div className="mb-6 flex gap-7 border-b border-white/10 pb-3">
              <span className="border-b border-white pb-3 text-[8px] uppercase">
                Details
              </span>

              <span className="text-[8px] uppercase text-white/30">
                Materials
              </span>

              <span className="hidden text-[8px] uppercase text-white/30 sm:block">
                Technology
              </span>
            </div>

            <p className="text-[9px] leading-[1.8] text-white/50">
              The {product.name} delivers unmatched warmth
              with minimal weight and maximum protection.
              Built with advanced insulation and a
              windproof exterior shell, it is designed for
              extreme environments.
            </p>

            <ul className="mt-5 space-y-2">
              {product.details.map((detail) => (
                <li
                  key={detail}
                  className="text-[8px] text-white/40"
                >
                  — {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[300px] overflow-hidden bg-[#294c61]">
            <img
              src="/assets/mountain.jpg"
              alt="Arctic mountain"
              className="h-full w-full object-cover opacity-70"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
                ARTIC / TESTED / 01
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-8 lg:flex-col lg:justify-center lg:gap-7">
            <div>
              <p className="text-2xl font-light">
                {product.fillPower}
              </p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.1em] text-white/35">
                Fill Power
              </p>
            </div>

            <div>
              <p className="text-2xl font-light">
                {product.weight}
              </p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.1em] text-white/35">
                Weight
              </p>
            </div>

            <div>
              <p className="text-2xl font-light">
                {product.tested}
              </p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.1em] text-white/35">
                Tested
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default ProductDetails;