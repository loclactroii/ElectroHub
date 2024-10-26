import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { TopHeader } from "./components/TopHeader";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Wishlist } from "./pages/Wishlist";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <div className="min-h-screen w-full">
      <TopHeader />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
