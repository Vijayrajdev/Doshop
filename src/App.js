import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Products from "./components/Products";
import Product from "./components/Product/Product";
import Admin from "./components/Admin";
import Navbar from "./layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import Privateroute from "./routing/Privateroute";
import Footer from "./layouts/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Privateroute child={<Login />} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:productId" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
