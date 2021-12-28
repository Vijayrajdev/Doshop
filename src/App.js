import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Product from "./components/Product";
import Order from "./components/Order";
import Myorders from "./components/Myorders";
import Admin from "./components/Admin";
import Navbar from "./layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import Privateroute from "./routing/Privateroute";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Privateroute child={<Login />} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
