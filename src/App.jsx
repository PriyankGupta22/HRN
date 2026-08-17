import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import NewCollection from "./components/NewCollection";
import ColdSection from "./components/ColdSection";
import ShopHero from "./components/ShopPage";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";

function Home() {
  return (
    <div>
      <Hero />
      <NewCollection />
      <ColdSection />
    </div>
  );
}

function Shop() {
  return (
    <div>
      <ShopHero />
      <ProductGrid />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;