import { Route, Routes } from "react-router-dom";
import { Layout, Home, Products, Product, Cart, Error } from "./index";
import { products } from "./data/db";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route
              path="/product/:id"
              element={<Product products={products} />}
            />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
