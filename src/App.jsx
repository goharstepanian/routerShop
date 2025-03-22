import { Route, Routes } from "react-router-dom";
import { Layout, Home, Products, Product, Cart, Error } from "./index";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  , []);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout cart={cart} />}>
            <Route index element={<Home />} />
            <Route
              path="/products"
              element={<Products products={products} addToCart={addToCart} />}
            />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
