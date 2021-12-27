import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Product from "./components/Product";
import Order from "./components/Order";
import Myorders from "./components/Myorders";
import Admin from "./components/Admin";

const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <Signup />
      <Products />
      <Product />
      <Order />
      <Myorders />
      <Admin />
    </div>
  );
};

export default App;
