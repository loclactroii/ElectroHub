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
import { MyAccount } from "./pages/MyAccount";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <div className="min-h-screen w-full">
      <TopHeader />
      <Navigation />
      <div className="m-[0rem_auto_8.75rem_auto] box-content max-w-[73.125rem] pl-8 pr-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/product" element={<ProductDetail />} /> */}
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
