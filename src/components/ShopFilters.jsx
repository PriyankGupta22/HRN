import React from "react";

const categories = [
  { label: "Puffer Jackets", count: 12 },
  { label: "Parkas", count: 6 },
  { label: "Shell Jackets", count: 4 },
  { label: "Accessories", count: 2 },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colors = [
  { name: "Frost", value: "#f5f7f7" },
  { name: "Ice", value: "#8ea6b7" },
  { name: "Slate", value: "#334b5b" },
  { name: "Black", value: "#111b22" },
  { name: "Blue", value: "#18577e" },
];

const ShopFilters = ({
  selectedCategories,
  setSelectedCategories,
  selectedSizes,
  setSelectedSizes,
  selectedColor,
  setSelectedColor,
  price,
  setPrice,
  resetFilters,
}) => {
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };

  return (
    <aside className="w-full shrink-0 lg:w-[145px]">
      <div className="flex items-center gap-2 border-b border-white/10 pb-5">
        <span className="relative block h-3 w-4">
          <span className="absolute left-0 top-[2px] h-px w-4 bg-white/50" />
          <span className="absolute left-0 top-[6px] h-px w-2.5 bg-white/50" />
          <span className="absolute left-0 top-[10px] h-px w-1.5 bg-white/50" />
        </span>

        <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/80">
          Filters
        </span>
      </div>

      <div className="border-b border-white/10 py-7">
        <h3 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/75">
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category.label}
              className="group flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.label)}
                onChange={() => toggleCategory(category.label)}
                className="peer sr-only"
              />

              <span className="flex h-3 w-3 items-center justify-center border border-white/20 bg-transparent transition peer-checked:border-white/60 peer-checked:bg-white/20">
                <span className="hidden h-1.5 w-1.5 bg-white peer-checked:block" />
              </span>

              <span className="text-[8px] text-white/45 transition group-hover:text-white/75">
                {category.label} ({category.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-b border-white/10 py-6">
        <h3 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/75">
          Color
        </h3>

        <div className="flex flex-wrap gap-2.5">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              aria-label={color.name}
              onClick={() =>
                setSelectedColor(
                  selectedColor === color.name ? "" : color.name
                )
              }
              className={`h-[17px] w-[17px] rounded-full border transition-all ${
                selectedColor === color.name
                  ? "scale-110 border-white ring-1 ring-white/50 ring-offset-2 ring-offset-[#18384d]"
                  : "border-white/20 hover:scale-110"
              }`}
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>

      <div className="border-b border-white/10 py-6">
        <h3 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/75">
          Size
        </h3>

        <div className="space-y-3">
          {sizes.map((size) => (
            <label
              key={size}
              className="group flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => toggleSize(size)}
                className="peer sr-only"
              />

              <span className="flex h-3 w-3 items-center justify-center border border-white/20 peer-checked:border-white/60 peer-checked:bg-white/20">
                <span className="hidden h-1.5 w-1.5 bg-white peer-checked:block" />
              </span>

              <span className="text-[8px] text-white/45 transition group-hover:text-white/75">
                {size}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-b border-white/10 py-6">
        <h3 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/75">
          Price
        </h3>

        <input
          type="range"
          min="100"
          max="1000"
          step="50"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="h-[2px] w-full cursor-pointer appearance-none bg-white/30 accent-white"
        />

        <div className="mt-3 flex justify-between text-[8px] text-white/40">
          <span>$100</span>
          <span>${price}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={resetFilters}
        className="mt-6 text-[8px] uppercase tracking-[0.08em] text-white/45 transition hover:text-white"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default ShopFilters;