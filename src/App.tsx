import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { TopHeader } from "./components/TopHeader";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="w-full min-h-screen ">
      <TopHeader />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
