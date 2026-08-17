import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import ShopFilters from "./ShopFilters";
import white from "../assets/white2.png"

const products = [
  {
    id: 1,
    name: "Aurora™ Puffer Jacket",
    category: "Puffer Jackets",
    price: 899.99,
    color: "Frost",
    sizes: ["S", "M", "L", "XL"],
    image: white,
  },
  {
    id: 2,
    name: "Frostguard™ Parka",
    category: "Parkas",
    price: 949.99,
    color: "Frost",
    sizes: ["M", "L", "XL"],
    image: white,
  },
  {
    id: 3,
    name: "Glacier™ Down Jacket",
    category: "Puffer Jackets",
    price: 799.99,
    color: "Ice",
    sizes: ["S", "M", "L"],
    image: white,
  },
  {
    id: 4,
    name: "Polar Shell™ Jacket",
    category: "Shell Jackets",
    price: 699.99,
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
    image: white,
  },
  {
    id: 5,
    name: "Arctic Vest™",
    category: "Puffer Jackets",
    price: 449.99,
    color: "Slate",
    sizes: ["S", "M", "L", "XL"],
    image: white,
  },
  {
    id: 6,
    name: "Summit™ Puffer Jacket",
    category: "Puffer Jackets",
    price: 849.99,
    color: "Frost",
    sizes: ["M", "L", "XL"],
    image: white,
  },
  {
    id: 7,
    name: "Icefield™ Parka",
    category: "Parkas",
    price: 999.99,
    color: "Ice",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: white,
  },
  {
    id: 8,
    name: "Northseeker™ Shell",
    category: "Shell Jackets",
    price: 699.99,
    color: "Black",
    sizes: ["M", "L", "XL"],
    image: white,
  },
  {
    id: 9,
    name: "Polar Expedition™",
    category: "Puffer Jackets",
    price: 899.99,
    color: "Blue",
    sizes: ["S", "M", "L"],
    image: white,
  },
  {
    id: 10,
    name: "Whiteout™ Parka",
    category: "Parkas",
    price: 899.99,
    color: "Frost",
    sizes: ["S", "M", "L", "XL"],
    image: white,
  },
];

const ProductGrid = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [price, setPrice] = useState(1000);
  const [sort, setSort] = useState("newest");
  const [gridView, setGridView] = useState("grid");
  const [page, setPage] = useState(1);

  const productsPerPage = 8;

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColor("");
    setPrice(1000);
    setPage(1);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedSizes.length > 0) {
      result = result.filter((product) =>
        selectedSizes.some((size) => product.sizes.includes(size))
      );
    }

    if (selectedColor) {
      result = result.filter(
        (product) => product.color === selectedColor
      );
    }

    result = result.filter((product) => product.price <= price);

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [
    selectedCategories,
    selectedSizes,
    selectedColor,
    price,
    sort,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );

  const visibleProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    window.scrollTo({
      top: document.getElementById("shop-products")?.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="shop-products"
      className="relative w-full bg-[#18384d] px-5 py-6 text-white sm:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">

        <ShopFilters
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          price={price}
          setPrice={setPrice}
          resetFilters={resetFilters}
        />

        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-4">

            <div className="flex flex-wrap items-center gap-7">

              <div className="flex items-center gap-2">
                <span className="text-[8px] uppercase tracking-[0.08em] text-white/55">
                  Categories
                </span>
                <HiChevronDown className="text-[11px] text-white/45" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[8px] uppercase tracking-[0.08em] text-white/55">
                  Color
                </span>
                <HiChevronDown className="text-[11px] text-white/45" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[8px] uppercase tracking-[0.08em] text-white/55">
                  Size
                </span>
                <HiChevronDown className="text-[11px] text-white/45" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[8px] uppercase tracking-[0.08em] text-white/55">
                  Price
                </span>
                <HiChevronDown className="text-[11px] text-white/45" />
              </div>

            </div>

            <div className="relative flex items-center gap-2">
              <span className="text-[8px] uppercase tracking-[0.08em] text-white/45">
                Sort by:
              </span>

              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                className="cursor-pointer appearance-none bg-transparent pr-4 text-[8px] uppercase tracking-[0.08em] text-white/75 outline-none"
              >
                <option
                  value="newest"
                  className="bg-[#18384d]"
                >
                  Newest
                </option>

                <option
                  value="low"
                  className="bg-[#18384d]"
                >
                  Price Low
                </option>

                <option
                  value="high"
                  className="bg-[#18384d]"
                >
                  Price High
                </option>

                <option
                  value="name"
                  className="bg-[#18384d]"
                >
                  Name
                </option>
              </select>

              <HiChevronDown className="pointer-events-none absolute right-0 text-[10px] text-white/40" />
            </div>
          </div>

          <div className="flex items-center justify-between py-5">
            <span className="text-[8px] uppercase tracking-[0.08em] text-white/40">
              {filteredProducts.length} items
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setGridView("grid")}
                className={`p-1 transition ${
                  gridView === "grid"
                    ? "text-white"
                    : "text-white/25 hover:text-white/60"
                }`}
              >
                <HiViewGrid size={15} />
              </button>

              <button
                type="button"
                onClick={() => setGridView("list")}
                className={`p-1 transition ${
                  gridView === "list"
                    ? "text-white"
                    : "text-white/25 hover:text-white/60"
                }`}
              >
                <MdViewList size={16} />
              </button>
            </div>
          </div>

          <div
            className={`grid gap-2 ${
              gridView === "grid"
                ? "grid-cols-2 xl:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className={`group overflow-hidden rounded-[3px] bg-[#c4d7e2] transition-transform duration-300 hover:-translate-y-1 ${
                    gridView === "list"
                      ? "flex h-[180px]"
                      : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-[#7894a5] ${
                      gridView === "list"
                        ? "h-full w-[180px] shrink-0"
                        : "aspect-[0.92]"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  <div
                    className={`text-[#18384d] ${
                      gridView === "list"
                        ? "flex flex-1 flex-col justify-center px-6"
                        : "px-3 py-3"
                    }`}
                  >
                    <h3 className="max-w-[130px] text-[10px] font-semibold uppercase leading-[1.15] tracking-[-0.02em]">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-[9px] font-medium">
                      ${product.price.toFixed(2)}
                    </p>

                    <div className="mt-2 flex gap-1.5">
                      {[1, 2, 3, 4].map((dot) => (
                        <span
                          key={dot}
                          className={`h-[7px] w-[7px] rounded-[1px] border border-[#18384d]/15 ${
                            dot === 1
                              ? "bg-[#101d24]"
                              : dot === 2
                              ? "bg-[#415b69]"
                              : dot === 3
                              ? "bg-[#8199a7]"
                              : "bg-[#d3e0e5]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full flex min-h-[350px] flex-col items-center justify-center border border-white/10">
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                  No products found
                </p>

                <button
                  onClick={resetFilters}
                  className="mt-4 border border-white/20 px-5 py-2 text-[8px] uppercase tracking-[0.1em] text-white/60 transition hover:bg-white/10 hover:text-white"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {filteredProducts.length > 0 && (
            <div className="flex items-center justify-center gap-2 py-8">

              <button
                type="button"
                onClick={() => changePage(page - 1)}
                disabled={page === 1}
                className="flex h-7 w-7 items-center justify-center border border-white/10 text-white/40 transition hover:border-white/30 hover:text-white disabled:pointer-events-none disabled:opacity-20"
              >
                <HiChevronLeft size={12} />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => changePage(pageNumber)}
                    className={`flex h-7 w-7 items-center justify-center border text-[9px] transition ${
                      page === pageNumber
                        ? "border-white/20 bg-[#d7e4eb] text-[#18384d]"
                        : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => changePage(page + 1)}
                disabled={page === totalPages}
                className="flex h-7 w-7 items-center justify-center border border-white/10 text-white/40 transition hover:border-white/30 hover:text-white disabled:pointer-events-none disabled:opacity-20"
              >
                <HiChevronRight size={12} />
              </button>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;